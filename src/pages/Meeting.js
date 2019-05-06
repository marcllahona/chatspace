import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Icon from '../components/icons/Icon';
import ChatMenu from '../components/menus/ChatMenu';
import InviteAlert from '../components/alerts/InviteAlert';
import SettingsAlert from '../components/alerts/SettingsAlert';
import ExitAlert from '../components/alerts/ExitAlert';
import * as S from '../styles';

function Meeting({ match }) {
  const id = match.params.id;
  const url = match.url;
  const [isVideoDisabled, toggleVideo] = useState(false);
  const [isAudioDisabled, toggleAudio] = useState(false);
  return (
    <>
      {!id && <Redirect to="/" />}
      <S.NavigationBar>
        <InviteAlert url={url} />
        <SettingsAlert />
      </S.NavigationBar>
      <S.ParticipantsContainer>
        <S.ParticipantsList>
          <S.ParticipantAnimation>
            <S.ParticipantContainer>
              <S.ParticipantMedia>
                <S.ParticipantMediaDisabled>
                  <Avatar />
                </S.ParticipantMediaDisabled>
                <S.VoiceVisualizer />
              </S.ParticipantMedia>
              <S.ActionBar>
                <S.ActionBarName>Hello</S.ActionBarName>
              </S.ActionBar>
            </S.ParticipantContainer>
          </S.ParticipantAnimation>
        </S.ParticipantsList>
      </S.ParticipantsContainer>
      <S.ParticipantAnimationMini>
        <S.ParticipantContainer>
          <S.ParticipantMedia>
            <S.ParticipantMediaDisabled>
              <Avatar />
            </S.ParticipantMediaDisabled>
          </S.ParticipantMedia>
          <S.ActionBar>
            <S.ActionBarName>Hello</S.ActionBarName>
          </S.ActionBar>
        </S.ParticipantContainer>
      </S.ParticipantAnimationMini>
      <S.ActionsBar>
        <Icon
          type="audio"
          disabled={isAudioDisabled}
          onClick={() => toggleAudio(!isAudioDisabled)}
        />
        <ExitAlert />
        <Icon
          type="video"
          disabled={isVideoDisabled}
          onClick={() => toggleVideo(!isVideoDisabled)}
        />
        <ChatMenu />
      </S.ActionsBar>
    </>
  );
}

Meeting.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default Meeting;
