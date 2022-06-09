import React from 'react';
import './games-card.scss';
import { Link } from 'react-router-dom';


const GamesCard = ({ game }) => {

  const link = 'game/' + game.id;

  return (
    <Link to={link}>
      <div className='game-card'>
        <div className="game-image" style={{ backgroundImage: `url(${game.thumbnail})` }}>
        </div>
        <h3 className='title'><a href={game.freetogame_profile_url} className="">{game.title}</a></h3>
      </div>
    </Link>
  )
}

export default GamesCard;