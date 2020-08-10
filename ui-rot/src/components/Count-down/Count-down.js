import React from 'react';

import './Count-down.scss';

function CountDown() {
  return (
    <div className="count-down">
      <div className="count-down__left">closing in</div>
      <div className="count-down__right">
        <span className="count-down__number">22</span> days
      </div>
    </div>
  );
}

export default CountDown;
