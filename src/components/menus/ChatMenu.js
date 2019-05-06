import React, { useState } from 'react';
import ChatMessage from '../ChatMessage';
import TextField from '../inputs/TextField';
import Icon from '../icons/Icon';
import * as S from '../../styles';

function ChatMenu(props) {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <Icon type="chat" onClick={() => toggleMenu(!isMenuOpen)} />
      <>
        {isMenuOpen && (
          <S.ChatContainer>
            <S.ChatHeader>
              <Icon type="close" onClick={() => toggleMenu(false)} />
            </S.ChatHeader>
            <S.ChatBody>
              <S.ChatMessageList>
                <ChatMessage
                  name={'Joe'}
                  text={
                    'Hello Everybody! Very Nice dajsndasdasdasfa fas asd asd asd ads asd asdasdadas'
                  }
                  isUser={false}
                />
              </S.ChatMessageList>
            </S.ChatBody>
            <S.ChatFooter>
              <TextField
                name="label"
                value={message}
                placeholder="Send a message..."
                onChange={e => setMessage(e.target.value)}
              />
              <Icon type="send" />
            </S.ChatFooter>
          </S.ChatContainer>
        )}
      </>
    </>
  );
}

export default ChatMenu;
