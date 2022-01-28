const express = require('express');
var cors = require('cors')
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema.js');

const app = express();
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP(async () => {
    return {
      schema,
      graphiql: true
    };
  })
);

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
  
    if (bearerHeader) {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }

app.listen(4100, () => {
  console.log('sekyoor-graphql is running on port http://localhost:4100/graphql');
})