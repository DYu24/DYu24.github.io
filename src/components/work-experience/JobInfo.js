import React from 'react';
import Img from 'react-image';

import './JobInfo.css';
import { ImageLoader } from '../common/ImageLoader';

export class JobInfo extends React.Component {
    render() {
        const { company, position, src } = this.props;

        return (
            <div className='job-info-container'>
                <div className='job-info-content'>
                    <h1>{company}</h1>
                    <h2>{position}</h2>
                    <p>
                        My money's in that office, right? If she start giving me
                        some bullshit about it ain't there, and we got to go
                        someplace else and get it, I'm gonna shoot you in the
                        head then and there. Then I'm gonna shoot that bitch in
                        the kneecaps, find out where my goddamn money is. She
                        gonna tell me too. Hey, look at me when I'm talking to
                        you, motherfucker. You listen: we go in there, and that
                        nigga Winston or anybody else is in there, you the first
                        motherfucker to get shot. You understand?
                    </p>
                </div>
                <div className='job-info-visual'>
                    <ImageLoader style={{ maxHeight: '150px', maxWidth: '150px' }} src={src} />
                </div>
            </div>
        );
    }
}
