import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { AppBar, Button, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    navBarTransparent: {
        background: 'transparent',
        boxShadow: 'none',
        color: 'white',
        transition: 'background-color 0.3s',
    },
    navBarOpaque: {
        backgroundColor: 'white',
        color: 'black',
        transition: 'background-color 0.3s',
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

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

const NavBar = () => {
    const { navBarTransparent, navBarOpaque, container } = useStyles();
    const [className, setClassName] = useState(navBarTransparent);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY < window.innerHeight - 50) {
                setClassName(navBarTransparent);
            } else {
                setClassName(navBarOpaque);
            }
        };
    });

    return (
        <AppBar className={className}>
            <Toolbar className={container}>
                <NavBarButton to='#about-me' text='About Me' />
                <NavBarButton to='#work-experience' text='Work Experience' />
                <NavBarButton to='#projects' text='Projects' />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
