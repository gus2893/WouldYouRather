import React from 'react'
import { Segment, Label, Grid, Image,Header, Form, Radio,Button , Message} from 'semantic-ui-react'
import { saveAnswer } from '../../actions/questions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Unanswered extends React.Component {
    state={
        value:'',
        showError: false
    }
    handleChange = (e, { value }) => this.setState({ value })

    submitAnswer = () =>{
        if(this.state.value === ''){
            return this.setState({showError: true})
        }
        this.props.dispatch(saveAnswer({
            authedUser: this.props.authUser, 
            qid: this.props.q.id, 
            answer: this.state.value
        }))
    }

    render(){
        const { author, q } = this.props
        const { value, showError } = this.state
        return(
            <Segment>
                <Label attached='top' >{author.name} Asks: </Label> 
                <Grid columns={2} textAlign='left'>
                    <Grid.Column width={6}>
                        <Image src={author.avatarURL} circular/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header as='h1' textAlign='left'>Would You Rather...</Header> 
                            <Form error={showError}>
                                <Form.Field>
                                <Radio
                                    label={q.optionOne.text}
                                    name='radioGroup'
                                    value='optionOne'
                                    checked={value === 'optionOne'}
                                    onChange={this.handleChange}
                                />
                                </Form.Field>
                                <Form.Field>
                                <Radio
                                    label={q.optionTwo.text}
                                    name='radioGroup'
                                    value='optionTwo'
                                    checked={this.state.value === 'optionTwo'}
                                    onChange={this.handleChange}
                                />
                                </Form.Field>
                                <Message
                                    
                                    error
                                    header='Must choose one'
                                    content='You must select one of the two options'
                                />
                            </Form>

                            <Button 
                                fluid 
                                inverted 
                                color='green' 
                                style={{marginTop: '4px'}}
                                onClick={this.submitAnswer}
                                >
                                    Submit
                            </Button> 
                    </Grid.Column>  
                </Grid>
            </Segment>
        )
    }
}

const mapStateToProps = ({authUser}) =>{
    return{
        authUser
    }
}

export default withRouter(connect(mapStateToProps)(Unanswered))