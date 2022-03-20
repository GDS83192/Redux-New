const initialState = {
    status: 'All',
    colors: []

}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                status: action.payload
            }
        }
        default:
            return state
    }
}

export const colorFilterChanged = (color, changeType) => {
    return {
        type: 'filters/colorFilterChanged',
        payload: {color, changeType}
    }
}