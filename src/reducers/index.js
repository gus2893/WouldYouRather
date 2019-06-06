import { combineReducers } from 'redux'
import users from './users'
import authUser from './authUser'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    users,
    authUser,
    questions,
    loadingBar : loadingBarReducer
})