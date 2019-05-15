import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Mutation} from "react-apollo";
import TextField from "../inputs/TextField";
import Icon from "../icons/Icon";
import CREATE_MESSAGE_BY_MEETING_NAME_MUTATION from '../../graphql/mutation/createMessageByMeetingName';
import * as S from "../../styles";

function ChatFooter(props){
    const {id, name} = props;
    const [message, setMessage] = useState('');
    return(
        <S.ChatFooter>
            <Mutation
                mutation={CREATE_MESSAGE_BY_MEETING_NAME_MUTATION}
                variables={{ content: message, authorID: id, name  }}
            >
                {(createMessageByName) => {
                    return (
                        <>
                            <TextField
                                name="message"
                                value={message}
                                placeholder="Send a message..."
                                onChange={e => setMessage(e.target.value)}
                                hideFocus={true}
                            />
                            <Icon
                                type="send"
                                onClick={async e => {
                                    e.preventDefault();
                                    await createMessageByName();
                                    setMessage('');
                                }}
                            />
                        </>
                    );
                }}
            </Mutation>
        </S.ChatFooter>
    )
}

ChatFooter.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default ChatFooter
