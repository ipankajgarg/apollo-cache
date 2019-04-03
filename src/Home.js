import React, { Component } from "react";
import gql from "graphql-tag";
//import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { graphql, withApollo } from "react-apollo";

class Home extends Component {
  //this.props.data.loading

  render() {
    console.log(this.props);
    if (!this.props.loading) {
      return (
        <div className="App">
          {this.props.getPost.map(item => (
            <p key={item.id}>{item.title}</p>
          ))}
          <Link to="/about">redirect</Link>
          <br />
          <Link to="/cache">cache</Link>
        </div>
      );
    } else {
      return <div />;
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
  options: props => ({ variables: { userId: "pankaj" } }),
  props: ({ data: { loading, getPost } }) => ({ loading, getPost })
})(withApollo(Home));
