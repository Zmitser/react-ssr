import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/index'
import {Helmet} from 'react-helmet'

class UserListPage extends Component {

    componentWillMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head(){
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users List"/>
            </Helmet>
        )
    }


    render() {
        return (
            <div>
                {this.head()}
                <h3>This is a big list of users!!!</h3>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {users}
}

function loadData(store) {
   return store.dispatch(fetchUsers())
}


export default {
    loadData,
    component: connect(mapStateToProps, {fetchUsers})(UserListPage)
}