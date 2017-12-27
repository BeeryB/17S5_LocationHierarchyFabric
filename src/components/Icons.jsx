import React, { Component } from 'react';


const Icons = () => {
    const iconStyle = {
        display: 'inline-block',
        margin: '15px 25px'
    }

    
    return(
    <section>  
        <h1>Office Icons</h1>  
        <div style={iconStyle} class="ms-BrandIcon--icon48 ms-BrandIcon--excel" />
        <div style={iconStyle} class="ms-BrandIcon--icon48 ms-BrandIcon--outlook" />
        <div style={iconStyle} class="ms-BrandIcon--icon48 ms-BrandIcon--word" />
        <div style={iconStyle} class="ms-BrandIcon--icon48 ms-BrandIcon--sharepoint" />
        <div style={iconStyle} class="ms-BrandIcon--icon48 ms-BrandIcon--onedrive" />
    </section>
   );
}

export default Icons;