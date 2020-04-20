import React, { useEffect, useState } from 'react';
import Img from 'react-image';
import { Fade, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    jobInfoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60vw',
    },
    jobInfoContent: {
        flexBasis: '65%',
        wordWrap: 'break-word',
        textAlign: 'justify',
        fontSize: '2.5vh',
        '& h2 a': {
            color: 'inherit',
            textDecoration: 'none',
        },
        '& h3': {
            marginTop: '-1em',
        },
        '& h5': {
            marginTop: '-1em',
            color: '#a5a5a5',
        },
    },
    jobInfoVisual: {
        '& Img': {
            maxHeight: '200px',
            maxWidth: '200px',
        }
    },
    chip: {
        margin: '0.2em',
    },
});

const JobInfo = ({ job, show, timeout }) => {
    const {
        company,
        position,
        period,
        src,
        description,
        url,
        technologies,
    } = job;

    const { jobInfoContainer, jobInfoContent, jobInfoVisual, chip } = useStyles();

    const [displayJob, setDisplayJob] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (show && imageLoaded) {
            setTimeout(() => setDisplayJob(true), timeout);
        }
    }, [show, timeout, imageLoaded]);

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

    const handleOnLoad = () => {
        setImageLoaded(true);
    }

    return (
        <Fade in={show && displayJob}>
            <div className={jobInfoContainer}>
                <div className={jobInfoContent}>
                    <h2>
                        <a
                            href={url}
                            title={url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {company}
                        </a>
                    </h2>
                    <h3>{position}</h3>
                    <h5>{period}</h5>
                    <p>{description}</p>
                    {listTechnologies(technologies)}
                </div>
                <div className={jobInfoVisual}>
                    <a
                        href={url}
                        title={url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            src={src}
                            onLoad={handleOnLoad}
                        />
                    </a>
                </div>
            </div>
        </Fade>
    );
};

export default JobInfo;
