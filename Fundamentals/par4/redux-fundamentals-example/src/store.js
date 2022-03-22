import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
  // other store enhancers if any
)

const store = configureStore({
  reducer: {
    // Define a top level state field named` tanoos`, handled by` produce reducer`
    todos: todosReducer,
    filters: filtersReducer
  }
})
export default store
