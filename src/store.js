
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { usersListReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    usersList: usersListReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))