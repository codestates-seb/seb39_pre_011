import React, { useEffect, useState } from "react";
import styled from "styled-components";
import User from "./User";

const axios = require("axios");

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/user",
    }).then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  return (
    <Container>
      {users.map((user) => {
        return <User user={user} key={user.user_id} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  gap: 12px;
`;

export default UserList;
