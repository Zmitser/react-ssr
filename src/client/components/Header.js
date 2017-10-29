import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { Menu } from 'semantic-ui-react'

const Header  = ({auth}) => {
    const authButton = auth
         ? <Menu.Item as='a' href="/api/logout">Logout</Menu.Item>
         : <Menu.Item as='a' href="/api/auth/google">Login</Menu.Item>;
    return (
        <Menu inverted style={{ fontSize: '1.3em', fontWeight: 'normal' }}>
            <Menu.Item as={NavLink} exact   to='/' activeClassName="active">React SSR</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as={NavLink}  to='/users' activeClassName="active">Users</Menu.Item>
                <Menu.Item as={NavLink}  to='/admins' activeClassName="active">Admins</Menu.Item>
                {authButton}
            </Menu.Menu>
        </Menu>
    )
};

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps, null, null, {
    pure: false
})(Header)