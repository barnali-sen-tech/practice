import React from "react";

import UserContext from "./UserContext";

import { useContext, useEffect, useState } from "react";
const ContextApiUse = (props) => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <>
      {/* <h2>{data}</h2>  */}
      <input
        type="text"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
      />
      <h2>{loggedInUser}</h2>
    </>
  );
};
export default ContextApiUse;
