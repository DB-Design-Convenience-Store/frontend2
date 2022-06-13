import gql from 'graphql-tag';

export const ALL_FUNDS = gql`
  query {
    income: getFunds(input: { isIncome: true }) {
      ok
      funds {
        id
        createdAt
        updatedAt
        isIncome
        type
        price
      }
    }
    loss: getFunds(input: { isIncome: false }) {
      ok
      funds {
        id
        createdAt
        updatedAt
        isIncome
        type
        price
      }
    }
  }
`;

export const ALL_INCOMES = gql`
  query {
    getFunds(input: { isIncome: true }) {
      ok
      funds {
        id
        createdAt
        updatedAt
        isIncome
        type
        price
      }
    }
  }
`;

export const ALL_OUTCOMES = gql`
  query {
    getFunds(input: { isIncome: false }) {
      ok
      funds {
        id
        createdAt
        updatedAt
        isIncome
        type
        price
      }
    }
  }
`;

export const NEW_FUND = gql`
  mutation createFund($newFund: CreateFundInput!) {
    createFund(input: $newFund) {
      ok
      error
    }
  }
`;
