import axios from "axios";

export const readPostData = (id) => {
  return axios({
    method: "GET",
    url: `http://localhost:3001/question/${id}`,
    params: {},
  });
};

export const createPostData = () => {};

export const updatePostData = (id, body) => {
  return axios({
    method: "PUT",
    url: `http://localhost:3001/question/${id}`,
    params: {},
    header: { "Content-type": "application/json" },
    data: body,
  });
};

export const deletePostData = () => {};
