import React, { useContext } from "react";
import { Button, message } from "antd";
import "antd/dist/antd.css";
import { caseContext, hlMsgContext } from "./constants";

function Survey() {
  let [ccontext, setCaseContext] = useContext(caseContext);
  let [context, setMsgContext] = useContext(hlMsgContext);

  return (
    <div>
      <h3>How much do you agree with the statement:</h3>
      <div class="form-group mb-3">
        <p>
          This gif closely represents or describes the emotion I want to
          express.
        </p>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q1"
                id="gridRadios1"
                value="1"
              />
              Strongly disagree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q1"
                id="gridRadios2"
                value="2"
              />
              Somewhat disagree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q1"
                id="gridRadios2"
                value="3"
              />
              Neutral
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q1"
                id="gridRadios2"
                value="4"
              />
              Somewhat agree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q1"
                id="gridRadios2"
                value="5"
              />
              Strongly agree
            </label>
          </div>
        </div>
      </div>

      <div class="form-group mb-3">
        <p>I would likely use the selected gif in my own conversation.</p>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q2"
                id="gridRadios1"
                value="1"
              />
              Strongly disagree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q2"
                id="gridRadios2"
                value="2"
              />
              Somewhat disagree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q2"
                id="gridRadios2"
                value="3"
              />
              Neutral
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q2"
                id="gridRadios2"
                value="4"
              />
              Somewhat agree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q2"
                id="gridRadios2"
                value="5"
              />
              Strongly agree
            </label>
          </div>
        </div>
      </div>

      <div class="form-group mb-3">
        <p>I’m familiar with the source of the selected animated gif.</p>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q3"
                id="gridRadios1"
                value="1"
              />
              Strongly disagree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q3"
                id="gridRadios2"
                value="2"
              />
              Somewhat disagree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q3"
                id="gridRadios2"
                value="3"
              />
              Neutral
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q3"
                id="gridRadios2"
                value="4"
              />
              Somewhat agree
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q3"
                id="gridRadios2"
                value="5"
              />
              Strongly agree
            </label>
          </div>
        </div>
      </div>
      <h3>True or False</h3>

      <div class="form-group mb-3">
        <p class="w-100">Have you ever used the selected gif?</p>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q4"
                id="gridRadios1"
                value="1"
              />
              True
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q4"
                id="gridRadios2"
                value="2"
              />
              False
            </label>
          </div>
        </div>
      </div>

      <div class="form-group mb-3">
        <p class="w-100">
          Have you used any gifs with the same character in the selected gif?
        </p>
        <div class="col-sm-10">
          <div class="form-check">
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q5"
                id="gridRadios1"
                value="1"
              />
              True
            </label>
            <label class="form-check-label w-100">
              <input
                class="form-check-input"
                type="radio"
                name="q5"
                id="gridRadios2"
                value="2"
              />
              False
            </label>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        size="big"
        style={{ width: "100%", height: "auto", fontSize: "20px" }}
        onClick={() => {
          message.success("Survey submitted!");
          setCaseContext(ccontext + 1);
        }}
      >
        Submit Survey
      </Button>
    </div>
  );
}

export default Survey;
