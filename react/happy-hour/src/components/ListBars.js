import React from 'react';
import Bar from './../containers/Bar';

const ListBars = function(props){
  const { bars } = props


  const Bars = bars.map((bar, index) => {
    return <Bar deals={props.deals} key={index} data={bar} isLoading={props.isLoading} />
  })



  return (
    <div>
      {Bars}
    </div>
  )
}

export default ListBars;
