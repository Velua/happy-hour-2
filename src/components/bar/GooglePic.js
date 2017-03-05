import React from 'react';

const GooglePic = props => {
  const picID = props.picID;
  const googleKey = 'AIzaSyBjP5nWZ5y6tn7kL_iOiIOlVhA7c07k9W8'
  const maxwidth = '300'

  const request = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photoreference=${picID}&key=${googleKey}`

  return <img src={request} alt="this did come from axios"/>

}

export default GooglePic;
