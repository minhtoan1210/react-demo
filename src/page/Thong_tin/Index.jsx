import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../core/useAuth.jsx';
import { Redirect } from 'react-router';
import Tab1 from './components/Tab1.jsx';
import Tab2 from './components/Tab2.jsx';
import Tab3 from './components/Tab3.jsx';
import Tab4 from './components/Tab4.jsx';
import Tab5 from './components/Tab5.jsx';
// import { Container } from './styles';
function Index() {
  let { url } = useRouteMatch();
  let {login,user,handleLogin,popuplogin,outlogin} = useAuth()
  if(!login)
{
  return <Redirect to="/"></Redirect>
}
  
  
  return (
    <>
    <main className="profile" id="main">
  <section>
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src="img/avatar-lg.png" alt="" />
        <div className="camera" />
      </div>
      <div className="name">trần nghĩa</div>
      <p className="des">Thành viên của team CFD1-OFFLINE</p>
    </div>
    <div className="container">
      <div className="tab">
        <div className="tab-title">
          <NavLink exact to={url} >Thông tin tài khoản</NavLink>
          <NavLink to={`${url}/course`}>Khóa học của bạn</NavLink>
          <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
          <NavLink to={`${url}/hisotry_payment`}>Lịch sử thanh toán</NavLink>
          <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
        </div>
        <div className="tab-content">
          <Switch>
          <Route path={`${url}/project`} component={Tab3}/>
          <Route path={`${url}/hisotry_payment`} component={Tab5}/>
          <Route path={`${url}/coin`} component={Tab4}/>
          <Route path={`${url}/course`} component={Tab2}/>
          <Route exact path={`${url}`} component={Tab1}/>
          </Switch>
        </div>
      </div>
    </div>
  </section>
</main>

    </>
  )
}

export default Index;