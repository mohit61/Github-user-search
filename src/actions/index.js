import axios from "axios";
import { bindActionCreators } from "redux";

const url_default = `https://api.github.com/users/`;

export default function fetchInfo(user) {
  var check = 1;
  const url = `${url_default}${user}`;
  const request = axios.get(url);
  return {
    type: "info",
    payload: request
  };
  /*if (check === 1) {
    return {
      type: "info",
      payload: request
    };
  } else {
    return {
      type: "info",
      payload: null
    };
  }*/
}
