import React from 'react';


const Hours = props => {

  const { vicinity } = props.data
  const hours_v = props.data.opening_hours.weekday_text

  const hours = hours => {
    return hours.map((hour, index) => (
      <div key={index}> {hour} </div>
    ))
  }

  return (
    <div>
      {hours(hours_v)}
    </div>
  )
}


export default Hours;
