import gql from 'graphql-tag';

const REGISTER_MUTATION = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      __typename
      token
      user {
        id
        email
      }
    }
  }
`;

export default REGISTER_MUTATION;
