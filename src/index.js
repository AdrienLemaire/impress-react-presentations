import React, { Component } from "react";
import ReactDOM from "react-dom";
import "impress.js";
import 'impress.js/css/impress-demo.css';
import './css/classic-slides.css';
import Report201712 from "./presentations/201712";


class Root extends Component {
  render() {
    return <Report201712 />;
  }
}

ReactDOM.render(<Root />, document.getElementById("impress"));
impress().init();
