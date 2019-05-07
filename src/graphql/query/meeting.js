import gql from 'graphql-tag';

const MEETING_QUERY = gql`
  query meeting {
    meeting {
      __typename
      id
      name
    }
  }
`;

export default MEETING_QUERY;
