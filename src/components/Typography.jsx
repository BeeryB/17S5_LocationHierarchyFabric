import React, { Component } from 'react';


const Typography = () => {
    const header = {
        fontSize: 50,
        color: '#0078d7'
    }
    
    return(
    <section>
      <p style={header}>Segoe UI</p>
      <h1 className='ms-font-l'>Defined Sizes</h1>
      <h1 className='ms-font-su'>The quick brown fox jumps over a lazy dog</h1>
      <h2 className='ms-font-xxl'>The quick brown fox jumps over a lazy dog</h2>
      <h3 className='ms-font-xl'>The quick brown fox jumps over a lazy dog</h3>
      <h4 className='ms-font-l'>The quick brown fox jumps over a lazy dog</h4>
      <h5 className='ms-font-m-plus'>The quick brown fox jumps over a lazy dog</h5>
      <h6 className='ms-font-m'>The quick brown fox jumps over a lazy dog</h6>
      <p className='ms-font-s'>The quick brown fox jumps over a lazy dog</p>
      <p className='ms-font-xs'>The quick brown fox jumps over a lazy dog</p>
      <p className='ms-font-s-mi'>The quick brown fox jumps over a lazy dog</p>
      <br /><br />
      <br /><br />
      <h1 className='ms-font-l'>Standard HTML Sizes</h1>
      <h1 className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - h1</h1>
      <h2 className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - h2</h2>
      <h3 className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - h3</h3>
      <h4 className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - h4</h4>
      <h5 className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - h5</h5>
      <h6 className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - h6</h6>
      <p className='ms-fontWeight-light'>The quick brown fox jumps over a lazy dog - p</p>
    </section>
   );
}

export default Typography;