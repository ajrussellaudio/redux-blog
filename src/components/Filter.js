import React from "react";

const Filter = ({ name, onClick }) => (
  <a href="javascript:void(0)" {...onClick}>
    {name}
  </a>
);

export default Filter;
