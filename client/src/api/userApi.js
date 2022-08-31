import axios from "axios";

export const readUserData = (id) => {
  return axios({
    method: "GET",
    url: `http://localhost:3001/user/${id}`,
    params: {},
  });
};
