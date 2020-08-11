import React from 'react';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

function DateFormatDistance(props) {
  return <>{formatDistance(props.created_at, new Date())}</>;
}

DateFormatDistance.propTypes = {
  created_at: PropTypes.number,
};
export default DateFormatDistance;
