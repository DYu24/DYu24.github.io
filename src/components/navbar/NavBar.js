import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    AppBar,
    Button,
    Slide,
    Toolbar,
    useScrollTrigger,
} from '@material-ui/core';

import './NavBar.css';

const HideOnScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
};

const NavBarButton = (props) => {
    const { to, text } = props;

    return (
        <Button
            className='navBar-elements'
            color='inherit'
            component={HashLink}
            to={to}
            smooth
        >
            {text}
        </Button>
    );
};

export class NavBar extends React.Component {
    state = {
        style: {
            backgroundColor: 'white',
            color: 'black',
        },
    };

    render() {
        const { style } = this.state;
        return (
            <HideOnScroll {...this.props}>
                <AppBar style={style}>
                    <Toolbar className='navbar-container'>
                        <NavBarButton to='#about-me' text='About Me' />
                        <NavBarButton to='#work-experience' text='Work Experience' />
                        <NavBarButton to='#projects' text='Projects' />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }
}
