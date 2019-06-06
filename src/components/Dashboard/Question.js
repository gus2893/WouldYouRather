import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Card, Image, Divider } from 'semantic-ui-react'
import { formatDate } from '../../api/_Data'
import { Link } from 'react-router-dom'

class Question extends Component {
    render(){
        const {author, question} = this.props
        return(
          <Card fluid>
          <Card.Content>
            <Image floated='left' size='tiny' src={author ? author.avatarURL : null} circular/>
            <Card.Header>{author ? author.name : null} asks: </Card.Header>
            <Card.Meta>{formatDate(question.timestamp)}</Card.Meta>
            <Card.Description>
              {question.optionOne.text}
            </Card.Description>
              <Divider horizontal>OR</Divider>
            <Card.Description>
              {question.optionTwo.text}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>  
            <Link to={`/question/${question.id}`}>
              <Button inverted color='green'>
                View Poll
              </Button>
            </Link>
          </Card.Content>
        </Card>
        )
    }
}

const mapStateToProps = ({questions, users, authUser }, {question}) =>{
  console.log(question)
    const author = users[question.author]
    return{
        authUser,
        question,
        author
    }

}
export default connect(mapStateToProps)(Question)