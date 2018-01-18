import React from 'react';

const NavBar = ({clickEvent}) => {
  return (
    <div>
      <nav className="bt bb tc mw7 center mt4" >
        <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" value="films" onClick={clickEvent} >Films</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" value="people" onClick={clickEvent} >People</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" value="species" onClick={clickEvent} >Species</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" value="planets" onClick={clickEvent} >Planets</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" value="starships" onClick={clickEvent} >Starships</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" value="vehicles" onClick={clickEvent} >Vehicles</a>
      </nav>
    </div>
  );
}

export default NavBar;
