import weather from '../../services/weather'


export const DELETE_RESULT = 'DELETE_RESULT'
export const ADD_RESULT = 'ADD_RESULT'
export const INCREMENT = 'INCREMENT'
export const DECREASE = 'DECREASE'


export const onAddFavorite=(val)=>{
   return {
       type:'ADD_FAVORITE',
       val:val
   }

}






const onIncrement = (val) =>{
    return {
            type: INCREMENT,
            val:val
        }
}
export const setCities =(cities) =>{
    return {
        type:'SET_DATA_CITIES',
        val:cities
    }
}
export const typingCity=(str) =>{
    return (dispatch) => {
        return  weather.getCityKeysByTyping(str)
        .then((res)=>{
            dispatch(setCities(res))
        })
    }
}

export const onSetWeather = (code) => {
    
    return (dispatch) => {
        return  weather.getForecastBycity(code)
        .then((res)=>{
            dispatch(setWeather(res))
        })
    }
}

export const setWeather = (weather) => {
    return {
        type:'SET_WEATHER',
        val: weather
    }
}
export const onRemoveFavorite = (code)=> {
    return {
        type:'REMOVE_FAVORITE',
        val:code
    }
}

export const increment = (val) => {
    return dispatch => {
        setTimeout(() =>{
           dispatch(onIncrement(val))
        },2000)
    }
        
    // return {
    //     type: INCREMENT,
    //     val:val
    // }
}
export const decrease = (val) => {
    return {
        type: DECREASE,
        val: val
    }
}
export const addResult = (res) => {
    return {
        type: ADD_RESULT,
        val: res
    }
}
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id:id
    }
    
}


