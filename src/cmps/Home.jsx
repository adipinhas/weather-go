import React, { Component } from 'react'
import '../style/home.css'
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Days from './Days'
import * as actions from '../store/actions/actions'

export class Home extends Component {
    state={
        typing:this.props.match.params.city,
        citiesDatalist:[{name:this.props.match.params.city,code:this.props.match.params.code}],
        isShowingName:true,
        isShowingSearch:false,
        
    }
    setStrState=(e)=>{
        
        this.setState({
            typing:e.target.value,
            citiesDatalist:this.props.cityStr? this.props.cityStr.map((city)=>{
                return city
            }) : this.state.citiesDatalist
        })
    }
    componentWillMount(){
        this.props.onSetWeather((this.state.citiesDatalist.find((city)=>{
            return city.name.toLowerCase()===this.state.typing.toLocaleLowerCase()
            })).code)

            this.setState({
                ...this.state,
                isShowingName:true,
                isShowingSearch:false
            })
    }
    submit = () => {
        const code =(this.state.citiesDatalist.find((city)=>{
            return city.name.toLowerCase()===this.state.typing.toLocaleLowerCase()
        })).code
        console.log(code)
         this.props.history.push(`/${this.state.typing}/${code}`)
         alert(this.props.match.params.code)
        this.props.onSetWeather((this.state.citiesDatalist.find((city)=>{
            return city.name.toLowerCase()===this.state.typing.toLocaleLowerCase()
            })).code)
            
            this.setState({
                ...this.state,
                isShowingName:true,
                isShowingSearch:false,
              
            })
    }
    doNotShowName=()=>{
        this.setState({
            ...this.state,
            isShowingName:false
        })
    }
    showSearch=()=>{
        this.setState({
            ...this.state,
            isShowingSearch:true
        })

    }
    doNotShowSearch=()=>{
        this.setState({
            isShowingSearch:false
        })
    }
    saveCity=async()=>{
       await this.props.addFavorite({name:this.props.match.params.city,code:this.props.match.params.code})
    }
    removeFavorite=async()=>{
        await this.props.removeFavorite(this.props.match.params.code)
    }
    render() {
        console.log(this.props.match.params.city,this.props.match.params.code)
        const name = this.state.typing
          const options = this.props.cityStr && this.props.cityStr.map((city)=>{
            return <option code={city.code} value={`${city.name}`}></option>
         })
         const isFavorite=this.props.fvr.some((favorite)=>{
               return favorite.code===this.props.match.params.code
            })
         
        const days = <Days days ={this.props.weth.DailyForecasts} />
        return (
            <div  className="home">
              
            
                 {this.state.isShowingSearch &&<div onClick={this.doNotShowSearch} className="modal"></div>}
                {this.state.isShowingName &&
                <div className="name">
                        {!this.state.isShowingSearch && 
                        <button onClick={this.showSearch} className="goSearchButton">
                            {<SearchIcon></SearchIcon>}
                        </button>}
                            <h3 style={{margin:0}} >{name}</h3>
                            {!isFavorite && <div>
                        <FavoriteBorderIcon style={{color:"blue"}}  onClick={this.saveCity}></FavoriteBorderIcon>
                    </div> } 
                    {isFavorite && <div>
                    <FavoriteIcon style={{color:"red"}} onClick={this.removeFavorite}></FavoriteIcon>
                    </div> } 
                </div> }

             { this.state.isShowingSearch &&  <form className="form" onSubmit={this.submit}>
              { <input autoFocus onClick={this.doNotShowName} className="input" list="cities"
              value = {this.state.typing}
              onChange={(e)=>{
                  this.props.onTypeCity(e)
                            this.setStrState(e)                         
              }}/>}

            <datalist id="cities">
                {options}
            </datalist>
            <button className="button"><SendIcon/></button>
            </form>}

                 {this.props.weth.DailyForecasts && (
                     days
                 )}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    weth:state.weth.weather,
    cityStr:state.weth.citiesDataSet,
    fvr:state.fav.favorites
})

const mapDispatchToProps = dispatch => {
    return {
        onSetWeather:(code)=>dispatch(actions.onSetWeather(code)),
        onTypeCity:(evt)=>dispatch(actions.typingCity(evt.target.value,)),
        addFavorite:(val)=>dispatch(actions.onAddFavorite(val)),
        removeFavorite:(code)=>dispatch(actions.onRemoveFavorite(code))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
