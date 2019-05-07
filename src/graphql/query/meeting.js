import gql from 'graphql-tag';

const MEETING_QUERY = gql`
  query meeting {
    meeting {
      __typename
      id
      name
      access
      participants {
        id
        firstName
        lastName
      }
    }
  }
`;

export default MEETING_QUERY;
