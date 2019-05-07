import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import User from '../graphql/types/User';
import Participants from '../components/Participants';
import MEETING from '../graphql/query/meeting';
import InviteAlert from '../components/alerts/InviteAlert';
import SettingsAlert from '../components/alerts/SettingsAlert';
import Loader from '../components/Loader';
import * as S from '../styles';

function Meeting({ match }) {
  const name = match.params.name;
  const url = match.url;

  return (
    <>
      {!name && <Redirect to="/" />}
      <User>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error || !data) return <Redirect to={'/login'} />;
          const { me } = data;
          return (
            <Query query={MEETING}>
              {({ data: qData, loading: qLoading, error: qError }) => {
                if (qLoading) return <Loader />;
                const { meeting } = qData;

                return (
                  <>
                    <S.NavigationBar>
                      <InviteAlert url={url} />
                      <SettingsAlert />
                    </S.NavigationBar>
                    <Participants meeting={meeting} me={me} />
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
