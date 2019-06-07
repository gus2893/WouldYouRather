import React from "react"
import { connect } from "react-redux"
import {
	Dropdown,
	Segment,
	Container,
	Button,
	Divider,
	Header,
	Card,
	Image,
	Message
} from "semantic-ui-react"
import _ from "lodash"
import { setAuthUser } from "../../actions/authedUser"
import { withRouter } from "react-router-dom"

class Login extends React.Component {
	state = {
		selected: "",
		showError: true
	}
	handleChange = (e, { value }) => this.setState({ selected: value })

	signIn = () => {
		if (this.state.selected === "") {
			return this.setState({ showError: false })
		}

		this.props.dispatch(setAuthUser(this.state.selected))
		this.props.history.push(this.props.location.pathname)
	}

	render() {
		const { loginUsers, users } = this.props
		const { selected, showError } = this.state

		return (
			<Container style={{ width: "500px" }}>
				<Segment.Group>
					<Segment color='green' tertiary inverted textAlign='center'>
						<Header as='h1'>Welcome to Will You Rather</Header>
					</Segment>
					<Segment textAlign='center'>
						<Header as='h2'>Please Log in</Header>
						{selected === "" ? null : (
							<Card centered>
								<Image src={users[selected].avatarURL} />
								<Card.Content>
									<Card.Header>{users[selected].name}</Card.Header>
									<Card.Description>
										Has asked {users[selected].questions.length} questions
									</Card.Description>
									<Card.Description>
										Has answered {_.size(users[selected].answers)} questions
									</Card.Description>
								</Card.Content>
							</Card>
						)}
						<Dropdown
							loading={loginUsers === [] ? true : false}
							placeholder='Select user'
							selection
							options={loginUsers}
							onChange={this.handleChange}
						/>
						<Message
							hidden={showError}
							error
							header='Please Select an User'
							content='You must select the user you wish to log in as.'
						/>

						<Divider horizontal>
							<Button inverted color='green' onClick={this.signIn}>
								Sign In
							</Button>
						</Divider>
					</Segment>
				</Segment.Group>
			</Container>
		)
	}
}

const mapStateToProps = ({ users, authUser }) => {
	const loginUsers = []
	Object.keys(users).map((key, index) =>
		loginUsers.push({
			key: users[key].name,
			text: users[key].name,
			value: users[key].id,
			image: { avatar: true, src: users[key].avatarURL }
		})
	)
	return {
		loginUsers,
		users
	}
}
export default withRouter(connect(mapStateToProps)(Login))
