import axios from 'axios'
import googleHelper from './googleHelper'

export function fetchAllBars(getRequest) {
  return axios.get(getRequest)
    .then(res => {
      const localBarsArray = res.data
      const googleIDToLocalData = {};
      localBarsArray.forEach(localBar => {
        googleIDToLocalData[localBar.google_id] = localBar;
      });

      console.log('local bars', googleIDToLocalData)
      return googleHelper.MultiGoogle(localBarsArray)
      .then(res => {
        const mergedBars = res.map((obj) => {
          const googleData = obj.data.result
          const localData = googleIDToLocalData[googleData.place_id];
          return Object.assign({}, googleData, {
            name: localData.name,
            //reviews: localData.reviews
          })
        })
        console.log('google bars', mergedBars)
        return mergedBars
      })})
}
