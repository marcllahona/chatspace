import gql from 'graphql-tag';

const LEAVE_MEETING_BY_NAME_MUTATION = gql`
  mutation leaveMeetingByName($userID: ID!, $name: String!) {
    leaveMeetingByName(userID: $userID, name: $name) {
      id
      createdAt
      updatedAt
      name
    }
  }
`;

export default LEAVE_MEETING_BY_NAME_MUTATION;
