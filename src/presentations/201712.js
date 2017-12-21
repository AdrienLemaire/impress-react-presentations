import React from "react";


const Report201712 = () => (
  <div>
    <div className="step slide title" data-x="-1000" data-y="-1500">
      <h1>Example Presentation: <br />
          Classic Slides</h1>
      <h2>Adrien Lemaire</h2>
      <h3>2017/12</h3>

      <div className="notes">
      Any element with the className="notes" will not be displayed. This can
      be used for speaker notes. In fact, the impressConsole plugin will
      show it in the speaker console!  </div>
    </div>
    <div className="step slide" data-rel-x="1000" data-rel-y="0">
      <h1>Table of Contents</h1>
      <ul>
        <li><a href="#step-1">A title slide</a></li>
        <li><a href="#step-2">Table of Contents</a></li>
        <li><a href="#step-3">Text slide</a></li>
        <li><a href="#step-4">Bullet points</a></li>
        <li><a href="#step-5">Blockquote &amp; image</a></li>
        <li><a href="#step-6">More basic text styles</a></li>
        <li><a href="#step-7">Motion effects 101</a></li>
        <li><a href="#addons">Add-ons</a></li>
        <li><a href="#moreinfo">More info</a></li>
      </ul>

      <div className="notes">
        <p>Table of Contents, with links to other slides of this same presentation.</p>

        <p>Note that instead of absolute positioning we use relative positioning,
        with the data-rel-x and data-rel-y attributes. This means the step is
        positioned relative to the foregoing step. In other words, this is
        equivalent to data-x="0" data-y="-1500".</p>
      </div>
    </div>
  </div>
);

export default Report201712;
