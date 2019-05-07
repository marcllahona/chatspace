import gql from 'graphql-tag';

const ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION = gql`
  subscription onCreateMessageByMeetingName($name: String!) {
    onCreateMessageByMeetingName(name: $name) {
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

export default ON_CREATE_MESSAGE_BY_MEETING_NAME_SUBSCRIPTION;
