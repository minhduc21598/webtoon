import types from '../actions/Types';

const initData = [];
const UserReducer = (state = initData, action) => {
    if (action.type == types.CREATE) {
        state = [
            ...state.concat(action.data)
        ];
    }
    if (action.type == types.DELETE) {
        let array = [...state];
        array.splice(0,state.length);
        state = [...array];
    }
    return state;
}

export default UserReducer;