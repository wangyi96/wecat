const axios = require('./axios')
const url = "https://api.map.baidu.com"

function getcityName(latitude, longitude){
  const params = { ak: "TquUePGLA66mRASvQwRPYNRry5ObzBwm", location: `${latitude},${longitude}`, output: 'json'}
  return axios(url, "geocoder/v2/", params).then(res =>{
    var city = res.data.result.addressComponent.city +"";
    return city.substring(0, 2)
    })
}

module.exports = { getcityName}