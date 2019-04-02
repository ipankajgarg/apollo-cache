import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { graphql, withApollo } from "react-apollo";

class Home extends Component {
  render() {
    console.log(this.props);
    if (!this.props.data.loading) {
      return (
        <div className="App">
          {this.props.data.getPost.map(item => (
            <p key={item.id}>{item.title}</p>
          ))}
          <Link to="/about">redirect</Link>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Link to="/about">redirect</Link>
        </div>
      );
    }
  }
}

const query = gql`
  query {
    getPost {
      id
      title
      content
      imageURL
    }
  }
`;

export default graphql(query, {
  options: props => ({ variables: { userId: "pankaj" } })
})(withApollo(Home));
