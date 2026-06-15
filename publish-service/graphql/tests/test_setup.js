const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');

const MONGO_URI = "mongodb://localhost:27017/vehicle-db";

const connectToDb = async () => {
    await mongoose.connect(MONGO_URI).catch(error => console.error(error));
}

const dropTestDb = async () => {
    await mongoose.connection.db.dropDatabase().catch(error => console.error(error));
}

const closeDbConnection = async () => {
    await mongoose.connection.close().catch(error => console.error(error));
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

module.exports = {
    server,
    connectToDb,
    closeDbConnection,
    dropTestDb
}