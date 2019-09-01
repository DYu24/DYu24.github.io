import React from 'react';
import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { ImageLoader } from '../common/ImageLoader';

import './AboutMe.css';

const education = [
    {
        school: 'Concordia University',
        program: 'Software Engineering (BEng.)',
        period: '2016-2020 (Expected)',
        img: require('../../resources/concordia-logo.jpg'),
        url: 'https://www.concordia.ca/',
    },
    {
        school: 'Marianopolis College',
        program: 'Pure & Applied Sciences (DEC)',
        period: '2014-2016',
        img: require('../../resources/Marianopolis.png'),
        url: 'http://www.marianopolis.edu/',
    },
];

export class AboutMe extends React.Component {
    listEducation = () =>
        education.map((x) => (
            <Grid item xs={6}>
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <a href={x.url} target='_blank' rel='noopener noreferrer'>
                        <CardMedia
                            style={{ height: '70px', width: '70px' }}
                            image={x.img}
                        />
                    </a>
                    <CardContent>
                        <h5>{x.school}</h5>
                        <div className='education-subcontents'>
                            {x.program}
                            <br />
                            <em>{x.period}</em>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        ));

    render() {
        return (
            <div className='about-me-container' id='about-me'>
                <h1>ABOUT ME</h1>
                <div className='underline' />
                <div className='content'>
                    <div className='profile-picture-container'>
                        <ImageLoader
                            style={{ height: '70vh' }}
                            src={require('../../resources/DSC_0376.jpg')}
                        />
                    </div>

                    <div className='description'>
                        <p>
                            I'm a fourth-year software engineering student at
                            Concordia University in Montreal, Canada. I first
                            got into programming when I joined the robotics team
                            at school and instantly fell in love with all the
                            creative possibilities that came with coding.
                        </p>
                        <p>
                            I find myself drawn to backend development as I'm
                            most intrigued by the architectural and algorithmic
                            challenges that come with it. I have experience
                            developing in several languages and frameworks (such
                            as TypeScript, Java and Python to name a few).
                        </p>
                        <p>
                            Outside of my life of software development, I also
                            love doing photography, travelling & exploring,
                            eating, and following the latest tech news.
                        </p>
                        <h3>Education</h3>
                        <Grid container spacing={3}>
                            {this.listEducation()}
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}
