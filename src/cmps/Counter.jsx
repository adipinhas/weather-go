import React, { Component } from 'react'
import {connect} from 'react-redux'
import weather from '../services/weather'

import * as actions from '../store/actions/actions'

export class Counter extends Component {
    async componentDidMount(){
        const bb = await weather.getForecastBycity()
        console.log(bb);
        


    }
     render() {
      
        return (
            <div>
                <button onClick={()=>{this.props.onIncrementCounter();
                                      this.props.onAddResult(this.props.ctr)}}>UP</button>

                <button onClick={()=>{this.props.onDecreaseCounter();
                                      this.props.onAddResult(this.props.ctr)}}>DOWN</button>
                {this.props.ctr}

                {this.props.results.map((res)=>{
                   return <div onClick={()=>this.props.onDeleteItem(res.id)}>{res.value}</div>
                })}
               
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ctr:state.ctr.counter,
        results:state.res.results
    }
}
const mapDispatchToprops = dispatch => {
    return {
        onAddResult:(res)=>dispatch(actions.addResult(res)),
        onIncrementCounter:()=>dispatch(actions.increment(10)),
        onDecreaseCounter:()=>dispatch(actions.decrease(10)),
        onDeleteItem:(idToDelete)=>dispatch(actions.deleteResult(idToDelete))
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Counter) 
