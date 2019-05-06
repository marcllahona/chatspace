import React, { useState } from 'react';
import Icon from '../icons/Icon';
import ExitMenu from '../menus/ExitMenu';
import * as S from '../../styles';

function ExitAlert(props) {
  const [isOpen, openAlert] = useState(false);
  return (
    <div>
      <Icon type="exit" onClick={() => openAlert(true)} />
      <>
        {isOpen && (
          <S.Modal>
            <S.Menu>
              <ExitMenu onCancel={() => openAlert(false)} />
            </S.Menu>
            <S.Overlay onClick={() => openAlert(false)} />
          </S.Modal>
        )}
      </>
    </div>
  );
}

export default ExitAlert;
