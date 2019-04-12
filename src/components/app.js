import React, { Component } from "react";
import Search from "../containers/search";
import UserDetail from "../containers/userDetail";

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <UserDetail />
      </div>
    );
  }
}
