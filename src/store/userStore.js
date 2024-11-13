import { create } from "zustand";

const useUser = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null, 
  setUser: (user) => {
    set({ user });
    localStorage.setItem("user", JSON.stringify(user)); 
  },
  clearUser: () => {
    set({ user: null });
    localStorage.removeItem("user"); 
  },
}));

export default useUser;