import React from 'react';

const Address = props => {
  const addresses = props.data
    return (
      <div>
        {addresses[0].short_name}{addresses.length === 8 ? '/' : ' '}{addresses[1].short_name}, {addresses[2].short_name} {addresses[3].short_name !== addresses[2].short_name && addresses[3].short_name}
      </div>)
}

Address.propTypes = {
  data: React.PropTypes.array
};

export default Address;
