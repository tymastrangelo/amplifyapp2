/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShirt = /* GraphQL */ `
  query GetShirt($id: ID!) {
    getShirt(id: $id) {
      id
      Type
      Brand
      Size
      Image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listShirts = /* GraphQL */ `
  query ListShirts(
    $filter: ModelShirtFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShirts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Type
        Brand
        Size
        Image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        author
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
