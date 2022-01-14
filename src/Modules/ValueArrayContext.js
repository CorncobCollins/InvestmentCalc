import React, { useState, createContext } from "react";

export const ValueArrayContext = createContext();

export const ValueArrayProvider = (props) => {
  const [valueArray, setValueArray] = useState("");
  return (
    <ValueArrayContext.Provider value={[valueArray, setValueArray]}>
      {props.children}
    </ValueArrayContext.Provider>
  );
};
