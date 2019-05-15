import React, {useState} from 'react';
import ChatList from '../chat/ChatList';
import ChatHeader from "../chat/ChatHeader";
import ChatFooter from "../chat/ChatFooter";
import ChatQuery from "../chat/ChatQuery";
import Icon from '../icons/Icon';
import * as S from '../../styles';

function ChatMenu(props) {
  const { name, id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const hide = () => setIsOpen(false);

  return (
    <>
      <Icon type="chat" onClick={() => setIsOpen(!isOpen)} />
        {
            isOpen &&
                <ChatQuery name={name}>
                    {(messages, subscribeToMoreMessages) => {
                        return(
                            <S.ChatContainer>
                                <ChatHeader hide={hide}/>
                                <ChatList
                                    id={id}
                                    messages={messages}
                                    subscribeToMoreMessages={subscribeToMoreMessages}
                                />
                                <ChatFooter id={id} name={name}/>
                            </S.ChatContainer>
                        )
                    }}
                </ChatQuery>
        }
    </>
  );
}

export default ChatMenu;
