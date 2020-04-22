import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navBarWhite: {
        background: 'transparent',
        boxShadow: 'none',
        color: 'white',
        transition: 'background-color 0.5s',
    },
    navBarBlack: {
        backgroundColor: 'black',
        color: 'white',
        transition: 'background-color 0.5s',
        '& .active': {
            padddingBottom: '2.5px',
            borderBottom: '1.5px solid white',
        },
    },
    container: {
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        '& div': {
            margin: '0.5em',
            cursor: 'pointer',
            fontWeight: 500, 
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
            >
                {text}
            </Link>
        </div>
    );
};

const NavBar = () => {
    const { navBarWhite, navBarBlack, container } = useStyles();

    const isPortraitPhone = useMediaQuery('screen and (max-width: 623px)');

    const [className, setClassName] = useState(navBarWhite);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset < window.innerHeight - 50) {
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
        <AppBar className={className} position='fixed'>
            <Toolbar className={container} style={isPortraitPhone ? { justifyContent: 'center' } : {}}>
                <NavBarLink to='about-me' text='About Me' />
                <NavBarLink to='work-experience' text='Work Experience' />
                <NavBarLink to='projects' text='Projects' />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
