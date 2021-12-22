import produce from 'immer'
import createReducer from './reducerUtills'

const intioanalState = {
    users: {}
}
const users = {
    addNewUser(state, action) {
        state.users = action.payload;
        console.log('new Login/register');
        console.log(state.users);
    },
    editUserDetails(state, action) {
        state.users = action.payload
        console.log("edit   ", state.users);
    }


}
export default produce((state, action) => createReducer(state, action, users), intioanalState);
