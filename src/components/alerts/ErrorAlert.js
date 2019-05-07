import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import * as S from '../../styles';

function ErrorAlert(props) {
  const { text } = props;
  const [isOpen, openAlert] = useState(true);
  return (
    <div>
      <>
        {isOpen && (
          <S.Modal>
            <S.Menu>
              <p>{text}</p>
            </S.Menu>
            <S.Overlay onClick={() => openAlert(false)} />
          </S.Modal>
        )}
      </>
    </div>
  );
}

ErrorAlert.propTypes = {
  text: PropTypes.string
};

ErrorAlert.defaultProps = {
  text: 'Ooops! Something went wrong!'
};

export default ErrorAlert;
