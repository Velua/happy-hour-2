import React from 'react';
import axios from 'axios';

const GooglePic = props => {
  const photo_ID = props.photo_id;
  const googleKey = 'AIzaSyBjP5nWZ5y6tn7kL_iOiIOlVhA7c07k9W8'
  const maxwidth = '300'

  const request = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photoreference=${photo_ID}&key=${googleKey}`
  console.log(request)

  axios.get(request).then((obj) => {
    console.log(obj)
    props.onFinish();
    return <img src={obj} alt="this did come from axios"/>
  })

  return <span>hi</span>

}

export default GooglePic;
