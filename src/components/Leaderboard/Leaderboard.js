import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container} from 'semantic-ui-react'
import LeaderboardItem from './LeaderboardItem'
import _ from 'lodash'


class Leaderboard extends React.Component {
    render(){
        
        const { authUser, lb, users } = this.props
        if(authUser === null){
            return <Redirect to='/login'/>
        }
        return(
            <Container  textAlign='center' style={{width: '500px'}} >
                {
                lb.map((u,i) =>{
                    let color = ''
                    switch(i){
                        case 0:
                            color = 'yellow'
                            break
                        case 1:
                            color = 'grey'
                            break
                        default:
                            color = 'brown'
                            break
                    }
                    return (
                        <LeaderboardItem 
                            user={u} 
                            avatar={users[u.userId].avatarURL} 
                            key={u.userId} 
                            name={users[u.userId].name}
                            rank={color}
                        />
                    )
                })}
            </Container>

        )
    }
}

const mapStateToProps = ({authUser, users, questions}) =>{
    let leaderboard = [];
    if(authUser !== null ){
        console.log('here')
        Object.keys(users).map( u => (
            leaderboard.push({
                userId: u,
                questions: users[u].questions.length,
                answers: _.size(users[u].answers),
                score : _.size(users[u].answers)+ users[u].questions.length
            })
        ))   
    }  
    return{
        authUser,
        lb : leaderboard.sort((a,b)=> b.score - a.score),
        users
    }
}
export default connect(mapStateToProps)(Leaderboard)