import React, { useState, useEffect } from 'react'
import { gamesApi } from '../../api/api';
import Game from './Games/Game';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Filters from './../Filters/Filters';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));


const GamesList = () => {

  const classes = useStyles();

  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const fetchGames = async () => {
    const data = await gamesApi.getGamesList();
    setGames(data)
  };

  const fetchSortedGames = async (sort) => {
    const data = await gamesApi.getSortedGamesList(sort);
    setGames(data)
  };
  const fetchSortedGamesListByAllFilters = async (platform, category, sort) => {
    const data = await gamesApi.getSortedGamesListByAllFilters(platform, category, sort);
    setGames(data)
  };
  const fetchGamesListByPlatform = async (platform) => {
    const data = await gamesApi.getGamesListByPlatform(platform);
    setGames(data)
  };
  const fetchGamesListByCategory = async (category) => {
    const data = await gamesApi.getGamesListByCategory(category);
    setGames(data)
  };

  useEffect(() => {
    fetchGames()
  }, [])

  useEffect(() => {
    if ((platform.length > 0 && sort.length === 0 && category.length === 0)) {
      fetchGamesListByPlatform(platform)
    } else if ((sort.length > 0 && platform.length === 0 && category.length === 0)) {
      fetchSortedGames(sort)
    } else if (category.length > 0 && platform.length === 0 && sort.length === 0) {
      fetchGamesListByCategory(category)
    } else if ((platform.length > 0 && category.length > 0) ||
      (sort.length > 0 && category.length > 0) || (platform.length > 0 && sort.length > 0)) {
      fetchSortedGamesListByAllFilters(platform, category, sort)
    }
  }, [platform, category, sort])

  if (!games.length) return <Grid container justifyContent='center' alignItems='center' style={{ paddingTop: '20px' }}><CircularProgress /></Grid>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Filters platform={platform} setPlatform={setPlatform} category={category}
        setCategory={setCategory} sort={sort} setSort={setSort} />
      <Grid container justify="center" spacing={4}>
        {games.map((game) => (
          <Grid key={game.id} item xs={12} sm={6} md={4} lg={3}>
            <Game game={game} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default GamesList
