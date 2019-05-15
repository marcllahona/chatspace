import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '../icons/Icon';
import * as S from '../../styles';
import {AppContext} from "../../AppContext";

function InviteMenu(props) {
  const { url, onCancel } = props;
  const [copied, setCopied] = useState(false);
  const [state, setState] = useContext(AppContext);

  return (
    <>
      <S.MenuHeader>
        <Icon type="close" onClick={onCancel} />
      </S.MenuHeader>
      <S.MenuBody>
        <S.MenuTitle>Invite Participants</S.MenuTitle>
          <button onClick={() => setState({...state, clipboard: 'copy'})}>LOL</button>
        <p>Copy and send this invitation link</p>
        <S.URL>{`${state.url}${url}`}</S.URL>
        <CopyToClipboard
          text={`${state.url}${url}`}
          onCopy={() => setCopied(true)}
        >
          <S.Button>{copied ? 'Copied' : 'Copy to Clipboard'}</S.Button>
        </CopyToClipboard>
      </S.MenuBody>
    </>
  );
}

InviteMenu.propTypes = {
  url: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default InviteMenu;
