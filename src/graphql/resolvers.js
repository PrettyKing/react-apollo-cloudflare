// src/graphql/resolvers.js
import { posts } from './mocks';

export const resolvers = {
  Query: {
    posts: () => posts,
    post: (_, { id }) => posts.find(post => post.id === id),
  },
};