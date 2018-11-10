import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';
const Game = ({
  name,
  img,
  screenshots,
  category,
  publishers,
  summary,
  rating
}) => (<div className="game-card-container">
  <div className="row game-card-row">
    <div className="img-section col-lg-6">
      <div className="row">
        <div className="main-game-img col-lg-12" style={{
            background: `url(https:${img})`,
            backgroundSize: 'cover',
            height: '300px',
            width: '250px'
          }}></div>
        <div className="game-screenshots col-lg-12">
          {screenshots ? screenshots.slice(0,4).map(screenshot => <img key={screenshot.cloudinary_id} src={`https:${screenshot.url.replace('thumb', '720p')}`} className="screenshot-img"/>) : 'No screenshots available'}
        </div>
      </div>
    </div>
    <div className="game-info-col col-lg-6">
      <div className="row">
        <div className="col-lg-8 game-title">
          {name}
        </div>
        <div className="col-lg-4 game-rating">
          {Math.round(rating)}/100
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 game-summary">
          <p>
            {summary}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>)
export default Game;
