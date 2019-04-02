import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  headers: {
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiI1YzIxY2MyMzg3MjFiOTA3NWNjNWZjMzAiLCJpYXQiOjE1NDU3MzEwMzV9.rS4o6Ojxcevayd87JLfhpQMxHFHBYAt2pCi82UsyNuo"
  },
  cacheRedirects: {
    Query: {
      getPost: (_, { id }, { getCacheKey }) =>
        getCacheKey({ __typename: "post", id })
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
