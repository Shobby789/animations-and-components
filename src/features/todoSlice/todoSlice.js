import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    editTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const existingTodo = state.todos.find((todo) => todo?.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
      }
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const existingTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (existingTodoIndex !== -1) {
        const updatedTodos = [
          ...state.todos.slice(0, existingTodoIndex),
          ...state.todos.slice(existingTodoIndex + 1),
        ];
        state.todos = updatedTodos;
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
