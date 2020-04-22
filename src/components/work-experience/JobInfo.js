import React, { useEffect, useState } from 'react';
import Img from 'react-image';
import { Fade, Chip, makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    jobInfoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1em',
    },
    jobInfoContent: {
        wordWrap: 'break-word',
        textAlign: 'justify',
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
        marginLeft: '5%',
        '& Img': {
            maxWidth: '600px',
            minWidth: '100px',
            width: '100%',
        },
    },
    chip: {
        margin: '0.2em',
        borderRadius: 5,
        fontFamily: 'Raleway',
    },
});

const usePhoneStyles = makeStyles({
    jobInfoContentMobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'justify',
    },
    jobInfoVisualMobile: {
        margin: '5%',
        width: '30vw',
        '& Img': {
            maxWidth: '600px',
            minWidth: '100px',
            width: '100%',
        },
    },
    jobInfoHeaderMobile: {
        textAlign: 'center',
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
    technologiesMobile: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
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

    const {
        jobInfoContainer,
        jobInfoContent,
        jobInfoVisual,
        chip,
    } = useStyles();

    const {
        jobInfoVisualMobile,
        jobInfoHeaderMobile,
        jobInfoContentMobile,
        technologiesMobile,
    } = usePhoneStyles();

    const isPortraitPhone = useMediaQuery('screen and (max-width: 623px)');

    const [displayJob, setDisplayJob] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if ((show && imageLoaded) || (show && isPortraitPhone)) {
            setTimeout(() => setDisplayJob(true), timeout);
        }
    }, [show, timeout, imageLoaded, isPortraitPhone]);

    const listTechnologies = (values) =>
        values.map((x) => (
            <Chip
                key={x}
                size='small'
                variant='outlined'
                label={x}
                color='primary'
                className={chip}
            />
        ));

    const handleOnLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Fade in={show && displayJob}>
            <div className={jobInfoContainer}>
                {!isPortraitPhone ? (
                    <>
                        <div className={jobInfoContent}>
                            <h2>{company}</h2>
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
                                <Img src={src} onLoad={handleOnLoad} />
                            </a>
                        </div>
                    </>
                ) : (
                    <div className={jobInfoContentMobile}>
                        <div className={jobInfoVisualMobile}>
                            <a
                                href={url}
                                title={url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Img src={src} onLoad={handleOnLoad} />
                            </a>
                        </div>
                        <div className={jobInfoHeaderMobile}>
                            <h2>{company}</h2>
                            <h3>{position}</h3>
                            <h5>{period}</h5>
                        </div>
                        <p>{description}</p>
                        <div className={technologiesMobile}>
                            {listTechnologies(technologies)}
                        </div>
                    </div>
                )}
            </div>
        </Fade>
    );
};

export default JobInfo;
