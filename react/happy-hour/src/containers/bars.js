import React, { Component } from 'react';
import ListBars from './../components/ListBars';
import axios from 'axios';
import GetGoogle from './../utils/googleHelper';

class Bars extends Component {
  constructor(props){
    super(props);
    this.state = { bars: []}
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/bars`)
      .then(res => {
        const bars = res.data.map((obj) => obj);
        console.log(bars)
        this.setState({ 'bars': bars })
      })
    const x = GetGoogle('ChIJQTbROE5d1moR3mLmtFMXdus')
    console.log(x)

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
