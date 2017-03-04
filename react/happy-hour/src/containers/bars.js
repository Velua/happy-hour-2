import React, { Component } from 'react';
import { fetchAllBars } from './../utils/bars';
import Bar from './Bar';

const styles = {
  width: '90%',
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto'
}

class Bars extends Component {
  constructor(props){
    super(props);
    this.state = {
       bars: [],
       isLoading: true
     }
  }

  componentDidMount(){
    fetchAllBars('http://localhost:3001/bars')
    .then(bars => {
      this.setState({ bars: bars, isLoading: false })
    });
  }

  render(){

    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        {this.state.bars.map((bar, index) => {
          return <Bar deals={bar.deals} key={index} data={bar} />
        })}
      </div>
    )

  }
}

export default Bars;
