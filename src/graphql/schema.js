// src/graphql/schema.js
export const typeDefs = `
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }
`;