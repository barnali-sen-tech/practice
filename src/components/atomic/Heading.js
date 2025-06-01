import React from "react";

const Heading = (props) => {
  const sizeMapping = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
  };
  return (
    <>
      {props.size === sizeMapping.SMALL ? (
        <>
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
        </>
      ) : props.size === sizeMapping.MEDIUM ? (
        <>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
        </>
      ) : (
        <><h1>{props.title}</h1>
          <h2>{props.subtitle}</h2></>
      )}
    </>
  );
};

export default Heading;
