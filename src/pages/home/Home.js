import React from 'react'
import GamesGrid from '../../components/games-grid/GamesGrid';
import { gamesApi } from './../../api/api';

const Home = () => {

    const [games, setGames] = React.useState()

    const fetchTopGames = async () => {
        const data = await gamesApi.getSortedGamesList('popularity');
        setGames(data)
    };

    React.useEffect(() => {
        fetchTopGames()
    }, [])

    return (
        <div className='content'>
            <div className="container">
                <div className="section mb-3">
                    <h1>
                        Top Games
                    </h1>
                    <GamesGrid games={games} />
                </div>
            </div>
        </div>
    )
}

export default Home