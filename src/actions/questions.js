import { _saveQuestion } from '../api/_Data'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function receiveQuestions (questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion(question){
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion(question)
            .then((question)=> dispatch(addQuestion(question)))
            .then(()=> dispatch(hideLoading()))
    }
}