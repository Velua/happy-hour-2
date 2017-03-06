import React, { Component } from 'react';
import BarCom from './../components/BarCom';

const styles = {
  width: '40%',
  boxSizing: 'border-box',
  textAlign: 'center',
  border: '1px solid black',
  float: 'left',
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  borderRadius: '25px',
  background: '#eee',
  padding: '20px'
}


class Bar extends Component {

  constructor(props){
    super(props)
    this.state = {
       bar: true,
       find: false,
       hours: false,
       isLoading: true,
       picture: 'https://i.stack.imgur.com/ozSKx.jpg'
     }
     this.handleClick = this.handleClick.bind(this);
    //  this.getGooglePic = this.getGooglePic.bind(this);

    console.log(this.props.data)
  }

  handleClick(data, e){
    e.preventDefault();
    this.setState(data);
  }




  getGooglePic(photo_ID){
    const googleKey = 'AIzaSyBjP5nWZ5y6tn7kL_iOiIOlVhA7c07k9W8'
    const maxwidth = '300'
    const request = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photoreference=${photo_ID}&key=${googleKey}`
    console.log('my request will be')
    console.log(request)
    // axios.get(request).then((obj) => {
    //   console.log('response')
    //   console.log(obj)
    //   this.setState({ picture: obj.request.responseURL })
    //   console.log(this.state.picture)
    // })
  }

  render() {

    // if (!this.props.isLoading && this.state.picture == 'https://i.stack.imgur.com/ozSKx.jpg'){
    //   this.getGooglePic(this.props.data.photos[0].photo_reference)
    // }
        return (
          <div style={styles}>
            {this.state.loading && <span>Loading...</span>}
            {!this.state.loading && <BarCom deals={this.props.deals} booly={this.state} pic={this.props.data.picture} onChange={this.handleClick}  data={this.props.data}/>}
          </div>
        )
       }
}


export default Bar;
