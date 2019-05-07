import gql from 'graphql-tag';

const CREATE_MESSAGE_BY_MEETING_ID_MUTATION = gql`
  mutation createMessageByMeetingID($content: String!, $authorID: ID!, $id: ID!) {
    createMessageByMeetingID(content: $content, $authorID: $authorID, id: $id) {
      id
      createdAt
      updatedAt
      content
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

export default CREATE_MESSAGE_BY_MEETING_ID_MUTATION;
