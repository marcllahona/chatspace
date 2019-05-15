import gql from 'graphql-tag';

const MESSAGES_BY_MEETING_NAME_QUERY = gql`
  query messagesByMeetingName($name: String!) {
    messagesByMeetingName(name: $name) {
      __typename
      id
      createdAt
      updatedAt
      content
      author {
        __typename
        id
        firstName
        lastName
        email,
        image
      }
    }
  }
`;

export default MESSAGES_BY_MEETING_NAME_QUERY;
