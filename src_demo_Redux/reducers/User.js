import types from '../actions/types';

const initUser = [{
    name: 'Tiên',
    address: 'Hà Nội',
    birthday: '08/03/1996'
}]

const UserReducer = (state = initUser, action) => {
    if(action.type == types.CREATE) {
        console.log("action CREATE", action)
        state = [
            // ...state,
            // ...action.data
            ...state.concat(action.data)
        ]
    }
    if(action.type == types.DELETE) {
        console.log("action DELETE", action)
        state = [
            ...state.splice(1,1)
        ]
    }
    if(action.type == types.UPDATE) {
        console.log("action UPDATE", action)
    }
    return state;
}

export default UserReducer;