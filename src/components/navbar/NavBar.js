import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    AppBar,
    Button,
    Toolbar,
} from '@material-ui/core';

import './NavBar.css';


const NavBarButton = (props) => {
    const { to, text } = props;

    const scrollToTargetAdjusted = (element) => {
        const offset = 50;
        const elementPosition = element.offsetTop;
        console.log(elementPosition);
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }

    return (
        <Button
            className='navBar-elements'
            color='inherit'
            component={HashLink}
            to={to}
            scroll={scrollToTargetAdjusted}
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
            <AppBar style={style}>
                <Toolbar className='navbar-container'>
                    <NavBarButton to='#about-me' text='About Me' />
                    <NavBarButton
                        to='#work-experience'
                        text='Work Experience'
                    />
                    <NavBarButton to='#projects' text='Projects' />
                </Toolbar>
            </AppBar>
        );
    }
}
