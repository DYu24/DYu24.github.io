import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
} from '@material-ui/core';

import './ProjectInfo.css';

export class ProjectInfo extends React.Component {
    openLink = () => {
        const { url } = this.props;
        window.open(url, '_blank');
    };

    listTechnologies = (values) =>
        values.map((x) => <Chip label={x} color='primary' className='chip' />);

    render() {
        const { img, title, description, technologies } = this.props;

        return (
            <Card raised={true}>
                <CardMedia style={{ height: '30vh' }} image={img} />
                <CardContent>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {this.listTechnologies(technologies)}
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        color='primary'
                        onClick={this.openLink}
                    >
                        SOURCE CODE
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
