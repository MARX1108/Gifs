import React, { Component, useState, useEffect, useContext } from "react";
import {
  h1,
  instructions,
  defaultStyle,
  hlMsgContext,
  caseContext,
} from "./constants";
import "antd/dist/antd.css";
import conversation from "../json/conversation.json";
import Searchbar from "./Search";
import { Button, message } from "antd";
import Survey from "./Survey";

function Process() {
  const [isSearching, setIsSearching] = useState(true);
  const [context, setMsgContext] = useContext(hlMsgContext);
  const [ccontext, setCaseContext] = useContext(caseContext);
  const [oldContextValue, saveContextValue] = useState(ccontext);
  useEffect(() => {
    console.log(oldContextValue, ccontext);
    if (oldContextValue != ccontext) {
      setIsSearching(true);
      setMsgContext(null);
    }
    saveContextValue(ccontext);
  }, [ccontext]);

  return ccontext >= 9 ? (
    finishPrompt
  ) : (
    <div className="contain-fluid">
      {h1}
      <h2 className="display-5 pb-4" style={defaultStyle}>
        Case: {ccontext}
      </h2>
      {instructions}

      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-4" style={{ padding: "0% 2% 0% 2%" }}>
          <div className="m-4">
            <div className="d-flex justify-content-center">
              <img
                src="../../static/avatars/avatar.png"
                className="img-fluid w-25"
                id="avatar"
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div
              className="d-flex justify-content-center p-1 mb-2"
              style={{ borderBottom: "1px solid #d4d4d4" }}
            >
              Alex
            </div>

            <div>{renderChat(ccontext, context)}</div>
            <Button
              type="primary"
              size="big"
              style={{ width: "100%", height: "auto", fontSize: "20px" }}
              disabled={!isSearching}
              onClick={() => {
                if (!context) message.error("Selected an Gif before submit");
                else {
                  setIsSearching(false);
                  message.success("Gif submitted!");
                }
              }}
            >
              Confirm GIF Selection
            </Button>
          </div>
        </div>
        <div className="col-md-6" style={{ padding: "0% 2% 0% 2%" }}>
          {isSearching ? <Searchbar /> : <Survey />}
        </div>

        <div className="col-md-1" />
      </div>
    </div>
  );
}

function renderChat(index, hlMsg) {
  let chat = conversation[index];
  const img = <img src={hlMsg} style={{ width: "90%" }} />;
  return chat.map((msg) => {
    let msgClass =
      msg.type == "left"
        ? "d-flex justify-content-start mb-3"
        : "d-flex justify-content-end mb-3";

    let msgStyle = msg.highlight
      ? { backgroundColor: "#F6D06F", borderRadius: "30px" }
      : msg.type == "left"
      ? { backgroundColor: "#73B8F7", borderRadius: "30px", color: "#ffffff" }
      : { backgroundColor: "#EDF6FD", borderRadius: "30px" };
    return (
      <div className={msgClass} id={msg.highlight ? "hl-msg" : null}>
        <div className="p-2 px-4" style={msgStyle}>
          {msg.highlight && hlMsg ? img : msg.payload}
        </div>
      </div>
    );
  });
}

export default Process;

export const finishPrompt = (
  <div>
    {h1}
    <div class="container pt-4 mt-4" style={defaultStyle}>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>
            This is the end of the study. <br /> Thanks for your time and
            participation!
          </p>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
);
