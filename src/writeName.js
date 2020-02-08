import React, { useContext, useState } from "react";
import { UserContext } from "./myProvider";

export const WriteName = () => {
  const { myValue } = useContext(UserContext);
  const { changeValue } = useContext(UserContext);
  return (
    <div>
      <input type="text" value={myValue} onChange={changeValue} />
    </div>
  );
};
