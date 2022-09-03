import axios from "axios";

export const readPostData = (id) => {
  let url;
  if (id === undefined) {
    url = "http://localhost:3001/question";
  } else {
    url = `http://localhost:3001/question/${id}`;
  }

  return axios({
    method: "GET",
    url: url,
    params: {},
  });
};

export const readParamsPostData = (params) => {
  return axios({
    method: "GET",
    url: `http://localhost:3001/question`,
    params: params,
  });
};

export const createPostData = (body) => {
  return axios({
    method: "POST",
    url: "http://localhost:3001/question",
    params: {},
    header: { "Content-type": "application/json" },
    data: body,
  });
};

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
