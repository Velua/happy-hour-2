import React from 'react';
import Bar from './../containers/Bar';

const ListBars = function(props){
  const { bars } = props


  const Bars = bars.map((bar, index) => {
    return <Bar deals={props.deals} key={index} data={bar} isLoading={props.isLoading} />
  })

  const styles = {
    width: '100%',

  }

  return (
    <div style={styles}>
      {Bars}
    </div>
  )
}

export default ListBars;
