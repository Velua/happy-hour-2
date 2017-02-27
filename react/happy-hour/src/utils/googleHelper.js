import axios from 'axios';


const GetGoogle = (place_id) => {
  const googleKey = 'AIzaSyBjP5nWZ5y6tn7kL_iOiIOlVhA7c07k9W8'
  axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${googleKey}`)
  .then(res => {
    const business_info = res.data.result
    return business_info
  })
}

export default GetGoogle;
