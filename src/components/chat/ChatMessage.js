import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from '../../styles';

function ChatMessage(props) {
  const { name, text, isUser } = props;
  return (
    <S.ChatMessageContainer isUser={isUser}>
      <S.ChatMessageName>{name}</S.ChatMessageName>
      <S.ChatMessage>
        <S.ChatMessageText>{text}</S.ChatMessageText>
      </S.ChatMessage>
    </S.ChatMessageContainer>
  );
}

ChatMessage.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired
};

export default ChatMessage;
