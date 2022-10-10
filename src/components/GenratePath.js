import React from "react";
import { generatePath } from "react-router-dom";

const GenratePath = () => {
  const match = generatePath("/users/:aosiaso?");
  console.log("1234",match);

  return <div>GenratePath</div>;
};

export default GenratePath;
