import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import User from '../graphql/types/User';
import TextField from '../components/inputs/TextField';
import { invalidInputString } from '../lib/utils';
import * as S from '../styles';

function Home(props) {
  const [id, setID] = useState('');

  function startMeetingWithCode(code) {
    props.history.push(`/meeting/${code}`);
  }

  function startMeetingWithoutCode() {
    props.history.push(`/meeting/${1234}`);
  }

  return (
    <S.Body>
      <User>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading</p>;
          if (error) return <Redirect to={'/login'} />;
          const { me } = data;
          return (
            <S.Container>
              <S.Title>Welcome {me.firstName}</S.Title>
              <S.Action>
                <S.Instructions>
                  Start a meeting with a random code
                </S.Instructions>
                <S.Button onClick={startMeetingWithoutCode}>
                  Start a new meeting
                </S.Button>
              </S.Action>
              <S.Action>
                <S.Instructions>or use your own meeting code</S.Instructions>
                <S.Form
                  method={'post'}
                  onSubmit={async e => {
                    e.preventDefault();
                    startMeetingWithCode(id);
                  }}
                >
                  <TextField
                    label="ID"
                    name="id"
                    value={id}
                    placeholder="Enter meeting ID"
                    onChange={e => setID(e.target.value)}
                  />
                  <S.FormButton disabled={invalidInputString(id)}>
                    Use meeting code
                  </S.FormButton>
                </S.Form>
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
