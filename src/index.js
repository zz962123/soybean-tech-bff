import express from "express";
import expressGraph from 'express-graphql';
import schema from "./bff/schemas/schema.js";

const { graphqlHTTP } = expressGraph;

const app = express();
const PORT = 4000;

// use the endpoint '/graph' and configure a graphql middleware to handle graphql requests
app.use('/graph', graphqlHTTP({
    schema,
    graphiql: true,
}))

// start the express server on the defined port
app.listen(PORT, () => {
    console.log(`Graph QL API is up and running on Port ${PORT}`);
})