import React, { Component } from 'react';
import BarCom from './../components/BarCom';


const styles = {
  width: '40%',
  textAlign: 'center',
  border: '1px solid black',
  float: 'left',
  marginLeft: 'auto',
  marginRight: '5%'
}


class Bar extends Component {

  constructor(props){
    super(props)
    this.state = {
       bar: true,
       find: false,
       hours: false
     }
     this.handleClick = this.handleClick.bind(this);
     this.styles = this.styles.bind(this);

  }

  handleClick(data, e){
    e.preventDefault();
    this.setState(data);
  }

  styles() {
    return {
      width: '49%',
      textAlign: 'left',
      border: '1px solid black',
      float: 'left',
      backgroundColor: 'grey'
      }
  }

  render() {
        return (
          <div style={styles}>
            <BarCom booly={this.state} onChange={this.handleClick} data={this.props.data}/>
          </div>
        )
       }
}


export default Bar;
