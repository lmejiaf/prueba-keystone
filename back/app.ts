import dotEnv from "dotenv";

dotEnv.config({
  path: `./environments/.env.${process.env.NODE_ENV}`
});


import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./src/transporte/graphql";


const app = express();

app.use(cors());

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});
server.applyMiddleware({ app });

app.listen(process.env.APP_PORT, () => {
  console.log("App runing on port: ", process.env.APP_PORT);
});
