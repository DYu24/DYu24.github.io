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
        background: 'transparent',
        boxShadow: 'none',
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
        window.scrollTo({
            top: element.offsetTop,
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
        const handleScroll = () => {
            if (window.pageYOffset < window.innerHeight - 25) {
                setClassName(navBarTransparent);
            } else {
                setClassName(navBarOpaque);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
