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
        // <Slide appear={false} direction='down' in={!trigger}>
        //     {children}
        // </Slide>
        <div>
            {children}
        </div>
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
    render() {
        return (
            <HideOnScroll {...this.props}>
                <AppBar
                    style={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <Toolbar className='navbar-container'>
                        <NavBarButton to='#about-me' text='About Me' />
                        <NavBarButton to='#education' text='Education' />
                        <Button className='navbar-elements' color='inherit'>
                            Work Experience
                        </Button>
                        <Button className='navbar-elements' color='inherit'>
                            Projects
                        </Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }
}
