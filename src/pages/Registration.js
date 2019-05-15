import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import TextField from '../components/inputs/TextField';
import Loader from '../components/Loader';
import { invalidInputRegistration } from '../lib/utils';
import REGISTER_MUTATION from '../graphql/mutation/register';
import ME_QUERY from '../graphql/query/me';
import { FETCH_POLICY } from '../lib/constants';
import auth from '../lib/auth';
import LogoIcon from '../components/icons/LogoIcon';
import * as S from '../styles';
import PasswordField from "../components/inputs/PasswordField";

function Registration(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onError = error => {
    console.log(error);
  };

  const onCompleted = response => {
    auth.setToken(response.token, true);
    if (auth.getToken()) {
      props.history.push('/');
    }
  };

  return (
    <S.Body>
      <S.Container>
        <LogoIcon />
        <S.Title>Register with Chatspace</S.Title>
        <Mutation
          mutation={REGISTER_MUTATION}
          variables={{ firstName, lastName, email, password }}
          //We refetch user query to get most current value
          refetchQueries={[{ query: ME_QUERY }]}
          //We do not want to keep cache of email/password from the User
          fetchPolicy={FETCH_POLICY.NO_CACHE}
          onError={onError}
          onCompleted={e => onCompleted(e.register)}
        >
          {(register, { data, loading, error }) => {
            if (loading) return <Loader />;
            if (error) return <p>Error</p>;
            if (data) {
              auth.setToken(data.token, true);
              return <Redirect to={`/`} />;
            }
            return (
              <S.Form
                method="POST"
                onSubmit={async e => {
                  e.preventDefault();
                  await register();
                }}
              >
                <TextField
                  label="First Name*"
                  name="firstName"
                  value={firstName}
                  placeholder="Ex: Joe"
                  onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name*"
                  name="lastName"
                  value={lastName}
                  placeholder="Ex: Dow"
                  onChange={e => setLastName(e.target.value)}
                />
                <TextField
                  label="Email*"
                  name="email"
                  value={email}
                  placeholder="Ex: joe@gmail.com"
                  onChange={e => setEmail(e.target.value)}
                />
                <PasswordField
                    label="Password*"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <S.FormButton
                  disabled={invalidInputRegistration([
                    firstName,
                    lastName,
                    email,
                    password
                  ])}
                >
                  Register
                </S.FormButton>
              </S.Form>
            );
          }}
        </Mutation>
        <p>Do you have account account?</p>
        <S.CustomLink to="/login">Login</S.CustomLink>
      </S.Container>
    </S.Body>
  );
}

export default Registration;
