import * as cxt from '../components/Home/actions'
const intial_state = {
    todos: [],
}
export const rootReducer = (state = intial_state, action: any) => {
    switch (action.type) {
        case cxt.SET_TODOS:
            return {
                ...state,
                todos: action.todos,
            }
    }
    return state;
}