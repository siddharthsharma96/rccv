import React, { Component } from 'react';
import {useHistory} from "react-router-dom";
const ExpenseItem=({ item, deleteHandler, ...rest })=>{
  const history=useHistory()
    //console.log(item.name)
    const getMonthName=m=>{
        let month=['jan','feb','mar','apr','may','jun','jul','aug',
    'sep','oct','nov','dec'];
    return month[m];
    }
    const navigateTo=()=>{
      //console.log('dff');
      history.push(`/edit/${item.id}`);
    }
    return(
        <li className='flexbox flexbox-justify-between '>
                <div className='flexbox'>
                  <div className='flexbox flexbox-column flexbox-align-center date'>
                    <div className='month'>{getMonthName(item.date.getMonth())}</div>
                    <div className='day'>{item.date.getDate()}</div>
                  </div>
                  <h3 className='title'>{item.title}</h3>
                </div>
                <div className='flexbox flexbox-align-center'>
                  <div className='pill'>{item.amount} INR.</div>
                  <button onClick={navigateTo} className='actions'>
                    <span className='material-icons edit'>edit</span>
                  </button>
                  <button onClick={()=>deleteHandler(item.id)} className='actions'>
                    <span className='material-icons delete'>delete</span>
                  </button>
                </div>
              </li>
    )
}

export default ExpenseItem;
