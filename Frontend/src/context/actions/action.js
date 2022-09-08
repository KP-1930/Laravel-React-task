import axios from 'axios'
import * as types from '../actions/actionType'


const userAdded = () => ({
    type: types.REGISTER_USER
})


export const addUser = (user) => {
    return function (dispatch) {
        axios.post('http://127.0.0.1:8000/api/register', user).then((res) => {
            console.log("addUserRes", res);
            dispatch(userAdded())
        })
            .catch((error) => console.log(error))
    }

}