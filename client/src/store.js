import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  user_id: "hello1",
  name: "beanxx",
  email: "beanxx@naver.com",
  password: "23432",

  // setName: (name) => set({ name }),
  // setEmail: (email) => set({ email }),
  // setPassword: (password) => set({ password }),

  fetch: async () => {
    try {
      const response = await axios.get("https://localhost:3001/user");
      set((state) => ({}));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
});

// 개발 환경에선 상태를 Debugging
// 배포 환경에선 Debugging 보여지지 않도록 분기 처리
const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
