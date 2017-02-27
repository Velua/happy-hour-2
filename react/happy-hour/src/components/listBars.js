import React from 'react'

const ListBars = function(props){
  const { bars } = props

  const Bars = bars.map((bar, index) => {
    return <li key={index}>{bar.name}</li>
  })

  return (
    <ul>
      {Bars}
    </ul>
  )
}

export default ListBars;
