import React, { Suspense } from 'react';
import {
  Route, Routes
} from "react-router-dom";
import './App.scss';
// import GameDetail from ;
// import Home from ;
import MainLayout from './pages/MainLayout';

const App = () => {

  const Home = React.lazy(() => import('./pages/home/Home'));
  const GameDetail = React.lazy(() => import('./pages/game-details/GameDetail'));

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>} />
        <Route
          path="game/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <GameDetail />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
