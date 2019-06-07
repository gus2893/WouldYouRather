import React from "react"
import { connect } from "react-redux"
import { Redirect, withRouter } from "react-router-dom"
import {
	Container,
	Divider,
	Segment,
	Form,
	Button,
	Message
} from "semantic-ui-react"
import { saveQuestion } from "../../actions/questions"

class NewQuestion extends React.Component {
	state = {
		optionOne: "",
		optionTwo: "",
		showError: false
	}
	handleChange = (e, { name }) => {
		this.setState({ [name]: e.target.value })
	}

	submitForm = () => {
		if (this.state.optionOne === "" || this.state.optionTwo === "") {
			this.setState({ showError: true })
		} else {
			this.props
				.dispatch(
					saveQuestion({
						optionOne: this.state.optionOne,
						optionTwo: this.state.optionTwo,
						author: this.props.authUser
					})
				)
				.then(() => this.props.history.push("/"))
		}
	}
	render() {
		const { authUser } = this.props
		const { showError } = this.state
		if (authUser === null) {
			return <Redirect to='/login' />
		}
		return (
			<Container textAlign='center' style={{ width: "400px" }}>
				<Segment>
					<h1 style={{ textAlign: "center" }}>Create a New Question</h1>
					Complete the question:
					<h3>Would you rather...</h3>
					<div>
						<Form error={showError}>
							<Form.Input
								name='optionOne'
								value={this.state.optionOne}
								onChange={this.handleChange}
								fluid
								placeholder='Enter Option One text here'
							/>
							<Divider horizontal>OR</Divider>
							<Form.Input
								name='optionTwo'
								value={this.state.optionTwo}
								onChange={this.handleChange}
								fluid
								placeholder='Enter Option Two text here'
							/>
							<Message
								error
								header='Must have two options'
								content='You can only submit a question if you have two options to select from.'
							/>
						</Form>
					</div>
					<br />
					<Button fluid inverted color='green' onClick={this.submitForm}>
						Submit
					</Button>
				</Segment>
			</Container>
		)
	}
}

const mapStateToProps = ({ authUser }) => {
	return {
		authUser
	}
}
export default withRouter(connect(mapStateToProps)(NewQuestion))
