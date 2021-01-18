import React, { Component, useState, useEffect, useContext } from "react";
import { Input } from "antd";
const { Search } = Input;

import "antd/dist/antd.css";
import axios from "axios";
import { hlMsgContext } from "./constants";

function getCookie(name) {
  var cookieValue = null;
  console.log("document.cookie: " + document.cookie);
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function Searchbar() {
  const [gifresults, setResults] = useState([]);
  let [context, setMsgContext] = useContext(hlMsgContext);

  const onSearch = (keyword) => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=xVZ2RMp67cD1t8aAn0HLuKMlrJ0DJ4ip&limit=36`
      )
      .then((res) => setResults(res.data.data));
    // debugger;
    axios
      .post(
        "api",
        {
          keyword: keyword,
        },
        {
          headers: {
            // Accept: "application/x-www-form-urlencoded",
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
          },
        }
      )
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h3>Search a Gif to replace the highlighted text</h3>
      <Search
        placeholder="Search a Gif to replace the highlighted text"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: "100%" }}
      />
      <div>
        {gifresults.map((gif) => (
          <img
            src={gif.images.downsized.url}
            className="img-fluid w-25"
            onClick={(e) => {
              setMsgContext(e.target.src);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default Searchbar;
