import { ApolloServer } from "apollo-server";
import { DocumentNode } from "graphql";
import resolvers from "./graphql/resolvers/resolvers";
import schema from "./graphql/schema";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url, port } = await server.listen(PORT);

  console.log(`🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}`);
}

startApolloServer(schema, resolvers);
