import gql from 'graphql-tag';

const DELETE_MEETING_MUTATION = gql`
  mutation deleteMeeting($meetingID: ID!) {
    deleteMeeting(meetingID: $meetingID) {
      id
      createdAt
      updatedAt
      name
    }
  }
`;

export default DELETE_MEETING_MUTATION;
