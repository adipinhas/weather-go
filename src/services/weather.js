import axios from 'axios'


export default {
    getForecastBycity,
    getCityKeysByTyping
}
async function getForecastBycity(cityKey){
    const weather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=HVUzpdiIvuokQ3svlWLk6aFpckz48vhd`)
    if(weather.data.DailyForecasts){
        localStorage.setItem('myweather',JSON.stringify(weather.data))
        return weather.data;
    }
    return JSON.parse(localStorage.getItem('myweather'))
}

async function getCityKeysByTyping(str){
    if(str===''){
        return null
    }
    const apiList = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=HVUzpdiIvuokQ3svlWLk6aFpckz48vhd&q=${str}`)
    console.log(apiList.data,'weaAAA')
    return apiList.data.map((res)=>{
        return {name:res.LocalizedName,code:res.Key}
    })
}
