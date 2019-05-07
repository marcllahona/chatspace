import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import User from '../graphql/types/User';
import MEETING from '../graphql/query/meeting';
import Avatar from '../components/Avatar';
import Icon from '../components/icons/Icon';
import ChatMenu from '../components/menus/ChatMenu';
import InviteAlert from '../components/alerts/InviteAlert';
import SettingsAlert from '../components/alerts/SettingsAlert';
import ExitAlert from '../components/alerts/ExitAlert';
import Loader from '../components/Loader';
import { FETCH_POLICY } from '../lib/constants';
import * as S from '../styles';

function Meeting({ match }) {
  const name = match.params.name;
  const url = match.url;
  const [isVideoDisabled, toggleVideo] = useState(false);
  const [isAudioDisabled, toggleAudio] = useState(false);
  return (
    <>
      {console.log('meeting')}
      {!name && <Redirect to="/" />}
      <User>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error || !data) return <Redirect to={'/login'} />;
          const { me } = data;
          return (
            <Query query={MEETING} fetchPolicy={FETCH_POLICY.NO_CACHE}>
              {({ data, loading, error }) => {
                if (loading) return <Loader />;
                return (
                  <>
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
                      <ExitAlert id={me.id} name={name} />
                      <Icon
                        type="video"
                        disabled={isVideoDisabled}
                        onClick={() => toggleVideo(!isVideoDisabled)}
                      />
                      <ChatMenu id={me.id} name={name} />
                    </S.ActionsBar>
                  </>
                );
              }}
            </Query>
          );
        }}
      </User>
    </>
  );
}

Meeting.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

export default Meeting;
