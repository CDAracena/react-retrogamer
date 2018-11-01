import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game'

const GameList = ({games}) => {
  return (
    <div>
      {games.length};
    </div>
  )
}
GameList.propTypes = {
  games: PropTypes.array.isRequired
}
export default GameList;
