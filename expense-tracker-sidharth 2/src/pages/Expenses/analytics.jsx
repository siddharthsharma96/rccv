import React, { Component } from 'react';
const Analytics=()=> {
    const myStyle={
        
        display:'flex',
        justifyContent: 'center'
    }
    return ( 
        <div className='layout-container__wrapper'>
            
            <div style={myStyle} className='heading'>
                <h3 >Analytics Page</h3>
            </div>
            <hr />
            <p>Under maintenance</p>
        </div>
     );
}

export default Analytics;