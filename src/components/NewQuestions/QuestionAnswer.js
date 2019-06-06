import React, {Fragment } from 'react'
import { Segment, Header, Label,Progress } from 'semantic-ui-react'

const QuestionAnswer = ({answer, choice, total}) =>{
    return (
        <Fragment >
        {
            answer 
            ?
                <Segment inverted color="green" tertiary>
                    <Label color='yellow' floating circular>Your Vote</Label>
                    <div>{answer.text}</div>
                    <Progress color='yellow' value={answer.votes.length} total={total} progress='percent' style={{margin:'15px'}}/>
                    <div>{`${answer.votes.length} out of ${total}`}</div>
                </Segment> 
            :
                <Segment>
                    <Header as='h4'>{choice.text}</Header>
                    <Progress color='yellow' value={choice.votes.length} total={total} progress='percent' style={{margin:'15px'}}/>
                    <div>{`${choice.votes.length} out of ${total}`}</div>
                </Segment>    
        }
        </Fragment >
    )
}

export default QuestionAnswer