import React from 'react';

const System = ({systemName, systemImg, match}) => (<div className="container">
  <div className="row">
    <div className="col-lg-12 systemHeader">
      {systemName}
      <div className="col-lg-12 systemImg">
        <img src={'https:' + systemImg} alt={systemName}/> {match.params.systemId}
      </div>
    </div>

  </div>
  <div className="row">
    <div className="col-lg-4">
      <ul></ul>
    </div>
  </div>
</div>)

export default System;
