import React, { useState } from 'react';
import { connect } from 'twilio-video';
import ExitAlert from '../components/alerts/ExitAlert';
import Icon from '../components/icons/Icon';
import ChatMenu from '../components/menus/ChatMenu';
import {
  attachParticipantTracks,
  detachParticipantTracks,
  attachTracks
} from '../lib/media';
import { MEDIA_FLAGS } from '../lib/constants';
import Avatar from '../components/Avatar';
import * as S from '../styles';

function Participants(props) {
  const { me, meeting } = props;
  const [isVideoDisabled, toggleVideo] = useState(false);
  const [isAudioDisabled, toggleAudio] = useState(false);

  function connectLocalParticipant(localParticipant, participants) {
    let localContainer = document.getElementById(MEDIA_FLAGS.LOCAL_MEDIA);
    if (localContainer && !localContainer.querySelector(MEDIA_FLAGS.VIDEO)) {
      attachParticipantTracks(localParticipant, localContainer);
    }

    console.log(
      `Connected to the Room as LocalParticipant "${localParticipant.identity}"`
    );

    participants.forEach(participant => {
      let remoteContainer = document.getElementById(MEDIA_FLAGS.REMOTE_MEDIA);
      if (
        remoteContainer &&
        !remoteContainer.querySelector(MEDIA_FLAGS.VIDEO)
      ) {
        attachParticipantTracks(participant, remoteContainer);
      }
    });
  }
  connect(
    meeting.access,
    {
      audio: true,
      name: meeting.name,
      video: { width: 640, height: 400 }
    }
  ).then(
    room => {
      connectLocalParticipant(room.localParticipant, room.participants);
      console.log(`Successfully joined a Room: ${room}`);
      // Attach the Participant's Media to a <div> element.
      room.on('participantConnected', participant => {
        console.log(`A remote Participant connected: ${participant}`);

        participant.tracks.forEach(publication => {
          if (publication.isSubscribed) {
            const track = publication.track;
            document.getElementById('remote-media').appendChild(track.attach());
          }
        });

        participant.on('trackSubscribed', track => {
          document.getElementById('remote-media').appendChild(track.attach());
        });
      });

      //CONNECTED PARTICIPANTS
      // Log your Client's LocalParticipant in the Room
      const localParticipant = room.localParticipant;
      console.log(
        `Connected to the Room as LocalParticipant "${
          localParticipant.identity
        }"`
      );
      // Log any Participants already connected to the Room
      room.participants.forEach(participant => {
        console.log(
          `Participant "${participant.identity}" is connected to the Room`
        );
      });

      // Log new Participants as they connect to the Room
      room.once('participantConnected', participant => {
        console.log(
          `Participant "${participant.identity}" has connected to the Room`
        );
      });

      // Log Participants as they disconnect from the Room
      room.once('participantDisconnected', participant => {
        console.log(
          `Participant "${participant.identity}" has disconnected from the Room`
        );
        detachParticipantTracks(room.localParticipant);
        room.participants.forEach(participant => {
          detachParticipantTracks(participant);
        });
      });

      room.on(MEDIA_FLAGS.TRACK_SUBSCRIBED, (track, participant) => {
        console.log(participant);
        let remoteContainer = document.getElementById(MEDIA_FLAGS.REMOTE_MEDIA);
        if (!remoteContainer.querySelector(MEDIA_FLAGS.VIDEO)) {
          attachTracks([track], remoteContainer);
        }
        let localContainer = document.getElementById(MEDIA_FLAGS.LOCAL_MEDIA);
        if (!localContainer.querySelector(MEDIA_FLAGS.VIDEO)) {
          attachParticipantTracks(room.localParticipant, localContainer);
        }
      });

      //CONNECTION EVENTS
      room.on('participantConnected', participant => {
        console.log(`Participant connected: ${participant.identity}`);
      });

      room.on('participantDisconnected', participant => {
        console.log(`Participant disconnected: ${participant.identity}`);
      });

      room.on('disconnected', room => {
        // Detach the local media elements
        // room.localParticipant.tracks.forEach(publication => {
        //   const attachedElements = publication.track.detach();
        //   attachedElements.forEach(element => element.remove());
        // });
      });

      // To disconnect from a Room
      room.disconnect();
    },
    error => {
      console.error(`Unable to connect to Room: ${error.message}`);
    }
  );

  return (
    <>
      <S.ParticipantsContainer>
        <S.ParticipantsList>
          {meeting.participants
            .filter(p => p.id !== me.id)
            .map(participant => {
              return (
                <S.ParticipantAnimation key={participant.id}>
                  <S.ParticipantContainer>
                    <S.ParticipantMedia id={MEDIA_FLAGS.REMOTE_MEDIA}>
                      <S.ParticipantMediaDisabled>
                        <Avatar />
                      </S.ParticipantMediaDisabled>
                    </S.ParticipantMedia>
                    <S.ActionBar>
                      <S.ActionBarName>{participant.firstName}</S.ActionBarName>
                    </S.ActionBar>
                  </S.ParticipantContainer>
                </S.ParticipantAnimation>
              );
            })}
        </S.ParticipantsList>
      </S.ParticipantsContainer>
      <S.ParticipantAnimationMini>
        <S.ParticipantContainer>
          <S.ParticipantMedia id={MEDIA_FLAGS.LOCAL_MEDIA}>
            <S.ParticipantMediaDisabled>
              <Avatar />
            </S.ParticipantMediaDisabled>
          </S.ParticipantMedia>
          <S.ActionBar>
            <S.ActionBarName>You</S.ActionBarName>
          </S.ActionBar>
        </S.ParticipantContainer>
      </S.ParticipantAnimationMini>
      <S.ActionsBar>
        <Icon
          type="audio"
          disabled={isAudioDisabled}
          onClick={() => toggleAudio(!isAudioDisabled)}
        />
        <ExitAlert id={me.id} name={meeting.name} />
        <Icon
          type="video"
          disabled={isVideoDisabled}
          onClick={() => toggleVideo(!isVideoDisabled)}
        />
        <ChatMenu id={me.id} name={meeting.name} />
      </S.ActionsBar>
    </>
  );
}

export default Participants;
