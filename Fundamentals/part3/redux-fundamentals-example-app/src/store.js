import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import {sayHiOnDispatch, includeMeaningOfLife} from './exampleAddons/enhancers'
import {print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Pass enhancer As the second Arg, since there's no preloaded state
// const store = createStore(rootReducer)


const store = createStore(rootReducer, middlewareEnhancer)



export default store