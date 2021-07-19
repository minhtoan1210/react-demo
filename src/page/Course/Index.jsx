import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import Item from './components/Item.jsx';
function Index() {

 let [course,setCourse] = useState(
   {
     online:null,
     offline:null,
     loading:true,
   }
 )
 useEffect(()=>{
   fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/courses`)
   .then(res => res.json())
   .then((res)=>{
    setCourse({
      ...res,
      loading:false,
    })
   }
   
     )
 },[])
 //khi mà nếu ra true thì sẽ nhảy vào return thì sẽ ko render ra gì cả 
 if(course.loading) 
 {
   return "Loading";
 }
console.log(course.online);
  return (
      <>
      <main className="homepage" id="main">
  <section className="section-1">
    <div className="container">
      <h2 className="main-title">KHÓA HỌC CFD</h2>
      <p className="top-des">
        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
        has
        a more-or-less normal
      </p>
      <div className="textbox">
        <h3 className="sub-title">KHÓA HỌC</h3>
        <h2 className="main-title">ONLINE</h2>
      </div>
      <div className="list row">
        {
          course.online.map((e,i)=> <Item key={e.id} {...e}></Item>)
        }
      
      </div>
    </div>
  </section>
  <section className="section-2 section-blue">
    <div className="container">
      <div className="textbox white">
        <h3 className="sub-title">KHÓA HỌC</h3>
        <h2 className="main-title">OFFLINE</h2>
      </div>
      <div className="list row">
        {
          course.offline.map((e,i)=> <Item key={e.id} {...e}></Item>)
        }
        
      
      </div>
      <div className="text-deco">C</div>
    </div>
  </section>
</main>

      </>
  )
}

export default Index;