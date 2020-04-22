import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { makeStyles } from '@material-ui/core';
import ProjectInfo from './ProjectInfo';
import projects from './ProjectList';

const useStyles = makeStyles({
    projectsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        height: '100%',
        padding: '3em 0 5em 0',
    },
    projectsContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
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

            if (position > 3 * windowHeight) {
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
            const element = (
                <ProjectInfo key={project.title} project={project} show={show} timeout={timeout} />
            );
            timeout += 250;
            return element;
        });
    };

    return (
        <div className={projectsContainer} id='projects'>
            <h1>PROJECTS</h1>
            <Parallax x={['-75%', '25%']}>
                <div className='underline' />
            </Parallax>
            <div className={projectsContent}>
                {listProjects()}
            </div>
        </div>
    );
};

export default Projects;
