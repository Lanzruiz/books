//const { ApolloServer} = require('apollo-server');
const { ApolloServer } = require('@apollo/server');
const { buildSubgraphSchema } = require('@apollo/subgraph')
const { startStandaloneServer } = require('@apollo/server/standalone');
const startConsumer = require("./kafka/consumer");
const mongoose = require('mongoose')

const MONGODB = process.env.MONGODB || 'mongodb://admin:password@localhost:27017';


const port = Number.parseInt(process.env.PORT) || 4001;

console.log("PORT", port);

// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: How do we resolve queries / mutations
// test role service

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


console.log(startConsumer);

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// })
// sample commit


// const server = new ApolloServer({
//     schema: buildSubgraphSchema([{typeDefs, resolvers}])
// })

const server = new ApolloServer({ typeDefs, resolvers });



mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connected");
        // return server.listen({port: port});
    })
     .then((res) = async () =>{
            // The `listen` method launches a web server.
            const { url } = await startStandaloneServer(server, {
                listen: { port: 4002 }, 
            });
            console.log(`🚀  Server ready at ${url}`);
    
     });
