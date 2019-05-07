import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import TextField from '../components/inputs/TextField';
import { invalidInputRegistration } from '../lib/utils';
import LOGIN_MUTATION from '../graphql/mutation/login';
import ME_QUERY from '../graphql/query/me';
import { FETCH_POLICY } from '../lib/constants';
import auth from '../lib/auth';
import * as S from '../styles';

function Registration(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
      <S.Container>
        <S.Title>Register with Chatspace</S.Title>
        <Mutation
          mutation={LOGIN_MUTATION}
          variables={{ firstName, lastName, email, password }}
          //We refetch user query to get most current value
          refetchQueries={[{ query: ME_QUERY }]}
          //We do not want to keep cache of email/password from the User
          fetchPolicy={FETCH_POLICY.NO_CACHE}
          onError={onError}
          onCompleted={e => onCompleted(e.register)}
        >
          {(register, { loading }) => {
            if (loading) return <p>Loading</p>;
            return (
              <S.Form
                method="POST"
                onSubmit={async e => {
                  e.preventDefault();
                  await register();
                  setFirstName('');
                  setLastName('');
                  setEmail('');
                  setPassword('');
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
                <TextField
                  label="Password*"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                />
                <S.FormButton
                  disabled={invalidInputRegistration([
                    firstName,
                    lastName,
                    email,
                    password
                  ])}
                >
                  Login
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
