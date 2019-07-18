import React from 'react';
import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}

export class NavBar extends React.Component {
    render() {
        return (
            <HideOnScroll {...this.props}>
                <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Toolbar>Scroll to Hide App Bar</Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }
}
