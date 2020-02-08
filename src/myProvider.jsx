import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext({
  myValue: "",
  changeValue: () => {}
});

const MyProvider = ({ children }) => {
  const [myValue, setValue] = useState("");
  const changeValue = e => {
    setValue(e.target.value);
  };
  return (
    <UserContext.Provider value={{ myValue, changeValue }}>
      {children}
    </UserContext.Provider>
  );
};
export default MyProvider;
