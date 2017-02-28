import React, { Component } from 'react';
import ListBars from './../components/ListBars';
import axios from 'axios';
import googleHelper from './../utils/googleHelper';


const styles = {
  width: '90%',
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto'
}

class Bars extends Component {
  constructor(props){
    super(props);
    this.state = { bars: []}
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/bars`)
      .then(res => {
        const bars = res.data.map((obj) => obj);
        this.setState({ 'bars': bars })
      }).then(() => {
        googleHelper.MultiGoogle(this.state.bars)
        .then(res => {
          const data = res.map((obj) => {
            return obj.data.result
          })
          console.log(data)
          this.setState({ 'bars': data })
        })})

  }

  render(){
    return (
      <div style={styles}>
        <ListBars bars={this.state.bars} />
      </div>
    )
  }
}

export default Bars;
