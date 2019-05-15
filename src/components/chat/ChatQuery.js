import React from "react";
import PropTypes from "prop-types";
import {Query} from "react-apollo";
import ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION from "../../graphql/subscription/onCreateMessageByMeetingName";
import MESSAGES_BY_MEETING_NAME_QUERY from "../../graphql/query/messagesByMeetingName";
import {FETCH_POLICY} from "../../lib/constants";
import {optionalChaining} from "../../lib/utils";

function ChatQuery(props) {
    const { children, name } = props;
    return(
        <Query query={MESSAGES_BY_MEETING_NAME_QUERY} fetchPolicy={FETCH_POLICY.CACHE_AND_NETWORK} variables={{ name }}>
            {({ data, loading, error, subscribeToMore }) => {
                if (loading || error || !data) return <></>;
                const subscribeToMoreMessages = () => {
                    subscribeToMore({
                        document: ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION,
                        variables: { name },
                        updateQuery: (prev, {subscriptionData}) => {
                            if (!optionalChaining(subscriptionData, 'data')) return prev;
                            const newMessage = optionalChaining(subscriptionData, 'data.onCreateMessageByMeetingName');
                            return Object.assign({}, prev, {
                                messagesByMeetingName: [...prev.messagesByMeetingName, newMessage]
                            })
                        }
                    });
                };
                const messages = data.messagesByMeetingName;
                console.log(messages);
                return children(messages, subscribeToMoreMessages)
            }}
        </Query>
    )
}

ChatQuery.propTypes = {
    children: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    last: PropTypes.number,
};

export default ChatQuery


// ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION
//data.onCreateMessageByMeetingName
