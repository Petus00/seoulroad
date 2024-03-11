function MyInfo(props) {
  return (
    <div>
      <h2>내 정보</h2>
      <p>아이디: {props.user.id}</p>
      <p>이름: {props.user.name}</p>
      <p>전화번호: {props.user.tell}</p>
      <a href="/logout">로그아웃</a>
    </div>
  );
}

export default MyInfo;
