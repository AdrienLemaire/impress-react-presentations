import React, { Component } from "react";
import ReactDOM from "react-dom";
import impress from "impress.js";
import Report201712 from "./presentations/201712";


class Root extends Component {
  render() {
    return (
      <div id="ingress" data-transition-duration="1000" data-autoplay="10">
        <Report201712 />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
