require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const cors = require("cors");
const models = require("../models");

const app = express();

// Allow cross-origin
app.use(cors());

// Connection to DB
require("./db/connection");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
