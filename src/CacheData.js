import React, { Component } from "react";

import { graphql, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

class CacheData extends Component {
  render() {
    console.log("cache props", this.props);
    return (
      <ApolloConsumer>
        {client => {
          console.log("c", client);
          return <div>caching</div>;
        }}
      </ApolloConsumer>
    );
  }
}

export default graphql(gql`
  {
    getPost @client
  }
`)(CacheData);
