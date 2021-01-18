import React, { Component, useState, useEffect, useContext } from "react";
import { Input } from "antd";
const { Search } = Input;

import "antd/dist/antd.css";
import axios from "axios";
import { hlMsgContext } from "./constants";

function Searchbar() {
  const [gifresults, setResults] = useState([]);
  let [context, setMsgContext] = useContext(hlMsgContext);

  const onSearch = (keyword) => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=xVZ2RMp67cD1t8aAn0HLuKMlrJ0DJ4ip&limit=36`
      )
      .then((res) => setResults(res.data.data));
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
