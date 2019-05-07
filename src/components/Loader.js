import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../styles';

function Loader({ text }) {
  return (
    <S.LoaderContainer>
      <S.LoaderBody>
        <S.LoaderIcon />
        <S.LoaderText>{text}</S.LoaderText>
      </S.LoaderBody>
    </S.LoaderContainer>
  );
}

Loader.propTypes = {
  text: PropTypes.string
};

Loader.defaultProps = {
  text: 'Loading...'
};

export default Loader;
