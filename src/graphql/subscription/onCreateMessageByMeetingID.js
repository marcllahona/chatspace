import gql from 'graphql-tag';

const ON_CREATE_MESSAGE_BY_MEETING_ID_SUBSCRIPTION = gql`
  subscription onCreateMessageByMeetingID($id: ID!) {
    onCreateMessageByMeetingID(id: $id) {
      id
      author {
        id
        firstName
        lastName
      }
      content
      meeting {
        id
      }
    }
  }
`;

export default ON_CREATE_MESSAGE_BY_MEETING_ID_SUBSCRIPTION;
