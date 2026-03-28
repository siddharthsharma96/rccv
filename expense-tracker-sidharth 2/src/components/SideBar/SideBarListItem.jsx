import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../../styles/index.css';
//these type of componenet known as stateless component 
//where we are rendering the data only and not doing anything

class SideBarListItem  extends Component {
    state = {  } 
    render() { 
        //console.log('props',this.props)
        //let clickHandler=(event)=>{
            //we use preventDefault to stop page refresh every time on everyclick
            //event.preventDefault();
            //console.log('clicked!');
            //we are getting this function from parent
            //this.props.onItemClick(this.props.item.id)
        //}
        const as=()=>{
            console.log(this.props.item.name);
            console.log(this.props.item.path)
        }
        return (
            <li>
                <NavLink onClick={as} to={this.props.item.path} exact>
                    <span className='material-icons'>{this.props.item.icon}</span>
                    <span>{this.props.item.name}</span>
                   
                </NavLink>
                 
            </li>
        );
    }
}

 
export default SideBarListItem; 