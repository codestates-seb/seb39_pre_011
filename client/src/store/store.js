import create from "zustand";
const axios = require("axios");

const postsStore = create((set) => ({
  posts: [],
  setPosts: () => {
    set((state) => ({ posts: state.posts + 1 }));
  },
  fetchAllPost: async () => {
    let result;
    result = await axios({
      method: "get",
      url: "http://localhost:3001/question",
    }).then((response) => response.data);
    return result;
  },
}));

export default postsStore;
