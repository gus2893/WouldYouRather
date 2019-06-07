import React from "react"
import Question from "./Question"
import { Item } from "semantic-ui-react"

const QuestionList = ({ question }) => {
	return (
		<Item.Group divided>
			{question.map(q => (
				<Question key={q.id} question={q} />
			))}
		</Item.Group>
	)
}

export default QuestionList
