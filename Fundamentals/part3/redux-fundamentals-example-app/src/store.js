import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'

import {print1, print2, print3 } from './exampleAddons/middleware'


const composedEnhancer = composeWithDevTools(
    // Example:and whatever middleware you actually want to use here
    applyMiddleware(print1, print2, print3)
)

const store = createStore(rootReducer, composedEnhancer)
const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Pass enhancer As the second Arg, since there's no preloaded state
// const store = createStore(rootReducer)





export default store