// 회원가입, 로그인 부분 store
import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = (set) => ({
  data: [],
  setData: (data) => set({ data }),

  // 회원정보 값
  name: "",
  email: "",
  password: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),

  // 유효성 검사 통과 유무
  isName: false,
  isEmail: false,
  isPassword: false,
  setIsName: (isName) => set({ isName }),
  setIsEmail: (isEmail) => set({ isEmail }),
  setIsPassword: (isPassword) => set({ isPassword }),

  // 유효성 검사 메세지
  nameMessage: "",
  emailMessage: "",
  passwordMessage: "",
  setNameMessage: (nameMessage) => set({ nameMessage }),
  setEmailMessage: (emailMessage) => set({ emailMessage }),
  setPasswordMessage: (passwordMessage) => set({ passwordMessage }),

  isLogin: false,
  loading: false,
  hasErrors: false,
  setIsLogin: (isLogin) => set({ isLogin }),

  // [SignUp] axios post 요청
  fetch: async (name, email, password) => {
    set(() => ({ loading: true }));

    try {
      const response = await axios.post("http://localhost:3001/user", {
        name,
        email,
        password,
        profile_photo: "http://placehold.it/32x32",
      });
      set((state) => ({ data: (state.data = response.data), loading: false }));
      console.log(response.data);
      set(() => ({ name: "" }));
      set(() => ({ email: "" }));
      set(() => ({ password: "" }));
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
