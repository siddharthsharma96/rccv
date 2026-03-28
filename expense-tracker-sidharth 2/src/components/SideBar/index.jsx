import React, { Component } from 'react';
import './../../styles/index.css';
import SideBarListItem from './SideBarListItem';

class SidebarComponent
 extends Component {
    state = { 
        
     } 
    
    
    render() { 
        /*
        let itemClickHandler=(id)=>{
            //console.log(`Clicked id :${id}`);
            this.props.itemClick(id);
        }*/
        //console.log('sidebar ',this.props.activeItem)
        return (
           
        <div className='sidebar-container'>
            <div className='sidebar-container__brand'>
                Expense Tracker
            </div>
        <div className='sidebar-container__list'>
            <ul>
                {this.props.sideBarList.map(item=>{
                    return(<SideBarListItem 
                        
                        
                        key={item.id} item={item}>
                        </SideBarListItem>)
                })}
            </ul>
        </div>
      </div>);
    }
}
 
export default SidebarComponent
;
