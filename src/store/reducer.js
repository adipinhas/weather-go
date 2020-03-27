// const initialState = {
//     counter:0,
//     name:'',
//     results:[{value:0,id:new Date}]
// }

// const reducer = (state = initialState,action) => {
//     switch (action.type){
//         case 'INCREMENT' :
//             return {
//                 ...state,
//                 counter:state.counter+action.val,
//                 results:state.results.concat({value:state.counter+action.val,id:new Date})
//             }
//         case 'DECREASE':
//             return {
//                 ...state,
//                 counter:state.counter-action.val,
//                 results:state.results.concat({value:state.counter-action.val,id:new Date})
//             }
//         case 'DELETE_RESULT' :
//             const idToDelete = action.id
//             return {
//                 ...state,
//                 results:state.results.filter((result) => {
//                     return result.id!==idToDelete

//                 })

//             }


//     }
//     return state
  
// }
// export default reducer;