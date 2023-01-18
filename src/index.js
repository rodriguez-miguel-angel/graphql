import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../schema/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing and running!');
});

const root = { product: () => {
    return {
        "id": 123456789,
        "name": "widget",
        "description": "Fugiat pariatur dolor proident tempor ad amet tempor anim qui aliqua non cillum ut. Qui nisi occaecat commodo eu. Aute esse esse pariatur cillum. Officia Lorem laboris quis ullamco consectetur Lorem excepteur veniam ipsum ex esse laboris. Minim labore laborum ut ullamco sint fugiat voluptate commodo.",
        "price": 34.99,
        "soldout": false
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log('Running server on port localhost:8080/graphql');
});