import gql from 'graphql-tag';

const LEAVE_MEETING_BY_ID_MUTATION = gql`
  mutation leaveMeetingByID($userID: ID!, $id: ID!) {
    leaveMeetingByID(userID: $userID, id: $id) {
      id
      createdAt
      updatedAt
      name
    }
  }
`;

export default LEAVE_MEETING_BY_ID_MUTATION;
