import React from "react";

function Content(props) {
  return (
    <>
      <h2>WorkSpace</h2>
      <p>로그인 성공</p>
      <p>
        나의 정보 보기{" "}
        <button
          onClick={() => {
            props.setMode("MYINFO");
          }}
        >
          내정보
        </button>
      </p>
      <a href="/logout">로그아웃</a>
    </>
  );
}

export default Content;
