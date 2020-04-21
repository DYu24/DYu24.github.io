import React, { useEffect, useState } from 'react';
import Img from 'react-image';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Fade,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectInfoContainer: {
        position: 'relative',
    },
    projectInfoCard: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '25vw',
        '& h2': {
            fontSize: '1.5vw',
        },
    },
    projectInfoHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    projectInfoLogo: {
        height: 60,
        position: 'absolute',
        top: '0.5em',
        right: '0.5em',
    },
    projectInfoLinks: {
        marginTop: '-1em',
        marginLeft: '5px',
    },
    chip: {
        margin: '0.1em',
        borderRadius: 5,
    },
}));

const ProjectInfo = ({ project, show, timeout }) => {
    const { img, title, description, technologies, url, devpost } = project;

    const [displayProject, setDisplayProject] = useState(false);

    useEffect(() => {
        if (show) {
            setTimeout(() => setDisplayProject(true), timeout);
        }
    }, [show, timeout]);

    const {
        chip,
        projectInfoContainer,
        projectInfoHeader,
        projectInfoLogo,
        projectInfoCard,
        projectInfoLinks,
    } = useStyles();

    const openLink = (link) => {
        window.open(link, '_blank');
    };

    const listTechnologies = (values) =>
        values.map((x) => (
            <Chip
                size='small'
                variant='outlined'
                label={x}
                color='primary'
                className={chip}
            />
        ));

    return (
        <Fade in={displayProject}>
            <div className={projectInfoContainer}>
                <Card className={projectInfoCard}>
                    <CardContent>
                        <div className={projectInfoHeader}>
                            <h2>{title}</h2>
                            <Img className={projectInfoLogo} src={img} />
                        </div>
                        <p>{description}</p>
                        {listTechnologies(technologies)}
                    </CardContent>
                    <CardActions className={projectInfoLinks}>
                        <Button
                            size='small'
                            color='primary'
                            onClick={() => openLink(url)}
                        >
                            GITHUB
                        </Button>
                        {devpost && (
                            <Button
                                size='small'
                                color='primary'
                                onClick={() => openLink(devpost)}
                            >
                                DEVPOST
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </div>
        </Fade>
    );
};

export default ProjectInfo;
