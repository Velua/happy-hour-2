import React from 'react';
import Address from './Address';

const Info = props => {
  const { name, rating, address_components} = props.data
  console.log(props.data)
  console.log('heeeere')
  console.log(props.deals)
  console.log('end')
  return (
    <div>
     { rating } Stars
      <div> {address_components && <Address data={address_components} />} </div>
    </div>
  )
}


export default Info;
