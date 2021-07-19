import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

function Item({course_status,short_description,slug,teacher,title,thumbnail}) {
  return (
   <>
   <div className="col-md-4 course">
          <div className="wrap">
            <a href="#" className="cover">
              <img src={thumbnail.link} alt="" />
            </a>
            <div className="info">
              <a className="name" href="#">
               {title}
              </a>
              <p className="des">
               {short_description}
              </p>
            </div>
            <div className="bottom">
              <div className="teacher">
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
                <div className="name">{teacher.title}</div>
              </div>
              <Link to={`/Dang_ki/${slug}`} className="register-btn"> 
                Đăng Ký</Link>
            </div>
          </div>
        </div>
      
   </>
 )
}

export default Item;