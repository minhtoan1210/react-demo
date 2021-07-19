import React, { useState } from 'react';
import useFromValidate from '../../core/useFromValidate.jsx';
// import { Container } from './styles';

function Index() {

//  let [from,setFrom] = useState(
//    {
//      name:'',
//      phone:'',
//      email:'',
//      urlfb:'',
//      content:'',
//      conin:'',
//      thanhtoan:'tien-mat',
//    }
//  )
//  let [error,setError] = useState(
//   {
//     name:'',
//     phone:'',
//     email:'',
//     urlfb:'',
//     content:'',
//   }
// )
let { form,error,inputChange,check } = useFromValidate(
  {
       name:'',
       phone:'',
       email:'',
       urlfb:'',
       content:'',
       conin:'',
       thanhtoan:'tien-mat',
},{
  rule:{
    name:{
      required:true
    },
    phone:{
      required:true,
      pattern:'phone'
    },
    email:{
      required:true,
      pattern:'email'
    }
  },
  message:{
    name:{
      required:"Họ và Tên không được để trống",
    }
  }
})
function btnRegsion(e)
{
 let error = check();
 if(Object.keys(error).length===0)
 {
   alert("Thành Công");
 }
console.log(check());
}
function thanhtoan(e)
{
  // console.log(e.target.dataset.value)
  // setFrom({...form,
  //   thanhtoan:e.target.dataset.value
  // })
}



  return (
      <>
      <main className="register-course" id="main">
  <section>
    <div className="container">
      <div className="wrap container">
        <div className="main-sub-title">ĐĂNG KÝ</div>
        <h1 className="main-title">Thực chiến front-end căn bản </h1>
        <div className="main-info">
          <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
          <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
          <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
        </div>
        <div className="form">
          <label>
            <p>Họ và tên<span>*</span></p>
            <input type="text" value={form.name} onChange={inputChange} name="name" placeholder="Họ và tên bạn" />
            {error.name && <p className="error-text">{error.name}</p>}
          </label>
          <label>
            <p>Số điện thoại<span>*</span></p>
            <input type="text" value={form.phone} onChange={inputChange} name="phone" placeholder="Số điện thoại" />
            {error.phone && <p className="error-text">{error.phone}</p>}
          </label>
          <label>
            <p>Email<span>*</span></p>
            <input type="text" value={form.email} onChange={inputChange} name="email" placeholder="Email của bạn" />
            {error.email && <p className="error-text">{error.email}</p>}
          </label>
          <label>
            <p>URL Facebook<span>*</span></p>
            <input type="text" value={form.urlfb} onChange={inputChange} name="urlfb" placeholder="https://facebook.com" />
            {error.urlfb && <p className="error-text">{error.urlfb}</p>}
          </label>
          <label className="disable">
            <p>Sử dụng COIN</p>
            <div className="checkcontainer">
              Hiện có <strong>300 COIN</strong>
              {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
              {/* Cần ít nhất 200 COIN để giảm giá */}
              <input type="checkbox" name="conin" checked={form.conin} onChange={inputChange} defaultChecked="checked" />
              <span className="checkmark" />
            </div>
          </label>
          <label>
            <p>Hình thức thanh toán</p>
            <div className="select">
              <div className="head">Chuyển khoản</div>
              <div className="sub">
                <a href="# " data-value="Chuyen-Khoan" onClick={thanhtoan}>Chuyển khoản</a>
                <a href="#" data-value="Tien-mat" onClick={thanhtoan}>Thanh toán tiền mặt</a>
              </div>
            </div>
          </label>
          <label>
            <p>Ý kiến cá nhân</p>
            <input type="text" value={form.content}  onChange={inputChange} name="content" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
            {error.content && <p className="error-text">{error.content}</p>}
          </label>
          <div className="btn main rect" onClick={btnRegsion}>đăng ký</div>
        </div>
      </div>
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