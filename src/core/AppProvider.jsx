import React, { useEffect, useState, } from 'react';
import { useHistory} from "react-router-dom";
import {
    BrowserRouter ,
  } from "react-router-dom";

  export let Context = React.createContext()

function Provider({children}) {
 
    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login:false,
        user:null
      })
      useEffect(()=>
      {
        localStorage.setItem('auth',JSON.stringify(auth))
      },[auth])
      
      function handleLogin(form) {
        setAuth({
          login:true,
          user: {
            name:'Minh Toàn'
          }
        })
        
      } 
      function outlogin() {
        setAuth({
          login:false,
          user:null
        })
       
      } 
      
      let history = useHistory();
      function linkloangding(e)
      {
        document.body.classList.remove('menu-is-show');
        document.querySelector('.loading-page').style.transform = 'scale(25)';
        e.preventDefault()
        setTimeout(()=>
        {
          console.log(history);
          history.push(e.target.href?.replace(window.location.origin,'') || '');
          document.querySelector('.loading-page').style.transform = 'scale(0)';
        },1000)
     
      }
       function popuplogin(flag = true)
       {
         document.getElementById("popuplogin").style.display = flag ? "flex" : "none";
       }
       function closelogin(flag = false)
       {
         document.getElementById("popuplogin").style.display = flag ? "flex" : "none";
       }

    return (
        <Context.Provider value={{ ...auth, handleLogin,linkloangding,popuplogin,closelogin,outlogin }}>
           {children}
        </Context.Provider>
    )
  }
  



function AppProvider({children}) {
  return (
    <BrowserRouter>
        <Provider>
         {children}
        </Provider>
    </BrowserRouter>
  )
}

export default AppProvider;