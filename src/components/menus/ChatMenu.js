import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import ChatList from './ChatList';
import TextField from '../inputs/TextField';
import Icon from '../icons/Icon';
import MESSAGES_BY_MEETING_NAME_QUERY from '../../graphql/query/messagesByMeetingName';
import CREATE_MESSAGE_BY_MEETING_NAME_MUTATION from '../../graphql/mutation/createMessageByMeetingName';
import * as S from '../../styles';

function ChatMenu(props) {
  const { name, id } = props;
  const [isMenuOpen, toggleMenu] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <Icon type="chat" onClick={() => toggleMenu(!isMenuOpen)} />
      <Query query={MESSAGES_BY_MEETING_NAME_QUERY} variables={{ name }}>
        {({ data, loading, error, subscribeToMore }) => {
          if (loading || error || !data) return <></>;
          const { messagesByMeetingName } = data;
          return (
            <>
              {isMenuOpen && (
                <S.ChatContainer>
                  <S.ChatHeader>
                    <Icon type="close" onClick={() => toggleMenu(false)} />
                  </S.ChatHeader>
                  <S.ChatBody>
                    <ChatList
                      id={id}
                      name={name}
                      messages={messagesByMeetingName}
                      subscribeToMore={subscribeToMore}
                    />
                  </S.ChatBody>
                  <S.ChatFooter>
                    <Mutation
                      mutation={CREATE_MESSAGE_BY_MEETING_NAME_MUTATION}
                      variables={{ content: message, authorID: id, name }}
                    >
                      {(
                        createMessageByMeetingName,
                        { data, loading, error }
                      ) => {
                        return (
                          <>
                            <TextField
                              name="label"
                              value={message}
                              placeholder="Send a message..."
                              onChange={e => setMessage(e.target.value)}
                            />
                            <Icon
                              type="send"
                              onClick={async e => {
                                e.preventDefault();
                                await createMessageByMeetingName();
                                setMessage('');
                              }}
                            />
                          </>
                        );
                      }}
                    </Mutation>
                  </S.ChatFooter>
                </S.ChatContainer>
              )}
            </>
          );
        }}
      </Query>
    </>
  );
}

export default ChatMenu;
