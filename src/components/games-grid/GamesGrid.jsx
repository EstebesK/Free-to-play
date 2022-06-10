import React, { useState } from 'react';
import GamesCard from '../games-card/GamesCard';
import Loading from '../loading/Loading';
import { OutlineButton } from './../button/Button';
import './games-grid.scss';


const GamesGrid = ({ games }) => {

    const step = 9;

    const [loading, setLoading] = React.useState(false)

    const totalPage = Math.ceil(games?.lenght / step)
    const [page, setPage] = useState(1)

    const gamesPortion = games?.slice(0, page * step)

    const loadMore = async () => {
        setPage(page => page + 1)
    }

    return (
        <>
            <div className="section mb-3" />
            <div className="game-grid">
                {
                    loading ? <Loading /> : games && gamesPortion.map((game, i) => <GamesCard key={i} game={game} />)
                }
            </div>
            {page !== totalPage &&
                <div className='wrapper'>
                    <div className="games-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                </div>
            }

        </>
    );
}


export default GamesGrid;
