import create from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  modalOpen: false,
  toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen })),

  currentEdit: null,
  setCurrentEdit: (todo) => set(() => ({ currentEdit: todo })),
  clearCurrentEdit: () => set(() => ({ currentEdit: null })),

  updateTodo: (id, newText) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo)
  })),

  // deleteTodo action
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}), {
  name: "todo-list-storage",
}));

export default useStore;
