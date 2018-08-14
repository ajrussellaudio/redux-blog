import React from "react";

const Timestamp = ({ data }) => {
  const date = new Date(data);
  return <span>{date.toUTCString()}</span>;
};

export default Timestamp;
