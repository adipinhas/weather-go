import React, { Component } from 'react'
import '../style/day.css'

export default class Day extends Component {
    render() {
        const celTemp =Math.floor((this.props.day.Temperature.Maximum.Value-32)*5/9)
        const descrition = this.props.day.Day.IconPhrase
        const numIcon = (''+this.props.day.Day.Icon).length === 1 ? '0'+this.props.day.Day.Icon : this.props.day.Day.Icon
        const imgUrl= `https://developer.accuweather.com/sites/default/files/${numIcon}-s.png`
        
        const timeStamp = this.props.day.EpochDate
       
        const dayNumberInWeek = new Date(timeStamp*1000).toDateString().split(' ')[0]
        
        
       
        return (
            <div className="day">
                <h4 style={{color:'rgb(180, 190, 190)'}}>{dayNumberInWeek}</h4>
               <h2>{celTemp}°</h2>
               <img className="img" src={imgUrl} alt=""/>
               <span>{descrition}</span>
        
            </div>
        )
    }
}
