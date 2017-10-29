import React from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/Header'
import  {fetchCurrentUser} from './actions'
import {Container} from 'semantic-ui-react'

const App = ({route}) => {
    return (
        <div>
            <Header/>
            <Container text>
                {renderRoutes(route.routes)}
            </Container>
        </div>
    )
};

export default {
    component: App,
    loadData: ({dispatch}) => dispatch(fetchCurrentUser())
}
