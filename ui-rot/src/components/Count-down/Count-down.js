import React from 'react';
import PropTypes from 'prop-types';

import { differenceInCalendarDays } from 'date-fns';

import './Count-down.scss';

function CountDown({ closingDate }) {
  const days = differenceInCalendarDays(new Date(closingDate), new Date());
  return (
    <div className="count-down" data-testid="countdown">
      <div className="count-down__left">closing in</div>
      <div className="count-down__right">
        <span className="count-down__number">{days}</span> days
      </div>
    </div>
  );
}

CountDown.propTypes = {
  closingDate: PropTypes.number,
};

export default CountDown;
