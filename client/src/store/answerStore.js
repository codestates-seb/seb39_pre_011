import create from "zustand";

const useAnswerStore = create((set) => ({
  answer: [],
  setAnswers: (input) => {
    set((state) => ({ Answers: input }));
  },

  singleAnswer: [],
  setSingleAnswer: (input) => {
    set((state) => ({ singleAnswer: input }));
  },

  questionAnswer: [],
  setQuestionAnswer: (input) => {
    set((state) => ({ questionAnswer: input }));
  },

  users: [],
  setUsers: (input) => {
    set((state) => ({ users: input }));
  },
}));

export default useAnswerStore;
