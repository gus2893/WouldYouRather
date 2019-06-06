import React, { Component, Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import QuestionDashboard from './components/Dashboard/QuestionDashboard'
import Login from './components/Nav/Login'
import Leaderboard from './components/Leaderboard/Leaderboard'
import NewQuestion from './components/NewQuestions/NewQuestion'
import Nav from './components/Nav/Nav'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading'
import { Container } from 'semantic-ui-react'
import QuestionPage from './components/NewQuestions/QuestionPage'


class App extends Component  {
  componentDidMount (){
   this.props.dispatch(handleInitialData()) 

  }
  render(){
    return (
      <BrowserRouter>
      <Fragment>
      <LoadingBar/>
        <Container>
          <Nav/>
          <div>
            <Route path='/' exact component={QuestionDashboard}/>
            <Route path='/login' component={Login} />
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route path='/question/:id' component={QuestionPage}/>
            <Route path='/add' component={NewQuestion}/>
          </div>
        </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}



export default connect()(App);
