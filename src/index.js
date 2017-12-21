import React, { Component } from "react";
import ReactDOM from "react-dom";
import "impress.js";
import 'impress.js/css/impress-demo.css';
import './css/classic-slides.css';
import Report201712 from "./presentations/201712";


class Root extends Component {
  render() {
    return (
      <div>
        <div id="impress" data-transition-duration="1000" data-autoplay="10">
          <Report201712 />
        </div>
        <div id="impress-toolbar"></div>
        <div className="impress-progressbar">
          <div></div>
        </div>
        <div className="impress-progress"></div>
        <div id="impress-help"></div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
window.impress('impress').init();
