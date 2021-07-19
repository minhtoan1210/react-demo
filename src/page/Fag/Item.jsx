import React from 'react';

// import { Container } from './styles';

function Item({title ,content}) {
  return (
      <>
       <div className="accordion">
            <div className="accordion__title">
              <h2><strong>{title}</strong></h2>
            </div>
            <div className="content">
             {content}
            </div>
          </div>
         
      </>
  )
}

export default Item;