import React from "react";

function MyInfo({ setMode, setUser, user }) {
  // 로그아웃 처리 함수
  const handleLogout = () => {
    setUser(null); // 사용자 정보 초기화
    setMode("LOGIN"); // 로그인 화면으로 이동
  };

  return (
    <div>
      <h2>내 정보 페이지</h2>
      <p>아이디: {user.id}</p>
      <p>이름: {user.name}</p>
      <p>전화번호: {user.tell}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default MyInfo;
