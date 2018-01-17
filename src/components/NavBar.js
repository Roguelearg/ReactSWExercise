import React from 'react';

const NavBar = ({clickEvent}) => {
  return (
    <div>
      <nav className="bt bb tc mw7 center mt4" onClick={clickEvent}>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" value="films" href="/">Films</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" value="people" href="/">People</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" value="species" href="/">Species</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" value="planets" href="/">Planets</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" value="starships" href="/">Starships</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" value="vehicles" href="/">Vehicles</a>
      </nav>
    </div>
  );
}

export default NavBar;
