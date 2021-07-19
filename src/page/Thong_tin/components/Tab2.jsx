import React from 'react';

// import { Container } from './styles';

function Tab2() {
  return (
      <>
            <div className="tab2" >
            <Item images="" date="09/09/2019" hourse="54" video="25" student="20"  title="Front-End Căn Bản"></Item>
            <Item images="" date="09/09/2019" hourse="54" video="25" student="20" title="Front-End Nâng Cao"></Item>
          </div>
      </>
  )
}

export default Tab2;

function Item({images, date, hourse, video, student,title})
{
  return (
    <>
          <div className="item">
            <div className="cover">
              <img src="/img/img7.png" alt="" />
            </div>
            <div className="info">
              <a href="#" className="name">
                {title}
              </a>
              <div className="date">Khai giảng ngày {date}</div>
              <div className="row">
                <div className>
                  <img src="/img/clock.svg" alt="" className="icon" />{hourse} giờ
                </div>
                <div className>
                  <img src="/img/play.svg" alt="" className="icon" />{video} video
                </div>
                <div className>
                  <img src="/img/user.svg" alt="" className="icon" />{student} học viên
                </div>
              </div>
              <div className="process">
                <div className="line">
                  <div className="rate" style={{width: '30%'}} />
                </div>
                30%
              </div>
              <div className="btn overlay round btn-continue">
                Tiếp tục học
              </div>
            </div>
          </div>
    </>
  )
}