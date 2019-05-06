import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from '../../styles';
import Icon from '../icons/Icon';

function SettingsMenu(props) {
  const { onAction, onCancel } = props;
  //state via hooks to know current settings and change without saving!
  //const useCopyClipboard = useState

  //Function to copy link to clipboard
  return (
    <>
      <S.MenuHeader>
        <Icon type="close" onClick={onCancel} />
      </S.MenuHeader>
      <S.MenuTitle>Settings</S.MenuTitle>
      <S.MenuBody>
        <p>Microphone</p>
        <p>Speakers</p>
        <p>Webcam</p>
        <S.Button>Save Changes</S.Button>
      </S.MenuBody>
    </>
  );
}

SettingsMenu.propTypes = {
  link: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
};

export default SettingsMenu;
