import gql from 'graphql-tag';

const MESSAGES_BY_MEETING_NAME_QUERY = gql`
  query messagesByMeetingName($name: String!) {
    messagesByMeetingName(name: $name) {
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

export default MESSAGES_BY_MEETING_NAME_QUERY;
