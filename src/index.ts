import { ApolloServer } from "apollo-server-express";
import express from "express";
import { DocumentNode } from "graphql";
import resolvers from "./graphql/resolvers/resolvers";
import schema from "./graphql/schema";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || "4000";

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer(schema, resolvers);
