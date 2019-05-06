import React, { useState } from 'react';
import Icon from '../icons/Icon';
import SettingsMenu from '../menus/SettingsMenu';
import * as S from '../../styles';

function SettingsAlert(props) {
  const [isOpen, openAlert] = useState(false);
  return (
    <div>
      <Icon type="settings" onClick={() => openAlert(true)} />
      <>
        {isOpen && (
          <S.Modal>
            <S.Menu>
              <SettingsMenu onCancel={() => openAlert(false)} />
            </S.Menu>
            <S.Overlay onClick={() => openAlert(false)} />
          </S.Modal>
        )}
      </>
    </div>
  );
}

export default SettingsAlert;
