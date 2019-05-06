import React, { useState } from 'react';
import TextField from '../components/inputs/TextField';
import { invalidInputString } from '../lib/utils';
import * as S from '../styles';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <S.Body>
      <S.Container>
        <S.Title>Welcome to Chatspace!</S.Title>
        <S.Instructions>Please login to start</S.Instructions>
        <S.Form>
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
            disabled={invalidInputString(email) || invalidInputString(password)}
          >
            Login
          </S.FormButton>
        </S.Form>
        <p>Don't have an account?</p>
        <S.CustomLink to="/registration">Register</S.CustomLink>
      </S.Container>
    </S.Body>
  );
}

export default Login;
