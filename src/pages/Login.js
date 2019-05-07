import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import User from '../graphql/types/User';
import TextField from '../components/inputs/TextField';
import { invalidInputString } from '../lib/utils';
import LOGIN_MUTATION from '../graphql/mutation/login';
import ME_QUERY from '../graphql/query/me';
import { FETCH_POLICY } from '../lib/constants';
import auth from '../lib/auth';
import * as S from '../styles';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onError = error => {
    console.log(error);
  };

  const onCompleted = response => {
    console.log(response);
    auth.setToken(response.token, true);
    props.history.push('/');
    // this.props.showSuccessAlert('Succesfully Logged In!');
  };

  return (
    <S.Body>
      <User>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading</p>;
          if (data) return <Redirect to={'/'} />;
          return (
            <S.Container>
              <S.Title>Welcome to Chatspace!</S.Title>
              <S.Instructions>Please login to start</S.Instructions>
              <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password }}
                //We refetch user query to get most current value
                refetchQueries={[{ query: ME_QUERY }]}
                //We do not want to keep cache of email/password from the User
                fetchPolicy={FETCH_POLICY.NO_CACHE}
                onError={onError}
                onCompleted={e => onCompleted(e.login)}
              >
                {(login, { loading }) => {
                  if (loading) return <p>Loading</p>;
                  return (
                    <S.Form
                      method="POST"
                      onSubmit={async e => {
                        e.preventDefault();
                        await login();
                        setEmail('');
                        setPassword('');
                      }}
                    >
                      <TextField
                        label="Email*"
                        name="email"
                        value={email}
                        placeholder="Ex: joe@gmail.com"
                        onChange={e => setEmail(e.target.value)}
                      />
                      <TextField
                        label="Password*"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                      />
                      <S.FormButton
                        disabled={
                          invalidInputString(email) ||
                          invalidInputString(password)
                        }
                      >
                        Login
                      </S.FormButton>
                    </S.Form>
                  );
                }}
              </Mutation>
              <p>Don't have an account?</p>
              <S.CustomLink to="/registration">Register</S.CustomLink>
            </S.Container>
          );
        }}
      </User>
    </S.Body>
  );
}

export default Login;
