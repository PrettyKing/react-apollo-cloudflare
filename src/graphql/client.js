// src/graphql/client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

// 创建一个可执行的 schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// 为本地开发创建一个 Apollo 客户端
export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
});