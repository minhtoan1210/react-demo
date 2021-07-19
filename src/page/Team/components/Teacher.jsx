import React from 'react';

function Teacher({teacher_img, teacher_name, title}) {
  return (
      <>
      <div className="item col-md-6 col-sm-6">
          <div className="wrap">
            <div className="cover">
              <img src="img/thumb-member.jpg" alt="" />
            </div>
            <div className="info">
              <div className="name">
                {teacher_name}
              </div>
              <p className="title">Founder &amp; Creative Front-End Developer</p>
            </div>
          </div>
        </div>
        
      </>
  )
}

export default Teacher;