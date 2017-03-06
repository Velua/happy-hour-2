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
       bars: []
     }
     this.wtf = this.wtf.bind(this);
  }


  componentWillMount(){
    this.ref = base.syncState('bars'
    , {
      context: this,
      state: 'bars',
      then: this.wtf()
    })
  }


  wtf(){
    console.log('wtf has run')
    console.log(this.state.bars)
    if (this.state.bars.length > 0) {
      alert('Holy shit it worked.')
    } else {
      console.log('Still got nothing')
    }
  }

  // shouldComponentUpdate(){
  //   console.log('this is better')
  //
  //   if (this.state.bars.length > 0){
  //     console.log('if thing ran')
  //     fetchAllBars('http://localhost:3001/bars')
  //     .then(bars => {
  //       this.setState({ mergedBars: bars, isLoading: false })
  //     });
  //     console.log(this.state.mergedBars)
  //     return true
  //   } else {
  //     console.log('something screwed up')
  //   }
  //   return true
  // }

  onChange(e){
    this.setState({ bars: [ {
    "deals" : "$4 shots",
    "name" : "Montys Bar",
    "place_id" : "ChIJZyorLT5D1moREoIW_ombT84",
    "timeStart" : "6pm",
    "timeEnd" : "7pm"
  } ] })
  }

  render(){

    console.log(this.state.bars);
    console.log(this.state.mergedBars);


    return (
      <div>
        <input type="text" onChange={(e) => this.onChange(e)} />

      </div>
    )

  }
}

export default Bars;
