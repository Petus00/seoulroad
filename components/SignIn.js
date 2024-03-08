import React, { useState } from "react";
import dummyData from "../assets/dummyData";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignup = () => {
    const existingUser = dummyData.find((user) => user.id === username);
    if (existingUser) {
      alert("해당 ID가 이미 존재합니다.");
    } else {
      if (password === password2) {
        // Add new user to the dummyData
        dummyData.push({
          id: dummyData.length + 1,
          username: username,
          password: password,
        });
        alert("회원가입 성공");
        props.setMode("LOGIN");
      } else {
        alert("패스워드가 같지 않습니다.");
      }
    }
  };

  return (
    <>
      <h2>회원가입</h2>

      <div className="form">
        <p>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
          />
        </p>

        <p>
          <button onClick={handleSignup}>회원가입</button>
        </p>
      </div>
    </>
  );
}

export default SignIn;
