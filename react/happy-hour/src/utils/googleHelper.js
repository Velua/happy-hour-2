import axios from 'axios';


const googleHelper = {

  GetGoogle(place_id) {
    const googleKey = 'AIzaSyBjP5nWZ5y6tn7kL_iOiIOlVhA7c07k9W8'
    return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${googleKey}`)
  },

  MultiGoogle(bars) {
    return axios.all(bars.map((bar) => {
      return googleHelper.GetGoogle(bar.google_id)
    }))
  },

}

export default googleHelper;
