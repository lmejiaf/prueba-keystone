import { ApolloServer, gql } from "apollo-server";



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ });

// The `listen` method launches a web server.
server.listen({port: process.env.APP_PORT, }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});