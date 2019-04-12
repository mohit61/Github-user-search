import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div className="start alert-secondary">
          Enter Username to get started
        </div>
      );
    }
    return (
      <div className="list-group">
        <div className="list-group-item">
          <img
            src={this.props.user.data.avatar_url}
            height="200px"
            width="200px"
            className="rounded-circle img-fluid mx-auto"
          />
          <img
            src={`http://ghchart.rshah.org/${this.props.user.data.login}`}
            alt="Loading Github Contribution Chart"
            className="img-fluid mx-auto"
          />
        </div>
        <div className="list-group-item">
          <strong>Name: </strong>
          {this.props.user.data.name}
        </div>
        <div className="list-group-item">
          <strong>Followers: </strong>
          {this.props.user.data.followers}
        </div>
        <div className="list-group-item">
          <strong> Following: </strong>
          {this.props.user.data.following}
        </div>
        <a href={this.props.user.data.html_url} className="list-group-item">
          Click here to see complete profile
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserDetail);
