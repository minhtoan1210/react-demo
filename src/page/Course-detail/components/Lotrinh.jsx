import React from 'react';

// import { Container } from './styles';

function Lotrinh({content,title,num}) {
  return (
      <>
      <div className="accordion">
        <div className="accordion__title">
          <div className="date">Ngày {num}</div>
          <h3>{title}</h3>
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    
      </>
  )
}

export default Lotrinh;