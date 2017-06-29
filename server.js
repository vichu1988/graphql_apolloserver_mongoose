import Cors from 'cors';
import express from 'express';
import { apolloServer } from 'graphql-tools';
import Resolvers from './data/resolvers';
import Schema from './data/schema';
const GRAPHQL_PORT = 8080;
var graphQLServer = express();
graphQLServer.use(Cors());
graphQLServer.use('/graphql', apolloServer({
  graphiql : true,
  pretty   : true,
  schema   : Schema,
  resolvers: Resolvers,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
