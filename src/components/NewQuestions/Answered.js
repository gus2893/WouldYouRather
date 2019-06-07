import React from "react"
import { Segment, Label, Grid, Image, Header } from "semantic-ui-react"
import QuestionAnswer from "./QuestionAnswer"

const Answered = ({ answer, q, author }) => {
	const total = q.optionOne.votes.length + q.optionTwo.votes.length
	const other = answer === "optionOne" ? "optionTwo" : "optionOne"
	return (
		<Segment>
			<Label attached='top'>Asked by {author.name}</Label>
			<Grid columns={2}>
				<Grid.Column width={6}>
					<Image src={author.avatarURL} circular />
				</Grid.Column>
				<Grid.Column width={10}>
					<Header as='h1' textAlign='left'>
						Results:
					</Header>
					<QuestionAnswer answer={q[answer]} total={total} />
					<QuestionAnswer choice={q[other]} total={total} />
				</Grid.Column>
			</Grid>
		</Segment>
	)
}

export default Answered
