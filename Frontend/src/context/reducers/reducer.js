import * as types from '../actions/actionType'

const initialState = {
    users: [],
    user: {},
    loading: true,
}


const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.REGISTER_USER:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default usersReducers
