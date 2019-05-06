import React from 'react';
import * as S from '../../styles';
import { PropTypes } from 'prop-types';

function ModalMenu({ children }) {
  return (
    <S.Modal>
      <S.Menu>{children}</S.Menu>
      <S.Overlay />
    </S.Modal>
  );
}

ModalMenu.propTypes = {
  children: PropTypes.element.isRequired
};

export default ModalMenu;
