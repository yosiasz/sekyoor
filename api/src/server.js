const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient

const connectToDatabase = async () => {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  });

  let cachedConnection;

  if (cachedConnection) return cachedConnection;

  try {
    const connection = await client.connect();

    cachedConnection = connection;

    return connection;
  } catch (error) {
    console.error(error);
  }
};


const app = express();

/* app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql,
  context: {
    mongo,
  },
}));
 */
app.use(
  "/graphql",
  graphqlHTTP(async () => {
    const mongo = await connectToDatabase();

    return {
      schema,
      graphiql: true,
      context: {
        mongo,
      },
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