import gql from 'graphql-tag';

const MEETING_BY_NAME_QUERY = gql`
  query meetingByName($name: String!) {
    meetingByName(name: $name) {
      __typename
      id
      name
    }
  }
`;

export default MEETING_BY_NAME_QUERY;
