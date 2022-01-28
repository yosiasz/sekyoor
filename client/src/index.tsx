import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: "http://localhost:4100/graphql",
  cache: new InMemoryCache()
});

declare global {
  interface Window { cordova: any; }
}

window.cordova = window.cordova || false;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
