import React, { Component } from 'react'
import Day from './Day'
import '../style/days.css'

import uuid from 'react-uuid'

export default class Days extends Component {
    render() {
        const days =this.props.days.map((day) => {
            return <Day key ={uuid()} day={day}/>
        })
        return (
            <div className="days">
                {days}
            </div>
        )
    }
}
