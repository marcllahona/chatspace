import React, { useState, useEffect } from 'react';
import { Subscription } from 'react-apollo';
import ChatMessage from '../ChatMessage';
import ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION from '../../graphql/subscription/onCreateMessageByMeetingName';
import * as S from '../../styles';

function ChatList(props) {
  const { id, name, messages } = props;
  const [list, addMessage] = useState(messages);

  useEffect(() => {
    const c = document.getElementById('chatMessageList');
    if (c) {
      c.scrollTop = c.scrollHeight;
    }
  });

  function onSubscriptionData(data) {
    addMessage([...list, data.onCreateMessageByMeetingName]);
  }

  return (
    <Subscription
      subscription={ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION}
      variables={{ name }}
      onSubscriptionData={e => onSubscriptionData(e.subscriptionData.data)}
    >
      {() => {
        return (
          <S.ChatMessageList id={'chatMessageList'}>
            {list.map(message => {
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
        );
      }}
    </Subscription>
  );
}

export default ChatList;
