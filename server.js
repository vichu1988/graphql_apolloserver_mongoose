import Cors from 'cors';
import express from 'express';
//import { apolloServer } from 'graphql-tools';
import { graphqlExpress } from 'apollo-server-express';
import Schema from './data/schema';

const GRAPHQL_PORT = 8080;
var graphQLServer = express();
graphQLServer.use(Cors());
graphQLServer.use('/graphql', graphqlExpress({
  schema: Schema
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
