import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [Number, setNumber] = useState(0);

  return (
    <MyContext.Provider value={{ Number, setNumber }}>
      {props.children}
    </MyContext.Provider>
  );
};
