import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navBarWhite: {
        background: 'transparent',
        boxShadow: 'none',
        color: 'white',
        transition: 'background-color 0.5s',
    },
    navBarBlack: {
        background: 'transparent',
        boxShadow: 'none',
        color: 'black',
        transition: 'background-color 0.5s',
        '& .active': {
            color: theme.palette.primary.main,
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '1em',
        '& div': {
            marginBottom: '0.5em',
            cursor: 'pointer',
            fontSize: '1.2em',
            fontWeight: 600, 
        },
    },
}));

const NavBarLink = ({ to, text }) => {
    return (
        <div>
            <Link
                activeClass='active'
                to={to}
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                offset={10}
            >
                {text}
            </Link>
        </div>
    );
};

const NavBar = () => {
    const { navBarWhite, navBarBlack, container } = useStyles();
    const [className, setClassName] = useState(navBarWhite);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset < window.innerHeight - 25) {
                setClassName(navBarWhite);
            } else {
                setClassName(navBarBlack);
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
                <NavBarLink to='about-me' text='About Me' />
                <NavBarLink to='work-experience' text='Work Experience' />
                <NavBarLink to='projects' text='Projects' />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
