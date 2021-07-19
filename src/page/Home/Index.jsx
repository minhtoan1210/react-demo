import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Banner from './components/Banner.jsx';
import CourseList from './components/CourseList.jsx';
import Different from './components/Different.jsx';
import Testimonial from './components/Testimonial.jsx';
import Gallery from './components/Gallery.jsx';
import Main from '../../layout/Main';

function Index() {


  let [state, setState] =useState(
    {
      online:[],
      offline:[],
      loanding:true
    }
  )
  useEffect(() =>{
            fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/courses`)
            .then(res=>res.json())
            .then((res)=>{
              setState({
                ...res,
                loanding:false
              })
            })
  },[])
  if(state.loanding) return 'Loangding'
console.log(state.offline);
  return (
     <>
       <main className="homepage" id="main">
       <Banner></Banner>
        <section className="section-courseoffline">
          <div className="container">
            <p className="top-des">
              The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
              has
              a more-or-less normal
            </p>
            <div className="textbox">
              <h2 className="main-title">Khóa học Offline</h2>
            </div>
            <div className="list row">
            <CourseList online={state.online} offline={state.offline} ></CourseList>
             
            </div>
          </div>
        </section>
        <section className="section-courseonline section-blue">
          <div className="container">
            <div className="textbox">
              <h2 className="main-title">Khóa học Online</h2>
            </div>
            <div className="list row">
              <CourseList online={state.online} offline={state.offline}></CourseList>
            </div>
            <div className="text-deco">C</div>
          </div>
        </section>
        
          <Different></Different>
        {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
          <Testimonial></Testimonial>   
           <Gallery></Gallery>
        <section className="section-action">
          <div className="container">
            <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
            <div className="btn main round bg-white">Đăng ký</div>
          </div>
        </section>
      </main>
  </>
  )
}

export default Index;