import gql from 'graphql-tag';

const CREATE_MESSAGE_BY_MEETING_NAME_MUTATION = gql`
  mutation createMessageByMeetingName(
    $content: String!
    $authorID: ID!
    $name: String!
  ) {
    createMessageByMeetingName(
      content: $content
      authorID: $authorID
      name: $name
    ) {
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

export default CREATE_MESSAGE_BY_MEETING_NAME_MUTATION;
