import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Container } from 'semantic-ui-react'
import { setAuthUser } from '../../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Nav extends React.Component{


    logOut = () => {
        this.props.dispatch(setAuthUser(null))
        this.props.history.push('/login')
    }

    render(){
        const { authedUser, location } = this.props
       
    return(
        <Menu pointing borderless>
            <Container>
                <NavLink to='/' exact >
                    <Menu.Item name='Home' active={location.pathname === '/'} onClick={this.handleItemClick} />
                </NavLink>
                
                <NavLink to='/add' >
                    <Menu.Item name='New Question' active={location.pathname === '/new'} onClick={this.handleItemClick} />      
                </NavLink>
                <NavLink to='/leaderboard' >
                    <Menu.Item name='Leaderboard' active={location.pathname === '/leaderboard'} onClick={this.handleItemClick} />      
                </NavLink>
                    
            <Menu.Menu position='right'>
                <Menu.Item >{authedUser ? `Hello, ${authedUser.name}` : null}</Menu.Item>
                <Menu.Item />
                { authedUser
                ? 
                <Menu.Item name='Logout' onClick={this.logOut} />      
                : null
                }

            </Menu.Menu>
        </Container>
    </Menu> 
    )
    }
}

const mapStateToProps = ({authUser, users}) =>{
    const authedUser = users[authUser]
    return{
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav))