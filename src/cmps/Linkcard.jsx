import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/link.css'
import DeleteIcon from '@material-ui/icons/Delete';

export default class Linkcard extends Component {
    pushRouter=()=>{
        console.log(this.props);
        this.props.pushHistory(this.props.city.name,this.props.city.code)
    }
    onDelete=(evt)=>{
        evt.stopPropagation()
    }
    
    
   
    render() {
        return (
            <div className="link" onClick={this.pushRouter}>
                {this.props.city.name}
                <div onClick={this.onDelete}>
                    <DeleteIcon></DeleteIcon>
                </div>

            </div>
            
        
           
        )
    }
}
