import React from 'react'
import GamesGrid from '../../components/games-grid/GamesGrid';
import { gamesApi } from './../../api/api';

const Home = () => {

    const [games, setGames] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const fetchTopGames = async () => {
        setLoading(true)
        const data = await gamesApi.getSortedGamesList('popularity');
        setGames(data)
        setLoading(false)
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
                    <GamesGrid games={games} loading={loading} />
                </div>
            </div>
        </div>
    )
}

export default Home