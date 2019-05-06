import React, { useState } from 'react';
import Icon from '../icons/Icon';
import InviteMenu from '../menus/InviteMenu';
import * as S from '../../styles';
import { PropTypes } from 'prop-types';

function InviteAlert(props) {
  const { url } = props;
  const [isOpen, openAlert] = useState(false);
  return (
    <div>
      <Icon type="add" onClick={() => openAlert(true)} />
      <>
        {isOpen && (
          <S.Modal>
            <S.Menu>
              <InviteMenu url={url} onCancel={() => openAlert(false)} />
            </S.Menu>
            <S.Overlay onClick={() => openAlert(false)} />
          </S.Modal>
        )}
      </>
    </div>
  );
}

InviteAlert.propTypes = {
  url: PropTypes.string.isRequired
};

export default InviteAlert;
