import * as actionTypes from '../actions/actions'
const initialState = {
    weather:{},
    citiesDataSet:[]
}

const reducer = (state = initialState,action) => {
    switch (action.type){
       case 'SET_WEATHER':
           return {
               ...state,
               weather:action.val
           }
           case 'SET_DATA_CITIES':
            return {
                ...state,
                citiesDataSet:action.val
            }
    }
    return state
  
}
export default reducer;     
