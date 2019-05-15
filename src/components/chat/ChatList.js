import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import ChatMessage from './ChatMessage';
import {messageProps} from "../../lib/props";
import * as S from '../../styles';

function ChatList(props) {
  const { id, messages, subscribeToMoreMessages } = props;
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const c = document.getElementById('chatMessageList');
    if (c) {
      c.scrollTop = c.scrollHeight;
    }
  });

  useEffect(() => {
    //We make sure that we only subscribed once to get new messages
    if (!isSubscribed){
      subscribeToMoreMessages();
      setIsSubscribed(true)
    }
  },[isSubscribed, subscribeToMoreMessages]);

  return (
      <S.ChatBody>
        <S.ChatMessageList id={'chatMessageList'}>
          {messages.map(message => {
            return (
                <ChatMessage
                    key={message.id}
                    name={message.author.firstName}
                    text={message.content}
                    isUser={message.author.id === id}
                />
            );
          })}
        </S.ChatMessageList>
      </S.ChatBody>
  )
}

ChatList.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(messageProps).isRequired,
  subscribeToMoreMessages: PropTypes.func.isRequired,
};

export default ChatList;
