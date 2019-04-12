import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchInfo from "../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  render() {
    return (
      <div>
        <header className="header">
          <strong>Quicku.work Github User Search</strong>
        </header>
        <form
          onSubmit={event => this.onFormSubmit(event)}
          className="input-group form-group"
        >
          <input
            onChange={event => this.onInputChange(event)}
            placeholder="Enter a Github Username for eg. mohit61"
            className="form-control"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Get Details
            </button>
          </span>
        </form>
      </div>
    );
  }

  onInputChange(event) {
    console.log("input");
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    this.props.fetchInfo(this.state.term);
    this.setState({
      term: ""
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchInfo }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
