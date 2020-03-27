import * as actionTypes from '../actions/actions'
import uuid from 'react-uuid'
const initialState = {
    favorites:[]
}

const reducer = (state = initialState,action) => {
    switch (action.type){
       case 'ADD_FAVORITE':
           return {
               ...state,
               favorites:state.favorites.concat({name:action.val.name,code:action.val.code,id:uuid()})
           }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites:state.favorites.filter((fav)=>{
                    return fav.code !== action.val
                })
            }
    }
    return state
  
}
export default reducer;     
