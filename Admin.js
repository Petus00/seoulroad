import React, { useState } from "react";
import dummyData from "../assets/dummyData";

function Admin(props) {
  const [users, setUsers] = useState(dummyData);
  const [newUser, setNewUser] = useState({
    name: "",
    id: "",
    password: "",
    tell: "",
    registration_date: "",
    role: "회원", // 기본값으로 회원 설정
  });

  const handleLogout = () => {
    props.setMode("LOGIN");
  };

  const handleAddUser = () => {
    // 모든항목을 필수 입력사항으로
    if (
      newUser.name &&
      newUser.id &&
      newUser.password &&
      newUser.tell &&
      newUser.registration_date
    ) {
      setUsers([...users, { ...newUser }]);
      setNewUser({
        name: "",
        id: "",
        password: "",
        tell: "",
        registration_date: "",
        role: "회원",
      });
    } else {
      alert("모든 항목을 입력하세요.");
    }
  };

  const handleRemoveUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEditUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <>
      <h2>관리자용 패널</h2>
      <div>
        <h3>추가</h3>
        <input
          type="text"
          value={newUser.name}
          placeholder="Name"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          value={newUser.id}
          placeholder="ID"
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
        />
        <input
          type="password"
          value={newUser.password}
          placeholder="Password"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <input
          type="text"
          value={newUser.tell}
          placeholder="Tell"
          onChange={(e) => setNewUser({ ...newUser, tell: e.target.value })}
        />
        <input
          type="date"
          value={newUser.registration_date}
          placeholder="Registration Date"
          onChange={(e) =>
            setNewUser({ ...newUser, registration_date: e.target.value })
          }
        />
        <button onClick={handleAddUser}>추가</button>
      </div>
      <div>
        <h3>회원 목록</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Password</th>
              <th>Tell</th>
              <th>Registration Date</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.password}</td>
                <td>{user.tell}</td>
                <td>{user.registration_date}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleRemoveUser(user.id)}>
                    삭제
                  </button>
                  <button
                    onClick={() => {
                      const updatedUser = {
                        name: prompt("Enter new name", user.name),
                        id: prompt("Enter new ID", user.id),
                        password: prompt("Enter new password", user.password),
                        tell: prompt("Enter new tell", user.tell),
                        registration_date: prompt(
                          "Enter new registration date",
                          user.registration_date
                        ),
                        role: prompt("Enter new role", user.role),
                      };
                      handleEditUser(user.id, updatedUser);
                    }}
                  >
                    수정
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleLogout}>로그인 창으로 이동</button>
    </>
  );
}

export default Admin;
