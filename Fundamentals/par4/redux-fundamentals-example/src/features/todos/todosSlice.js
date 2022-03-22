import { client } from '../../api/client'
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [...state, action.payload]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed)
    }
    case 'todos/todosLoaded': {
      return action.payload
    }
    default:
      return state
  }
}

// Thunk function
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async() => {
  const response = await client.get('/fakeApi/todos')
  return response.todos
})

export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async text => {
  const initialTodo = {text}
  const response = await client.post('/fakeApi/todos', {todo:initialTodo})
  return response.todo
})
