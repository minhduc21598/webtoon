import types from "./Types";

const createUser = (data) => {
    return{
        type: types.CREATE,
        data: data
    }
}

const deleteUser = () => {
    return{
        type: types.DELETE,
    }
}

export {
    createUser, deleteUser
}