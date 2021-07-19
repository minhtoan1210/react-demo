import React, { useEffect, useState } from 'react';
import { useRouteMatch,Link } from 'react-router-dom';

import Lotrinh from './components/Lotrinh.jsx';
import Project_student from './components/Project_student.jsx';
function Index() {
  let {slug} = useRouteMatch().params;
  let  [state , setState] = useState(
    {
      course:null,
      related:null,

    }
  )
  // let a = useRouteMatch();
  // console.log(a);

  useEffect(() =>
  {
  //   fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`)
  //   .then(res =>res.json())
  //   .then((res)=>{
  //     setCourse(res.data)
  Promise.all([
    fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`).then(res=>res.json()),
    fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course-related/${slug}`).then(res => res.json())
  ])
    .then(([res1,res2]) => {
      setState({
        course:res1.data,
        related:res2.data
      })
    })
  //   })
  },[slug])
  
let { course } = state;
console.log(state.related);
if(!course) return 'Loading....';

  return (
      <>
      <main className="course-detail" id="main">
  <section className="banner style2" style={{background: '#cde6fb'}}>
    <div className="container">
      <div className="info">
        <h1>{course.title}</h1>
        <div className="row">
          <div className="date"><strong>Khai giảng:</strong> {course.close_time}</div>
          <div className="time"><strong>Thời lượng:</strong>{course.count_video}</div>
        </div>
        <div className="btn white round" style={{background: '#70b6f1'}}>
          <Link to={`/Dang_ki/${slug}`}>đăng ký</Link>
          </div>
      </div>
    </div>
    <div className="bottom">
      <div className="container">
        <div className="video">
          <div className="icon">
            <img src="/img/play-icon-white.png" alt="" />
          </div> <span>giới thiệu</span>
        </div>
        <div className="money">//</div>
      </div>
    </div>
  </section>
  <section className="section-2">
    <div className="container">
      <p className="des">Many Laravel apps don’t warrant the complexity of a full front-end framework like Vue or
        React. In this series, we’ll walk through a handful of simple ways to add dynamic functionality to
        your apps.</p>
      <h2 className="title">giới thiệu về khóa học</h2>
      <div className="cover">
        <img src="/img/course-detail-img.png" alt="" />
      </div>
      <h3 className="title">nội dung khóa học</h3>
         {
           course.content.map((e,i)=><Lotrinh key={i}  {...e} num ={i + 1}></Lotrinh>)
         }
      

     
      <h3 className="title">yêu cầu cần có</h3>
      <div className="row row-check">
        <div className="col-md-6">Đã từng học qua HTML, CSS</div>
        <div className="col-md-6">Cài đặt phần mềm Photoshop,
          Adobe illustrator, Skype</div>
      </div>
      <h3 className="title">hình thức học</h3>
      <div className="row row-check">
        <div className="col-md-6">Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.</div>
        <div className="col-md-6">Dạy và thực hành thêm bài tập online
          thông qua Skype.</div>
        <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
          hoặc phần mềm điều khiển máy tính.</div>
        <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
      </div>
      <h3 className="title">
        <div className="date-start">lịch học</div>
        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
      </h3>
      <p>
        <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
        <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
      </p>
      <h3 className="title">Người dạy</h3>
      <div className="teaches">
        <div className="teacher">
          <div className="avatar">
            <img src="/img/avatar-lg.png" alt="" />
          </div>
          <div className="info">
            <div className="name">TRẦN NGHĨA</div>
            <div className="title">Founder CFD &amp; Creative Front-End Developer</div>
            <p className="intro">
              My education, career, and even personal life have been molded by one simple principle;
              well
              designed information resonates with people and can change lives.I have a passion for
              making
              information resonate. It all starts with how people think. With how humans work. As
              humans
              we have learned how to read and write and while that is incredible, we are also already
              hard-wired to do some things a bit more "automatically"
            </p>
            <p><strong>Website:</strong> <a href="#">http://nghiatran.info</a></p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="user">
          <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
        </div>
        <div className="btn main btn-register round">đăng ký</div>
        <div className="btn-share btn overlay round btn-icon">
          <img src="/img/facebook.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="section-3">
    <div className="container">
      <div className="textbox">
        <h3 className="sub-title">DỰ ÁN</h3>
        <h2 className="main-title">THÀNH VIÊN</h2>
      </div>
      <div className="list row">
        {
          state.related.map((e,i)=> <Project_student key= {e.id} {...e} ></Project_student>)
        }
       
      </div>
    </div>
  </section>
  <section className="section-4">
    <div className="container">
      <div className="textbox">
        <h3 className="sub-title">Khóa học</h3>
        <h2 className="main-title">Liên quan</h2>
      </div>
      <div className="list row">
      </div>
    </div>
  </section>
</main>

      </>
  )
}

export default Index;