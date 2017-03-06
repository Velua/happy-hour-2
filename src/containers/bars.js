import React, { Component } from 'react';
import { fetchAllBars } from './../utils/bars';
import Bar from './Bar';
import base from '../base';

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

  componentWillMount(){
    this.ref = base.syncState('bars'
    , {
      context: this,
      state: 'bars'
    })
  }

  componentDidMount(){
    base.listenTo('bars', {
      context: this,
      asArray: true,
      then(bars){
        fetchAllBars(bars)
        .then(bars => {
          this.setState({ mergedBars: bars, isLoading: false })
          console.log(this.state.mergedBars)
        })
      }
    })
}


  render(){

    return (
      <div>

        {!this.state.isLoading && this.state.mergedBars.map((bar, index) => {
          return <Bar deals={bar.deals} key={index} data={bar} />
        })}

      </div>
    )

  }
}

export default Bars;
