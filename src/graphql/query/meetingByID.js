import gql from 'graphql-tag';

const MEETING_BY_ID_QUERY = gql`
  query meetingByID($id: ID!) {
    meetingByID(id: $id) {
      __typename
      id
      name
    }
  }
`;

export default MEETING_BY_ID_QUERY;
