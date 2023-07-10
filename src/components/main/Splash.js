import React from 'react';

const Splash = () => {
  return (
    <div className='d-flex col-12 align-items-center justify-content-center '
    style={{
        maxHeight:'100vh',
        overflow:'hidden',
    }}
    
    >
      <img src="/images/spalshgif.gif" width='100%'   alt="Loading..."
      style={{
        maxHeight:800,
        overflow:'hidden',
      }}
      />
    </div>
  );
};

export default Splash;