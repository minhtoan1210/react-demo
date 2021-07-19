import React, { useContext } from 'react';
import {Link,NavLink,} from "react-router-dom";
import {Context} from '../core/AppProvider.jsx';
import useAuth from '../core/useAuth.jsx';
function Header() {
 
  let {linkloangding} = useContext(Context);

  let {login,user,handleLogin,popuplogin,outlogin} = useAuth()

 function Togglemenu()
 {
   document.body.classList.toggle();
 }




  return (
      <>
       <header id="header">
          <div className="wrap">
            <div className="menu-hambeger">
              <div className="button">
                <span />
                <span />
                <span />
              </div>
              <span className="text">menu</span>
            </div>
            <NavLink onClick={linkloangding}  to="#" className="logo">
              <img src="/img/logo.svg" alt="" />
              <h1>CFD</h1>
            </NavLink>
            <div className="right">
              {
                login ?(
                <div className="have-login">
                <div className="account">
                  <a href="#" className="info">
                    <div className="name">{user.name}</div>
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="hamberger">
                </div>
                <div className="sub">
                  <NavLink onClick={linkloangding} to="#">Khóa học của tôi</NavLink>
                  <NavLink onClick={linkloangding} to="/Thong_tin">Thông tin tài khoản</NavLink>
                  <NavLink  onClick={ outlogin } to="#">Đăng xuất</NavLink>
                </div>
              </div>
              ):(
                    <div class="not-login bg-none">
                    <NavLink to="#" class="btn-register" onClick={ popuplogin }>Đăng nhập</NavLink>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                  </div> 
              )
              }
            </div>
          </div>
        </header>
        <nav className="nav">
          <ul>
            <li className="li_login">
              <NavLink onClick={linkloangding} to="#">Đăng nhập</NavLink>
              <NavLink onClick={linkloangding} to="/Dang_ki">Đăng ký</NavLink>
            </li>
            <li >
              <NavLink onClick={linkloangding} exact to="/">Trang chủ</NavLink>
            </li>
            <li>
              <NavLink onClick={linkloangding} to="/Team">CFD Team</NavLink>
            </li>
            <li>
              <NavLink onClick={linkloangding} to="/Courses">Khóa Học</NavLink>
            </li>
            <li>
              <NavLink onClick={linkloangding} to="/Project">Dự Án</NavLink>
            </li>
            <li>
              <NavLink onClick={linkloangding} to="/Hop_tac">Liên hệ</NavLink>
            </li>
          </ul>
        </nav>
        <div className="overlay_nav" ></div>
      </>
  )
}

export default Header;