import React from "react";
import Filter from "./Filter";

const FilterList = ({ categories, setFilter, clearFilter }) => (
  <span>
    {categories.map((category, index) => (
      <span key={index}>
        <Filter name={category} onClick={setFilter} />
        {" - "}
      </span>
    ))}
    <a href="javascript:void(0)" onClick={clearFilter}>
      all posts
    </a>
  </span>
);

export default FilterList;
