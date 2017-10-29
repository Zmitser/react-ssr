import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAdmins} from '../actions'
import {Header, List, Segment} from "semantic-ui-react";
import requireAuth  from '../components/hocs/requireAuth'

class AdminListPage extends Component {

    componentDidMount() {
        this.props.fetchAdmins()
    }

    renderAdmins() {
        return this.props.admins.map(({id, name}) => {
            return (
                <List.Item style={{ fontSize: '1.3em', fontWeight: 'normal' }} key={id}>
                    <List.Content>
                        <List.Header>{name}</List.Header>
                    </List.Content>
                </List.Item>
            )
        })
    }

    render() {
        return (
            <Segment inverted>
                <Header as='h1'>This is secure list of admins</Header>
                <List divided inverted relaxed>
                    {this.renderAdmins()}
                </List>
            </Segment>
        )
    }
}

function mapStateToProps({admins}) {
    return {admins}
}

export default {
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
    loadData: ({dispatch}) => dispatch(fetchAdmins())
}