import React, { Component, useState, useEffect } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import Process from "./Process";
import { h1, defaultStyle } from "./constants";

function Study() {
  const [InProgress, setInProgress] = useState(false);
  return (
    <div className="contain-fluid">
      {InProgress ? (
        <Process />
      ) : (
        <div>
          {h1}
          <div class="container pt-4 mt-4" style={defaultStyle}>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <p>
                  This is the beginning of the study. <br /> Thanks for your
                  time and participation!
                  <br />
                  Click Start when ready
                </p>
                <Button
                  type="primary"
                  size="big"
                  style={{ width: "100%", height: "auto", fontSize: "20px" }}
                  onClick={() => setInProgress(true)}
                >
                  Start
                </Button>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Study;
