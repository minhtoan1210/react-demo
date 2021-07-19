import React from 'react';

// import { Container } from './styles';

function Tab3() {
  return (
      <>
           <div className="tab3" >
          <div className="row">
             <Item images="" title="Furnitown" content="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team." teacher_name="Trần Nghĩa" teacher_images=""></Item>
             <Item images="" title="GboxMB" content="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team." teacher_name="Trần Nghĩa" teacher_images=""></Item>
             </div>
             <div className="btn-wrap">
               <div className="btn overlay btn-icon round">
                <img src="/img/icon-upload.svg" alt="" /> Tải lên
               </div>
              </div>
          </div>
      </>
  )
}

export default Tab3;


function Item({images, title, content, teacher_name,teacher_images})
{
  return (
    <>
          <div className="col-md-6 course">
  <div className="wrap">
    <a href="#" className="cover">
      <img src="/img/img8.png" alt="" />
    </a>
    <div className="info">
      <a href="#" className="name">
        {title}
      </a>
      <p className="des">
       {content}
      </p>
    </div>
    <div className="bottom">
      <div className="teacher">
        <div className="avatar">
          <img src="/img/avt.png" alt="" />
        </div>
        <div className="name">{teacher_name}</div>
      </div>
      <div className="register-btn">Website</div>
    </div>
  </div>
</div>  
    </>
  )
}