import React from "react"
import { connect } from "react-redux"
import Answered from "./Answered"
import Unanswered from "./Unanswered"
import { Container } from "semantic-ui-react"
import NotFound from "../Nav/NotFound"

class QuestionPage extends React.Component {
	render() {
		const { answered, id, authUser, question, questionAuthor } = this.props
		if (typeof question === "undefined") {
			return <NotFound />
		}
		return (
			<Container textAlign='center' style={{ width: "500px" }}>
				{answered === true ? (
					<Answered
						answer={authUser.answers[id]}
						q={question}
						author={questionAuthor}
					/>
				) : (
					<Unanswered q={question} author={questionAuthor} />
				)}
			</Container>
		)
	}
}

const mapStateToProps = ({ users, authUser, questions }, props) => {
	const { id } = props.match.params

	if (!questions[id]) {
		return {}
	}
	return {
		id,
		questionAuthor: users[questions[id].author],
		authUser: users[authUser],
		question: questions[id],
		answered: authUser ? questions[id].id in users[authUser].answers : null
	}
}

export default connect(mapStateToProps)(QuestionPage)
