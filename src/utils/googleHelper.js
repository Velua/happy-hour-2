import axios from 'axios';


const googleHelper = {

  GetGoogle(place_id) {
    const googleKey = 'AIzaSyBjP5nWZ5y6tn7kL_iOiIOlVhA7c07k9W8';
    return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${googleKey}`);
  },

  MultiGoogle(place_ids) {
    return axios.all(place_ids.map(place_id => googleHelper.GetGoogle(place_id)
    ))
  },

}

export default googleHelper;
