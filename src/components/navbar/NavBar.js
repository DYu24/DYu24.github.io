import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { AppBar, Button, Toolbar } from '@material-ui/core';

import './NavBar.css';

const styles = [
    {
        background: 'transparent',
        boxShadow: 'none',
        color: 'white',
        transition: 'background-color 0.2s',
    },
    {
        backgroundColor: 'white',
        color: 'black',
        transition: 'background-color 0.2s',
    },
];

const NavBarButton = (props) => {
    const { to, text } = props;

    const scrollToTargetAdjusted = (element) => {
        const offset = 50;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

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
        isTop: 0,
        style: window.scrollY < 50 ? styles[0] : styles[1],
    };

    componentDidMount() {
        window.onscroll = () => {
            const isTop = window.scrollY < 50;
            if (isTop) {
                this.setState({ style: styles[0] });
            } else {
                this.setState({ style: styles[1] });
            }
        };
    }

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
