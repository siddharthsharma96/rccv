import React, { Component } from 'react';
const PageNotFound=()=> {
    const myStyle={
       
        display:'flex',
        justifyContent: 'center'
    }
    return ( 
        <div className='layout-container__wrapper'>
            
            <div style={myStyle} className='flexbox flexbox-align-center'>
                <h3 >Page not Found ! </h3>
            </div>
           
            
        </div>
     );
}

export default PageNotFound;