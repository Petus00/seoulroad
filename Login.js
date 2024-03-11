import React, { useState } from "react";
import dummyData from "../assets/dummyData";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin_user" && password === "admin_password") {
      props.setMode("ADMIN");
      return;
    }

    const user = dummyData.find(
      (user) => user.id === username && user.password === password
    );
    if (user) {
      props.setMode("CONTENT");
      props.setUser(user);
    } else {
      alert("유효하지 않은 정보입니다.");
    }
  };

  return (
    <>
      <h2>로그인</h2>

      <div className="form">
        <p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </p>

        <p>
          <button onClick={handleLogin}>로그인</button>
        </p>
        <p>
          계정이 없으신가요?{" "}
          <button
            onClick={() => {
              props.setMode("SIGNIN");
            }}
          >
            회원가입
          </button>
        </p>
      </div>
    </>
  );
}

export default Login;
