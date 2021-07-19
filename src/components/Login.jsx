import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../core/AppProvider';
import useAuth from '../core/useAuth';
import useFromValidate from '../core/useFromValidate';



function Login() {
  let {linkloangding} = useContext(Context);
  let {login , user,handleLogin,popuplogin,closelogin} = useAuth();
  let { form,error,inputChange,check } = useFromValidate(
    {
      username:'',
      password:'',
    },{
      rule:{
        username:{
          required:true,
          pattern:'email'
        },
        password:{
          required:true,
        }
      },
      message:{

      }
    }
  )
  function _check()
  {
    let error = check();
    if(Object.keys(error).length===0)
    {
      alert("Thành Công");
      handleLogin(form);
      closelogin();
    }
   
  }



  return ReactDOM.createPortal(
<div className="popup-form popup-login" id="popuplogin" style={{display: 'none'}}>
  <div className="wrap">
    {/* login-form */}
    <div className="ct_login" style={{display: 'block'}}>
      <h2 className="title">Đăng nhập</h2>
      <input type="text" name="username" value={form.username} onChange={inputChange} placeholder="Email / Số điện thoại" />
      {error.username && <p className="error-text">{error.username}</p>}
        
      <input type="password" name="password" value={form.password} onChange={inputChange} placeholder="Mật khẩu" />
      <div className="remember">
        <label className="btn-remember">
          <div>
            <input type="checkbox" />
          </div>
          <p>Nhớ mật khẩu</p>
        </label>
        <a href="#" className="forget">Quên mật khẩu?</a>
      </div>
      <div className="btn rect main btn-login" onClick={_check}>đăng nhập</div>
      <div className="text-register" style={{}}>
        <strong>hoặc đăng ký bằng</strong>
      </div>
      <div>
        <div className="btn btn-icon rect white btn-google">
          <img src="img/google.svg" alt="" />
          Google
        </div>
      </div>
      <div className="close">
        <img src="img/close-icon.png" alt="" />
      </div>
    </div>
    {/* email form */}
    {/* <div className="ct_email">
      <h2 className="title">Đặt lại mật khẩu</h2>
      <input type="text" placeholder="Email" />
      <div className="btn rect main btn-next">Tiếp theo</div>
      <div className="back" />
      <div className="close">
        <img src="img/close-icon.png" alt="" />
      </div>
    </div>
   */}
  </div>
</div>,
document.getElementById('root2')
  )
}

export default Login;