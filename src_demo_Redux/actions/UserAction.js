import types from "./types";

const createUser = (data) => {
    return{
        type: types.CREATE,
        data: data
    }
}

const deleteUser = (data) => {
    return{
        type: types.DELETE,
        data: data
    }
}

const updateUser = () => {
    return{
        type: types.UPDATE
    }
}

export {
    createUser, deleteUser, updateUser
}