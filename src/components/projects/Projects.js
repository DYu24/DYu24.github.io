import React from 'react';
import { Grid } from '@material-ui/core';
import { ProjectInfo } from './ProjectInfo';

import './Projects.css';

const projects = [
    {
        img: require('../../images/rudating.png'),
        title: 'RUDating',
        url: 'https://github.com/DYu24/rudating',
        description: `A speed dating web application where users have 2 minutes to converse, after which 
        they can decide whether or not they'd like to exchange contact information to keep talking. 
        This web application makes use of a chatroom that was built from scratch using WebSockets, 
        and also uses Google's Cloud Natural Language to calculate the "chemistry" between the two 
        users during the conversation.`,
    },
    {
        img: require('../../images/TapOfWarLogo.png'),
        title: 'Tap of War',
        url: 'https://github.com/DYu24/tap-of-war',
        description: `A tug-of-war inspired game where users on opposing teams continuously tap to 
        dominate Nanoleaf light panels with their team's color. Whoever registers the most amount of 
        taps wins the game.`,
    },
    {
        img: require('../../images/caption-this-logo.png'),
        title: 'CaptionThis',
        url: 'https://github.com/DYu24/CaptionThis',
        description: `A website that allows users to post their own pictures and let the community come up 
        with fun and interesting captions. In addition to uploading photos and submitting captions, 
        users can also interact with these posts by voting on their favourite captions.`,
    },
    {
        img: require('../../images/chefpic-logo.png'),
        title: 'ChefPic',
        url: 'https://github.com/DYu24/ChefPic',
        description: `Android application that allows a user to take a picture of an unknown dish and 
        returns the name of that dish, as well as a recipe for how to prepare it.`,
    },
];

export class Projects extends React.Component {
    listProjects = () => {
        let projectList = [];

        projects.forEach((project) => {
            projectList.push(
                <Grid item xs={4}>
                    <ProjectInfo
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        url={project.url}
                    />
                </Grid>,
            );
        });

        return projectList;
    };

    render() {
        return (
            <div className='projects-container' id='projects'>
                <h1>PROJECTS</h1>
                <div className='underline'></div> 
                <div className='projects-contents'>
                    <Grid container spacing={5}>
                        {this.listProjects()}
                    </Grid>
                </div>
            </div>
        );
    }
}
