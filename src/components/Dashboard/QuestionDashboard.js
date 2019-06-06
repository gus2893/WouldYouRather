import React from 'react';
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import { Tab, Container, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'



class QuestionDashboard extends React.Component {
    render(){
        const { answeredQuestions, authUser, unansweredQuestions} = this.props 
        if(authUser === null){
            return <Redirect to='/login'/>
        }
            return(
                <Container textAlign='center' style={{width: '400px'}} >
                    <Segment >
                        <Tab panes={[
                            { menuItem: 'Unanswered Questions', render: () => <Tab.Pane><QuestionList question={unansweredQuestions}/> </Tab.Pane> },
                            { menuItem: 'Answered Questions', render: () => <Tab.Pane><QuestionList question={answeredQuestions}/> </Tab.Pane> }
                        ]} menu={{fluid:true , tabular: true, attached: true}}/>
                    </Segment>
                </Container>
            )   
    }
}

const mapStateToProps = ({users, questions, authUser}) =>{
    const aQuestions = []
    const uQuestions = []
    if(authUser !== null){
        for(var ans in users[authUser].answers){
            aQuestions.push(questions[ans])
        }
       Object.keys(questions).map(q => (
           aQuestions.includes(questions[q]) 
           ? null
           : uQuestions.push(questions[q]) 
        ))   
    }   
   return{
        authUser,
        answeredQuestions: aQuestions.sort((a,b)=> b.timestamp - a.timestamp),
        unansweredQuestions: uQuestions.sort((a,b)=> b.timestamp - a.timestamp)
   } 
}

export default connect(mapStateToProps)(QuestionDashboard)