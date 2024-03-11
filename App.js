import React, { useState } from "react";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Content from "./components/Content";
import Admin from "./components/Admin";
import MyInfo from "./components/MyInfo";
import "./App.css";

function App() {
  const [mode, setMode] = useState("LOGIN");
  const [user, setUser] = useState(null); // 로그인한 사용자 정보

  let content = null;

  if (mode === "LOGIN") {
    content = <Login setMode={setMode} setUser={setUser} />;
  } else if (mode === "SIGNIN") {
    content = <SignIn setMode={setMode} />;
  } else if (mode === "CONTENT") {
    content = <Content user={user} setMode={setMode} />;
  } else if (mode === "ADMIN") {
    content = <Admin setMode={setMode} />;
  } else if (mode === "MYINFO") {
    content = <MyInfo user={user} />;
  }

  return (
    <>
      <div className="background">{content}</div>
    </>
  );
}

export default App;
