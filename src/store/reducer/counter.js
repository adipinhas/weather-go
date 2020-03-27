import * as actionTypes from '../actions/actions'

const initialState = {
    counter:0,
   
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case   actionTypes.INCREMENT :
            return {
                ...state,
                counter:state.counter+action.val,
            }
        case actionTypes.DECREASE :
            return {
                ...state,
                counter:state.counter-action.val,
            }
    }
    return state
  
}
export default reducer;