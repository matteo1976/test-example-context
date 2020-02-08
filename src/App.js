import React, { useState } from "react";
import "./styles.css";

import MyProvider from "./myProvider";

import { WriteName } from "./writeName";
import { DisplayName } from "./displayName";

export default function App() {
  const [myValue, setMyValue] = useState("");
  const state = { myValue: myValue };

  return (
    <div className="App">
      <MyProvider>
        <h1>Hello CodeSandbox</h1>
        <WriteName />
        <h2>Start editing to see some magic happen!</h2>
        <DisplayName />
      </MyProvider>
    </div>
  );
}
