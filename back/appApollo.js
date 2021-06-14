import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`


    type Usuario {
        nombre: String
        apellido: String
        email: String
        contrasena: String
    }

    type Query {
        usuarios:[Usuario]
    }

`;
const usuarios = [
  {
    nombre: "Luis0",
    apellido: "mejia",
    email: "dasdasdads@dads.com",
    contrasena: "asdadsasda",
  },
  {
    nombre: "Luis1",
    apellido: "mejia",
    email: "dasdasdads@dads.com",
    contrasena: "asdadsasda",
  },
  {
    nombre: "Luis2",
    apellido: "mejia",
    email: "dasdasdads@dads.com",
    contrasena: "asdadsasda",
  },
  {
    nombre: "Luis3",
    apellido: "mejia",
    email: "dasdasdads@dads.com",
    contrasena: "asdadsasda",
  },
  {
    nombre: "Luis4",
    apellido: "mejia",
    email: "dasdasdads@dads.com",
    contrasena: "asdadsasda",
  },
];
const resolvers = {
  Query: {
    usuarios: () => usuarios,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({port: process.env.APP_PORT_APOLLO, }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});