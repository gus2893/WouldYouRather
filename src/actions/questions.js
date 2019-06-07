import { _saveQuestion, _saveQuestionAnswer } from "../api/_Data"
import { showLoading, hideLoading } from "react-redux-loading"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

function addAnswer(answer) {
	return {
		type: ADD_ANSWER,
		answer
	}
}

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function saveQuestion(question) {
	return dispatch => {
		dispatch(showLoading())
		return _saveQuestion(question)
			.then(question => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()))
	}
}

export function saveAnswer(answer) {
	return dispatch => {
		dispatch(showLoading())
		return _saveQuestionAnswer(answer)
			.then(() => dispatch(addAnswer(answer)))
			.then(() => dispatch(hideLoading()))
	}
}
