import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameList.css';

const GameList = ({games}) => {
  return (
    <div>
      <ul className="game-list-container">
        {games.map(game => <li key={game.id} className="game-list-list-item"> <Game name={game.name}/> </li>)}
      </ul>
    </div>
  )
}
GameList.propTypes = {
  games: PropTypes.array.isRequired
}
export default GameList;
