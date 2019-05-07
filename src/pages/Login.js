import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import User from '../graphql/types/User';
import TextField from '../components/inputs/TextField';
import Loader from '../components/Loader';
import { invalidInputString } from '../lib/utils';
import LOGIN_MUTATION from '../graphql/mutation/login';
import ME_QUERY from '../graphql/query/me';
import { FETCH_POLICY } from '../lib/constants';
import auth from '../lib/auth';
import LogoIcon from '../components/icons/LogoIcon';
import ErrorAlert from '../components/alerts/ErrorAlert';
import * as S from '../styles';

function Login(props) {
  //Hooks to update text fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onCompleted = response => {
    auth.setToken(response.token, true);
    if (auth.getToken()) {
      props.history.push('/');
    }
  };

  return (
    <S.Body>
      <User>
        {({ data, loading }) => {
          if (loading) return <Loader />;
          //If user is logged in already, redirect to home page. Otherwise show Login Page
          if (data && data.me) return <Redirect to={'/'} />;
          return (
            <S.Container>
              <LogoIcon />
              <S.Title>Welcome to Chatspace!</S.Title>
              <S.Instructions>Please login to start</S.Instructions>
              <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password }}
                //We refetch user query to get most current value of User
                refetchQueries={[{ query: ME_QUERY }]}
                //We do not want to keep cache of email/password from the User
                fetchPolicy={FETCH_POLICY.NO_CACHE}
                onError={e => setError(e.message)}
                onCompleted={e => onCompleted(e.login)}
              >
                {(login, { loading: mLoading }) => {
                  if (mLoading) return <Loader />;
                  return (
                    <S.Form
                      method="POST"
                      onSubmit={async e => {
                        e.preventDefault();
                        await login();
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
