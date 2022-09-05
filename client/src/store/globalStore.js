// global etc store
import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
});

// 개발 환경에선 상태를 Debugging
// 배포 환경에선 Debugging 보여지지 않도록 분기 처리
const gloablStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default gloablStore;
