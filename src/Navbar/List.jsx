/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import data from "../Components/Navbar/ListData.json";

function List(props) {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default List;
