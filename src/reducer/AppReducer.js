
const AppReducerDefaultState = []

const AppReducer = (state = AppReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_NEW_TRIP":
            return [...state, 
            action.trip
            ]
            case "DELETE_TRIP":
                return state.filter(({tripId}) => tripId !== action.tripId);
        default:
            return state;
    }
}

export default AppReducer;