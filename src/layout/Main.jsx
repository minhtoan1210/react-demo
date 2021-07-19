import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Login from '../components/Login.jsx';
// import { Container } from './styles';

function Main({children}) {
  return (
      <>
       <Header></Header>
         {children}
      <Footer></Footer>
     <Login></Login>
      </>
  )
}

export default Main;