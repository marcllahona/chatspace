import gql from 'graphql-tag';

const START_MEETING_WITH_NAME_MUTATION = gql`
  mutation startMeetingWithName($userID: ID!, $name: String!) {
    startMeetingWithName(userID: $userID, name: $name) {
      id
      createdAt
      updatedAt
      name
      participants {
        id
      }
      messages {
        id
        author {
          id
        }
      }
    }
  }
`;

export default START_MEETING_WITH_NAME_MUTATION;
