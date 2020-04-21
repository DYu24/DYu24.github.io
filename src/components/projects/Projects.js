import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Grid, makeStyles } from '@material-ui/core';
import ProjectInfo from './ProjectInfo';
import projects from './ProjectList';

const useStyles = makeStyles({
    projectsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        marginTop: '5em',
        paddingBottom: '3em',
    },
    projectsContent: {
        maxWidth: '80vw',
        marginTop: '2em',
    },
});

const Projects = () => {
    const { projectsContainer, projectsContent } = useStyles();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const onProjectsEnter = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (position > 3.25 * windowHeight) {
                setShow(true);
            }
        };

        window.addEventListener('scroll', onProjectsEnter);

        return () => {
            window.removeEventListener('scroll', onProjectsEnter);
        };
    });

    const listProjects = () => {
        let timeout = 0;
        return projects.map((project) => {
            const element = (<Grid item xs={4}><ProjectInfo project={project} show={show} timeout={timeout} /></Grid>)
            timeout += 500;
            return element;
        })
    };

    return (
        <div className={projectsContainer} id='projects'>
            <h1>PROJECTS</h1>
            <Parallax x={['-75%', '25%']}>
                <div className='underline' />
            </Parallax>
            <div className={projectsContent}>
                <Grid container spacing={3}>
                    {listProjects()}
                </Grid>
            </div>
        </div>
    );
};

export default Projects;
