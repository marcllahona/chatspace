import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from '../../styles';
import Icon from '../icons/Icon';

function ExitMenu(props) {
  const { onCancel, onAction } = props;
  return (
    <>
      <S.MenuHeader>
        <Icon type="close" onClick={onCancel} />
      </S.MenuHeader>
      <h1>Are you sure?</h1>
      <p>Click the button if you really want to leave the meeting</p>
      <S.Button>Leave Meeting</S.Button>
    </>
  );
}

ExitMenu.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
};

export default ExitMenu;
