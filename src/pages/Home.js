import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import User from '../graphql/types/User';
import TextField from '../components/inputs/TextField';
import { invalidInputString } from '../lib/utils';
import START_MEETING_MUTATION from '../graphql/mutation/startMeeting';
import START_MEETING_WITH_NAME_MUTATION from '../graphql/mutation/startMeetingWithName';
import * as S from '../styles';

function Home(props) {
  const [name, setName] = useState('');

  function startMeeting(name) {
    props.history.push(`/meeting/${name}`);
  }

  return (
    <S.Body>
      <User>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading</p>;
          if (error || !data) return <Redirect to={'/login'} />;
          const { me } = data;
          return (
            <S.Container>
              <S.Title>Welcome {me.firstName}</S.Title>
              <S.Action>
                <S.Instructions>
                  Start a meeting with a random code
                </S.Instructions>
                <Mutation
                  mutation={START_MEETING_MUTATION}
                  variables={{ userID: me.id }}
                >
                  {(startMeeting, { data, loading, error }) => {
                    if (loading) return <p>Loading</p>;
                    if (error) return <p>Error</p>;
                    if (data) {
                      console.log(data);
                      return (
                        <Redirect to={`/meeting/${data.startMeeting.name}`} />
                      );
                    }
                    return (
                      <S.Button
                        type="button"
                        onClick={async e => {
                          e.preventDefault();
                          await startMeeting();
                        }}
                      >
                        Start a new meeting
                      </S.Button>
                    );
                  }}
                </Mutation>
              </S.Action>
              <S.Action>
                <S.Instructions>or use your own meeting code</S.Instructions>
                <Mutation
                  mutation={START_MEETING_WITH_NAME_MUTATION}
                  variables={{ userID: me.id, name: name }}
                >
                  {(startMeetingWithName, { data, loading, error }) => {
                    if (loading) return <p>Loading</p>;
                    if (error) return <p>Error</p>;
                    if (data)
                      return (
                        <Redirect
                          to={`/meeting/${data.startMeetingWithName.name}`}
                        />
                      );
                    return (
                      <S.Form
                        method={'post'}
                        onSubmit={async e => {
                          e.preventDefault();
                          await startMeetingWithName();
                        }}
                      >
                        <TextField
                          label="Name"
                          name="name"
                          value={name}
                          placeholder="Enter meeting name"
                          onChange={e => setName(e.target.value)}
                        />
                        <S.FormButton disabled={invalidInputString(name)}>
                          Use meeting code
                        </S.FormButton>
                      </S.Form>
                    );
                  }}
                </Mutation>
              </S.Action>
            </S.Container>
          );
        }}
      </User>
    </S.Body>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

Home.defaultProps = {
  user: {
    firstName: 'Marc',
    lastName: 'Llahona',
    email: 'mllahona@gmail.com'
  }
};

export default Home;
