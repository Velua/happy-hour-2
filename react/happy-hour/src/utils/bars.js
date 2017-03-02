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


      return googleHelper.MultiGoogle(localBarsArray)
      .then(res => {
        const mergedBars = res.map((obj) => {
          const googleData = obj.data.result
          // let localData;
          // localBarsArray.forEach(localBar => {
          //   if (localBar.google_id == googleData.place_id) {
          //     localData = localBar
          //   }
          // });
          const localData = googleIDToLocalData[googleData.place_id];
          return Object.assign({}, googleData, {
            timeStart: localData.timeStart,
            timeEnd: localData.timeEnd,
            deals: localData.deals
          })
        })

        return mergedBars
      })})
}
