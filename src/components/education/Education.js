import React from 'react';
import {
    Avatar,
    Card,
    CardActionArea,
    CardHeader,
    CardContent,
    CardMedia,
    Grid,
} from '@material-ui/core';

import './Education.css';

export class Education extends React.Component {
    render() {
        return (
            <div className='education-container' id='education'>
                <div className='education-header'>
                    <h1>Education</h1>
                </div>
                <div className='education-grid'>
                    <Grid container spacing={10}>
                        <Grid item xs className='education-pane'>
                            <Card>
                                <CardActionArea>
                                    <CardHeader
                                        title='Concordia University'
                                        subheader='2016-2020 (Expected)'
                                        avatar={
                                            <Avatar
                                                src={require('../../resources/concordia-logo.jpg')}
                                            />
                                        }
                                    />
                                </CardActionArea>
                                <CardMedia
                                    style={{ height: '40vh' }}
                                    image={require('../../resources/concordia-ceremony.jpg')}
                                    title='Concordia Photo'
                                />
                                <CardContent>
                                    <ul>
                                        <li>
                                            I was the youngest pilot in Pan Am
                                            history. When I was four, the pilot
                                            let me ride in the cockpit and fly
                                            the plane with him. And I was four,
                                            and I was great and I would have
                                            landed it, but my dad wanted us to
                                            go back to our seats.
                                        </li>
                                        <li>
                                            Oscar visited Mexico when he was
                                            five to attend his
                                            great-grandmothers funeral. What
                                            does that mean to the United States
                                            law enforcement officer? He's a
                                            potential drug mule.
                                        </li>
                                        <li>
                                            I come from a long line of fighters,
                                            my maternal grandfather was the
                                            toughest guy I ever knew. World War
                                            II veteran. He killed twenty men and
                                            then spent the rest of the war in an
                                            Allied prison camp... My father
                                            battled blood pressure and obesity
                                            all his life... different kind of
                                            fight.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs className='education-pane'>
                            <Card>
                                <CardActionArea>
                                    <CardHeader
                                        title='Marianopolis College'
                                        subheader='2014-2016'
                                        avatar={
                                            <Avatar
                                                src={require('../../resources/Marianopolis.png')}
                                            />
                                        }
                                    />
                                </CardActionArea>
                                <CardMedia
                                    style={{ height: '40vh' }}
                                    image={require('../../resources/mari-grad.jpg')}
                                    title='Marianopolis Photo'
                                />
                                <CardContent>
                                    <ul>
                                        <li>
                                            Look, just because I don't be givin'
                                            no man a foot massage don't make it
                                            right for Marsellus to throw Antwone
                                            into a glass motherfuckin' house,
                                            fuckin' up the way the nigger talks.
                                            Motherfucker do that shit to me, he
                                            better paralyze my ass, 'cause I'll
                                            kill the motherfucker, know what I'm
                                            sayin'?
                                        </li>
                                        <li>
                                            Normally, both your asses would be
                                            dead as fucking fried chicken, but
                                            you happen to pull this shit while
                                            I'm in a transitional period so I
                                            don't wanna kill you, I wanna help
                                            you. But I can't give you this case,
                                            it don't belong to me. Besides, I've
                                            already been through too much shit
                                            this morning over this case to hand
                                            it over to your dumb ass.
                                        </li>
                                        <li>
                                            Well, the way they make shows is,
                                            they make one show. That show's
                                            called a pilot. Then they show that
                                            show to the people who make shows,
                                            and on the strength of that one show
                                            they decide if they're going to make
                                            more shows. Some pilots get picked
                                            and become television programs. Some
                                            don't, become nothing. She starred
                                            in one of the ones that became
                                            nothing.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
