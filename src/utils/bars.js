import axios from 'axios'
import googleHelper from './googleHelper'

export function fetchAllBars(localBarsArray) {

      // Create a dictionary with the GoogleID's as keys and the local bar as the value.
      const googleIDToLocalData = {};
      localBarsArray.forEach(localBar => {
        googleIDToLocalData[localBar.place_id] = localBar;
      });

      // Get Google Array of bars by passing in our local bars array
      return googleHelper.MultiGoogle(localBarsArray.map((localBar) => localBar.place_id))
      .then(res => {
        // Create an array of both the Google array and local bars array in several objects
        const mergedBars = res.map((obj) => {
          const googleData = obj.data.result
          // Fetch the local bar corresponding to the Google bar by looking it up in our dictionary previously made
          const localData = googleIDToLocalData[googleData.place_id];
          // Finally return with the Google Data + localbar data we need.
          return {...googleData, timeStart: localData.timeStart, timeEnd: localData.timeEnd, deals: localData.deals, picture: localData.picture}
        })
        return mergedBars
      })

}
