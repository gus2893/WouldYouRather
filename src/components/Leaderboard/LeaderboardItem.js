import React from 'react'
import { Divider, Grid, Image, Segment, Header, List, Icon, Label } from 'semantic-ui-react'

const LeaderboardItem = ({user, avatar, name, rank}) => (

  <Segment raised >
    <Grid columns={3} divided style={{padding: '15px 0 15px 0'}} >
      <Grid.Column width={4} >
            <Image src={avatar} circular/>
            <Icon name='trophy' color={rank}/>
      </Grid.Column>
      <Grid.Column width={8}>
            <Header>{name}</Header>
            <Divider horizontal><Header as='h6'>Breakdown</Header></Divider>
            <List divided>
                <List.Item>
                    <List.Content floated='right'>{user.questions}</List.Content>
                    <List.Content floated='left'>Answered Questions</List.Content>
                </List.Item> 
                <List.Item>
                    <List.Content floated='right'>{user.answers}</List.Content>
                    <List.Content floated='left'>Created Questions</List.Content>
                </List.Item>    
            </List>
      </Grid.Column>
      <Grid.Column width={4}>
            <Segment.Group>
                <Segment tertiary color='grey'>Score</Segment>
                <Segment>      
                    <Label circular color='green' size='huge'>{user.score}</Label>
                </Segment>
            </Segment.Group>
      </Grid.Column>
    </Grid>

  </Segment>
)
  export default LeaderboardItem