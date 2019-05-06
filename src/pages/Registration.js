import React, { useState } from 'react';
import TextField from '../components/inputs/TextField';
import { invalidInputRegistration } from '../lib/utils';
import * as S from '../styles';

function Registration(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <S.Body>
      <S.Container>
        <S.Title>Register with Chatspace</S.Title>
        <S.Form>
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
        <p>Do you have account account?</p>
        <S.CustomLink to="/login">Login</S.CustomLink>
      </S.Container>
    </S.Body>
  );
}

export default Registration;
