import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

export const defaultStyle = {
  color: "#4E4E4E",
  textAlign: "center",
  fontSize: "30px",
};

export const h1 = (
  <h1
    className="display-5 pt-4"
    style={{ color: "#4E4E4E", textAlign: "center", fontSize: "50px" }}
  >
    Animated Gifs Study
  </h1>
);
export const instructions = (
  <div className="row pb-4 mb-4">
    <div className="col-md-1"></div>

    <Card
      className="col-md-3 text-center"
      title="Step 1. "
      style={{ width: 300 }}
    >
      <p>
        Read over the conversation example in the Sample section. You're tasked
        with selecting a gif to replace the last message in the yellow text
        bubble.
      </p>
    </Card>
    <Card
      className="col-md-4 text-center"
      title="Step 2. "
      style={{ width: 300 }}
    >
      <p>
        Type in keywords in the search bar to search a gif. Click 'search'
        button and a list of gifs will be shown. To select a gif, click on one
        of the gifs shown below search bar.
      </p>
    </Card>
    <Card
      className="col-md-3 text-center"
      title="Step 3.  "
      style={{ width: 300 }}
    >
      <p>
        Once you select a gif, complete the survey on the survey section and
        click "submit" to submit your choice and answers.
      </p>
    </Card>

    <div className="col-md-1"></div>
  </div>
);
