import create from "zustand";

const useUserStore = create((set) => ({
  users: [],
  setusers: (input) => {
    set((state) => ({ users: input }));
  },

  singleUser: [],
  setSingleUser: (input) => {
    set((state) => ({ singleUser: input }));
  },
}));

export default useUserStore;
