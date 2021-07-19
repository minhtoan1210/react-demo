import React from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

function Project_student({short_description,slug,title,teacher}) {
  return (
      <>
      <div className="col-md-4 course">
          <div className="wrap">
            <a href="#" className="cover">
              <img src="/img/img.png" alt="" />
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
              <div className="register-btn">
               <Link to={`/Dang_ki/${slug}`}> Đăng Ký </Link>
                </div>
            </div>
          </div>
        </div>
        
      </>
  )
}

export default Project_student;