import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/favorites.css'
import * as actions from '../store/actions/actions'
import Linkcard from '../cmps/Linkcard'
import uuid from 'react-uuid'


export class Favorites extends Component {
    componentWillMount(){
        
    }
    pushHistory = (city,code)=> {
        this.props.history.push(`/${city}/${code}`)
    }
    render() {
        const favorites=this.props.fvr.map((city)=>{
            return <Linkcard pushHistory={this.pushHistory} key={city.id} city={city}></Linkcard>
        })
        return (
            <div className="favorites">
                {favorites}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fvr:state.fav.favorites
    
})

const mapDispatchToProps = dispatch=>{
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
