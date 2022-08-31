import create from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  setPosts: (input) => {
    set((state) => ({ posts: input }));
  },

  singlePost: [],
  setSinglePost: (input) => {
    set((state) => ({ singlePost: input }));
  },

  users: [],
  setUsers: (input) => {
    set((state) => ({ users: input }));
  },
}));

export default usePostStore;
