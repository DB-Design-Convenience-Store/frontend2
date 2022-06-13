import gql from 'graphql-tag';

export const ALL_EMPLOYEES = gql`
  query {
    getUsers {
      ok
      users {
        id
        name
        role
        dayWorkTime
        nightWorkTime
        salary
        hiredDate
        firedDate
        payDate
      }
    }
  }
`;

export const NEW_EMPLOYEE = gql`
  mutation createUser($newUser: CreateUserInput!) {
    createUser(input: $newUser) {
      ok
      error
    }
  }
`;
