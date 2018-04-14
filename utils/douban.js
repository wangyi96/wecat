const url = "https://douban.uieee.com"
const axios = require("./axios.js")

function getcityMovie(key,count=3,start=0){
  const params = {
    start,
    count,
    city: getApp().data.currentCity
  }
  return axios(url,"v2/movie/"+key, params).then( res =>{
    return res.data
  })
}

module.exports = { getcityMovie}