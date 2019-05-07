import gql from 'graphql-tag';

const LEAVE_MEETING_MUTATION = gql`
  mutation leaveMeeting($userID: ID!, $meetingID: ID!) {
    leaveMeeting(userID: $userID, meetingID: $meetingID) {
      id
      createdAt
      updatedAt
      name
    }
  }
`;

export default LEAVE_MEETING_MUTATION;
