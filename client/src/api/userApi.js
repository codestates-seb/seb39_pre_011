import axios from "axios";

export const readUserData = (id) => {
  let url;
  console.log(id);

  if (id === undefined) {
    url = "http://localhost:3001/User";
  } else {
    url = `http://localhost:3001/User/${id}`;
  }

  console.log(url);

  return axios({
    method: "GET",
    url: url,
    params: {},
  });
};
