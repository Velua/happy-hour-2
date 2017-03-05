import React, { Component } from 'react';
import City from './../components/CityOption';


const styles = {
  textAlign: 'center',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto'
}


class PickCity extends Component {

  selectCity(e){
    e.preventDefault();
    this.context.router.transitionTo(`/melbourne`);
  }

  render(){
    return (
      <div style={styles}>
          <div className="jumbotron">
            <h1>Happy Hour!</h1>
            <p>Find which bars in your city have the best happy hour deals.</p>
            <p>Developed by <a href="http://jjs.life" target="_blank">John Williamson.</a></p>
            </div>
            <City name="Melbourne" thumbnail="https://media-cdn.tripadvisor.com/media/photo-s/05/20/5a/61/yarra-river.jpg" destination="/melbourne" onClick={(e) => this.selectCity(e)}/>

      </div>
    )
  }
}

PickCity.contextTypes = {
  router: React.PropTypes.object
}

export default PickCity;
