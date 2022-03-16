import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({reducer: counterReducer})

console.log(store.getState())

store.dispatch({ type: 'counter/incremented' })
console.log(store.getState())

const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
function Counter() {
    // State: a countervalue
    const [counter, setCounter] = useState(0)

    // Action:code that causes an update to the state when something happens
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    // View: the UI definition
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}