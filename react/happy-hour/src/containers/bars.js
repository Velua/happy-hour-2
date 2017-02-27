import React, { Component } from 'react';
import ListBars from './../components/listBars'



class Bars extends Component {
  constructor(props){
    super(props);
    this.state = { bars: [
      {name: 'Wooly Mammoth'},
      {name: 'RGS'}
    ]}
  }

  render(){
    return (
      <div> Class system works
        <ListBars bars={this.state.bars} />
      </div>
    )
  }
}

export default Bars;
