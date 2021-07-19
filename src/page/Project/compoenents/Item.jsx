import React from 'react';

// import { Container } from './styles';

function Item({name, makeby, images }) {
  return (
      <>
        <a href="#" className="item col-md-6">
          <div className="wrap">
            <div className="cover">
              <img src="/img/project/project (1).png" alt="" />
            </div>
            <div className="info">
              <div className="name">{name}</div>
              <div className="makeby">{makeby}</div>
            </div>
          </div>
        </a>
       
      </>
  )
}

export default Item;