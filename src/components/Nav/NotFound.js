import React from "react"
import { Container, Header, Icon } from "semantic-ui-react"

const NotFound = () => {
	return (
		<Container textAlign='center' style={{ width: "500px" }}>
			<Icon name='paper plane outline' size='huge' />
			<Header as='h1'>404 Page Not Found</Header>
		</Container>
	)
}

export default NotFound
