import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../schema/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing and running!');
});

const root = {
    bienvenidos: () => "From GraphQL, bienvenidos!"

};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log('Running server on port localhost:8080/graphql');
});