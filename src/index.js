import React from "react";
import ReactDOM from "react-dom";
import impress from "impress.js";
import Report201712 from "reports/201712";


const Root = () => (
  <div id="ingress" data-transition-duration="1000" data-autoplay="10">
    <Report201712 />
  </div>
);

impress().init();
ReactDOM.render(<Root />, document.getElementById("#root")));
