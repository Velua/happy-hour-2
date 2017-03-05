import React from 'react';


const Hours = props => {

  const hours_array = props.hours_array

  return (
    <div>
      { hours_array.map((hour, index) => (
        <div key={index}> {hour} </div>
        )
      )}
    </div>
   )
}

Hours.propTypes = {
  hours_array: React.PropTypes.array
};



export default Hours;
