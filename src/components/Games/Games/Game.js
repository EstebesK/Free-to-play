import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Game = ({ game }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="thumbnail"
                    image={game.thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {game.title}
                    </Typography>
                    <Typography variant='body2'>
                        Platform: {game.platform}
                    </Typography>
                    <Typography variant='body2'>
                        Category: {game.genre}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Game
