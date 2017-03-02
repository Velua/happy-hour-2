import React from 'react';
import Address from './Address';

const Info = props => {
  const { rating, address_components, deals, timeStart, timeEnd} = props.data

  return (
    <div>
     { rating } Stars
     <div> Happy hour starts at {timeStart} finishing at {timeEnd} </div>
     <div> {deals}</div>
      <div> {address_components && <Address data={address_components} />} </div>
    </div>
  )
}


export default Info;
