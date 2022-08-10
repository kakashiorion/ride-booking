import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers/resolvers";
import schema from "./graphql/schema";
// import dotenv from "dotenv";
import { DocumentNode } from "graphql";

// dotenv.config();

const PORT = process.env.PORT;

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
  });
  const { url } = await server.listen(PORT);
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer(schema, resolvers);
