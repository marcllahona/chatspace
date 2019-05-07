import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '../icons/Icon';
import * as S from '../../styles';

function InviteMenu(props) {
  const { url, onCancel } = props;

  const [copied, setCopied] = useState(false);

  return (
    <>
      <S.MenuHeader>
        <Icon type="close" onClick={onCancel} />
      </S.MenuHeader>
      <S.MenuBody>
        <S.MenuTitle>Invite Participants</S.MenuTitle>
        <p>Copy and send this invitation link</p>
        <S.URL>{`${process.env.REACT_APP_DEV_API_URL}${url}`}</S.URL>
        <CopyToClipboard
          text={`${process.env.PUBLIC_URL}/${url}`}
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
