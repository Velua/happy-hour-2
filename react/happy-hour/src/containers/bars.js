import React, { Component } from 'react';
import ListBars from './../components/ListBars';
import { fetchAllBars } from './../utils/bars';



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
    })

  }

  render(){

    return (
      <div style={styles}>Wrapper
        {this.state.isloading && <h1>Downloading bars! Hang on!</h1>}
        {!this.state.isloading && <ListBars deals={this.state.homebars} bars={this.state.bars}  />}
      </div>
    )
  }
}

export default Bars;
