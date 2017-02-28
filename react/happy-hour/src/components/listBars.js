import React from 'react';
import Bar from './../containers/Bar';

const ListBars = function(props){
  const { bars } = props

  const Bars = bars.map((bar, index) => {
    return <Bar key={index} data={bar} />
  })

  const styles = {
    width: '90%'
  }

  return (
    <div style={styles}>
      {Bars}
    </div>
  )
}

export default ListBars;
