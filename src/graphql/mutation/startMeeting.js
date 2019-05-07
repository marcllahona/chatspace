import gql from 'graphql-tag';

const START_MEETING_MUTATION = gql`
  mutation startMeeting($userID: ID!) {
    startMeeting(userID: $userID) {
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

export default START_MEETING_MUTATION;
