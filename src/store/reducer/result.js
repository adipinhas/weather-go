import * as actionTypes from '../actions/actions'

const initialState = {
    results:[]
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case actionTypes.ADD_RESULT :
            console.log(action.val);
            return {
                results:state.results.concat({value:action.val,id:new Date})
            }
        case actionTypes.DELETE_RESULT :
            const idToDelete = action.id
            return {
               
                results:state.results.filter((result) => {
                    return result.id!==idToDelete

                })

            }


    }
    return state
  
}
export default reducer;