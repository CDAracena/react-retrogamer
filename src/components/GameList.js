import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game'

const GameList = ({games}) => {
  return (
    <div>
      <ul>
        {games.map(game => <li key={game.id}> <Game name={game.name}/> </li>)}
      </ul>
    </div>
  )
}
GameList.propTypes = {
  games: PropTypes.array.isRequired
}
export default GameList;
