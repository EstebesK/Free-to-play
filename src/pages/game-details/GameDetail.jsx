import React from 'react'
import { useParams } from 'react-router';
import Loading from '../../components/loading/Loading';
import { gamesApi } from './../../api/api';
import './game-detail.scss';

const GameDetail = () => {

  const { id } = useParams();

  const [item, setItem] = React.useState()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const getDetail = async () => {
      setLoading(true)
      const data = await gamesApi.detail(id);
      setItem(data);
      window.scrollTo(0, 0);
      setLoading(false)
    }
    getDetail();
  }, [id]);

  return (
    <>
      {loading ? <Loading /> : item &&
        <div className='content'>
          <div className='container'>
            <div className='game-detail'>
              <div className="game-detail__thumbnail">
                <div className="game-detail__thumbnail__img" style={{ backgroundImage: `url(${item.thumbnail})` }} />
              </div>
              <div className='game-detail__info'>
                <h1 className='title'> {item.title}</h1>
                <div className='genres'>
                  {item.genre.split(' ').map((genre, i) => <span key={i} className='genres__item'>{genre}</span>)}
                </div>
                <p> {item.description}</p>
                <p> Platform: {item.platform}</p>
                <p> Developer: {item.developer}</p>
                <p> Release date: {item.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default GameDetail