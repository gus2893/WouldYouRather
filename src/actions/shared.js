import {_getInitialData } from '../api/_Data'
import { receiveQuestions} from './questions'
import { receiveUsers } from './users'
import { setAuthUser} from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
      return _getInitialData()
        .then(({users, questions})=>{
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthUser('johndoe'))
            dispatch(hideLoading())
        })
    }
}