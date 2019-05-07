import React from 'react';
import { PropTypes } from 'prop-types';
import AddIcon from './AddIcon';
import AudioIcon from './AudioIcon';
import ChatIcon from './ChatIcon';
import CloseIcon from './CloseIcon';
import ExitIcon from './ExitIcon';
import SendIcon from './SendIcon';
import SettingsIcon from './SettingsIcon';
import VideoIcon from './VideoIcon';
import * as S from '../../styles';

function Icon(props) {
  const { type, disabled, onClick } = props;
  switch (type) {
    case 'add':
      return (
        <S.CircularButton color="inverted" onClick={onClick}>
          <AddIcon {...props} />
        </S.CircularButton>
      );
    case 'audio':
      return (
        <S.CircularButton color="primary" onClick={onClick}>
          <AudioIcon {...props} disabled={disabled} />
        </S.CircularButton>
      );
    case 'chat':
      return (
        <S.CircularButton color="primary" onClick={onClick}>
          <ChatIcon {...props} />
        </S.CircularButton>
      );
    case 'close':
      return (
        <S.CircularButton color="inverted" size={30} onClick={onClick}>
          <CloseIcon {...props} />
        </S.CircularButton>
      );
    case 'exit':
      return (
        <S.CircularButton color="secondary" onClick={onClick}>
          <ExitIcon {...props} />
        </S.CircularButton>
      );
    case 'send':
      return (
        <S.CircularButton color="primary" onClick={onClick} type={'button'}>
          <SendIcon {...props} />
        </S.CircularButton>
      );
    case 'settings':
      return (
        <S.CircularButton color="inverted" onClick={onClick}>
          <SettingsIcon {...props} />
        </S.CircularButton>
      );
    case 'video':
      return (
        <S.CircularButton color="primary" onClick={onClick}>
          <VideoIcon {...props} disabled={disabled} />
        </S.CircularButton>
      );
    default:
      return <div />;
  }
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'add',
    'audio',
    'chat',
    'close',
    'exit',
    'send',
    'settings',
    'video'
  ]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Icon.defaultProps = {
  disabled: false
};

export default Icon;
