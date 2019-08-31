import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from '@material-ui/core';

import './ProjectInfo.css';

export class ProjectInfo extends React.Component {
    openLink = () => {
        const { url } = this.props;
        window.open(url, '_blank');
    }

    render() {
        const { img, title, description } = this.props;

        return (
            <Card>
                <CardMedia
                    style={{ height: '30vh' }}
                    image={img}
                />
                <CardContent>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' onClick={this.openLink} >
                        SOURCE CODE
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
