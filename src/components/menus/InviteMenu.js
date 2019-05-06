import React, { useState, useRef } from 'react';
import { PropTypes } from 'prop-types';
import Icon from '../icons/Icon';
import * as S from '../../styles';

function InviteMenu(props) {
  const { url, onAction, onCancel, match } = props;
  //state via hooks to know if the link has been copied or not
  //const useCopyClipboard = useState
  //Function to copy link to clipboard
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(url);

  function copyToClipboard(url) {
    console.log('Action', url);
    document.execCommand('copy', false, url);
    setCopySuccess('Copied!');
  }

  return (
    <>
      <S.MenuHeader>
        <Icon type="close" onClick={onCancel} />
      </S.MenuHeader>
      <S.MenuTitle>Invite Participants{copySuccess}</S.MenuTitle>
      <S.MenuBody>
        <p>Copy and send this invitation link</p>
        <h4>{`${process.env.PUBLIC_URL}/${url}`}</h4>
        <S.Button onClick={() => copyToClipboard(url)}>
          Copy to Clipboard
        </S.Button>
      </S.MenuBody>
    </>
  );
}

InviteMenu.propTypes = {
  url: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
};

export default InviteMenu;
