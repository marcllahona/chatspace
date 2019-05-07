import gql from 'graphql-tag';

const MESSAGES_BY_MEETING_ID_QUERY = gql`
  query messagesByMeetingID($id: ID!) {
    messagesByMeetingName(id: $id) {
      id
      createdAt
      updatedAt
      content
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

export default MESSAGES_BY_MEETING_ID_QUERY;
