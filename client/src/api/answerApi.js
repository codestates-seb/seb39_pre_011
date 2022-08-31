import axios from "axios";

export const readAnswerData = (id, params) => {
  return axios({
    method: "GET",
    url: `http://localhost:3001/answer/${id}`,
    params: params,
  });
};

export const readParamsAnswerData = (params) => {
  return axios({
    method: "GET",
    url: `http://localhost:3001/answer`,
    params: params,
  });
};

export const createAnswerData = () => {};

export const updateAnswerData = (id, body) => {
  return axios({
    method: "PUT",
    url: `http://localhost:3001/answer/${id}`,
    params: {},
    header: { "Content-type": "application/json" },
    data: body,
  });
};

export const deleteAnswerData = () => {};
