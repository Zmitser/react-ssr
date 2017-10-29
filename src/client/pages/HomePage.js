import React from 'react'
import {Button, Container, Header, Icon} from "semantic-ui-react";

const HomePage = () => {
    return (
        <Container text>
            <Header
                as='h1'
                content='Imagine-a-Company'
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
            />
            <Header
                as='h2'
                content='Do whatever you want when you want to.'
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
            </Button>
        </Container>
    )
};

export default {
    component: HomePage
};