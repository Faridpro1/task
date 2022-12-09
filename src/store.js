import create from 'zustand'

export const useStore = create(set => ({
 token:localStorage.getItem("token"),
  setToken: () => set((state) => ({ count: state.count + 1 })),
}))

