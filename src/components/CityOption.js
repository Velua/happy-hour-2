import React from 'react';


const CityOption = props => {
  return (
    <div>
      <form onSubmit={props.onClick}>
        <input type="submit" value={props.name} className="btn btn-primary" />
      </form>
    </div>
  )
}

export default CityOption;
