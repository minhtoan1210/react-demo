import React, { useState } from 'react';

// import { Container } from './styles';

function Index() {

    let [from,setFrom] = useState(
      {
        name:'',
        phone:'',
        email:'',
        website:'',
        title:'',
        content:'',
      });
      let [eror,setEror] = useState(
        {
          name:'',
          phone:'',
          email:'',
          website:'',
          title:'',
          content:'',
        });
      function inputChange(e)
      {    
            
             setFrom({
               ...from,
             [e.target.name]:e.target.value
            })
            
      }
      function btnDangki()
      {
        let Objecteror={};
       if(from.name==='')
       {
        Objecteror.name="Họ và tên không được để chống";
       }
       if(from.phone==='')
       {
        Objecteror.phone="Số điện thoại không được để chống";
       }
       if(from.email==='')
       {
        Objecteror.email="Email không được để chống";
       }
       if(from.website==='')
       {
        Objecteror.website="Website không được để chống";
       }
       if(from.title==='')
       {
        Objecteror.title="Tiêu đề không được để chống";
       }
       if(from.content==='')
       {
        Objecteror.content="Nội dung không được để chống";
       }

       setEror(Objecteror); 
       if(Object.keys(Objecteror).length ===0 )
       {
         alert("OK");
       }
      }
  return (
      <>
      <main className="register-course" id="main">
  <section className="section-1 wrap container">
    {/* <div class="main-sub-title">liên hệ</div> */}
    <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
    <p className="top-des">
      Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
      việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
    </p>
    <div className="form">
      <label>
        <p>Họ và tên<span>*</span></p>
        <input type="text" value={from.name} onChange={inputChange} name="name" placeholder="Họ và tên bạn" />
        {eror.name && <p className="error-text">{eror.name}</p>}
      </label>
      <label>
        <p>Số điện thoại</p>
        <input type="text" value={from.phone} onChange={inputChange} name="phone" placeholder="Số điện thoại" />
        {eror.phone && <p className="error-text">{eror.phone}</p>}
      </label>
      <label>
        <p>Email<span>*</span></p>
        <input type="text" value={from.email} onChange={inputChange} name="email" placeholder="Email của bạn" />
        {eror.email && <p className="error-text">{eror.email}</p>}
      </label>
      <label>
        <p>Website</p>
        <input type="text" value={from.website} onChange={inputChange} name="website" placeholder="Đường dẫn website http://" />
        {eror.website && <p className="error-text">{eror.website}</p>}
      </label>
      <label>
        <p>Tiêu đề<span>*</span></p>
        <input type="text" value={from.title} onChange={inputChange} name="title" placeholder="Tiêu đề liên hệ" />
        {eror.title && <p className="error-text">{eror.title}</p>}
      </label>
      <label>
        <p>Nội dung<span>*</span></p>
        <textarea name id cols={30} rows={10} value={from.content} onChange={inputChange} name="content" defaultValue={""} />
        {eror.content && <p className="error-text">{eror.content}</p>}
      </label>
      <div className="btn main rect" onClick={btnDangki}>đăng ký</div>
    </div>
  </section>
  {/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
</main>

      </>
  )
}

export default Index;