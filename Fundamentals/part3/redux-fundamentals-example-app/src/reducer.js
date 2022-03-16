import {combineReducers} from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
    // Define a top level state field named` 2 dues`, handled by`toudouze reducer`
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer