import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from '@graphql-tools/schema'
import { PubSub } from 'graphql-subscriptions';
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const app = express();
const pubsub = new PubSub();

// Build a programmatic schema from the combiantion typeDefs and ou resolver
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an instance of GraphQL server
const apolloServer = new ApolloServer({
    schema,
    context: ({req, res}: any) => ({req, res, pubsub}),
});

apolloServer.start()
/*
    Work around. The book is using an older
    version of the apollo server. With the current
    one the "start" is async, so I have to wait
*/
.then(res => {
    apolloServer.applyMiddleware({ app, cors: true});
    
    const httpServer = createServer(app);
    apolloServer.installSubscriptionHandlers(httpServer);
    
    app.listen({ port: 8000}, () => {
        console.log("GraphQL server ready.");
    });
});
