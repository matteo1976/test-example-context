import React, { useContext } from "react";
import { UserContext } from "./myProvider";

export const DisplayName = () => {
  const { myValue } = useContext(UserContext);
  return <div>il nome e' : {myValue} </div>;
};
