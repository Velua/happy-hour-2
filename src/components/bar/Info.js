import React from 'react';
import Address from './Address';

const Info = props => {
  const { rating, address_components, deals, timeStart, timeEnd, url } = props.data

  return (
    <div>
     { rating } Stars
     <div> <a href={url} target="_blank" > {address_components && <Address data={address_components} />} </a> </div>
     <div> Happy hour starts at {timeStart} finishing at {timeEnd} </div>
     <div> {deals}</div>
    </div>
  )
}


export default Info;
