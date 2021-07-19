import React from 'react';



function Internship({intern_name, intern_img, title, text}) {
  return (
    <div className="item col-md-3 col-sm-4 col-xs-6">
    <div className="wrap">
      <div className="cover">
        <span className="text">{text}</span>
        <img src="img/thumb-member.jpg" alt="" />
      </div>
      <div className="info">
        <div className="name">
          {intern_name}
        </div>
        <p className="title">{title}</p>
      </div>
    </div>
  </div>
 
  )
}

export default Internship;