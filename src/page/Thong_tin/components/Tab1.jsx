import React, { useState } from 'react';

// import { Container } from './styles';

function Tab1() {


  let [from,setFrom] = useState(
    {
      name:'',
      phone:'',
      email:'',
      Facebook:'',
      Skype:'',
    }
  )
  let [error,setError] = useState(
    {
      name:'',
      phone:'',
      email:'',
      Facebook:'',
      Skype:'',
    }
  )
  function inputchange(e)
  {
    setFrom({
      ...from,
      [e.target.name]:e.target.value
    })
  }
  function btnRiges()
  {
    let objecterror={};
    if(from.name === '')
    {
      objecterror.name="Họ và tên không được để trống";
    }

    setError(objecterror);
   
  }

  return (
      <>
       <div className="tab1" >
            <label>
              <p>Họ và tên<span>*</span></p>
              <input type="text" value={from.name} onChange={inputchange} name="name" placeholder="Nguyễn Văn A" />
               {error.name && <p className="error-text">{error.name}</p>}
            </label>
            <label>
              <p>Số điện thoại<span>*</span></p>
              <input type="text" value={from.phone} onChange={inputchange} name="phone" placeholder="0949******" />
            </label>
            <label>
              <p>Email<span>*</span></p>
              <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
              <p>Facebook<span>*</span></p>
              <input type="text" value={from.Facebook} onChange={inputchange} name="Facebook" placeholder="Facebook url" />
            </label>
            <label>
              <p>Skype<span>*</span></p>
              <input type="text" value={from.Skype} onChange={inputchange} name="Skype" placeholder="Skype url" />
            </label>
            <div className="btn main rect" onClick={btnRiges}>LƯU LẠI</div>
          </div>
         
      </>
  )
}

export default Tab1;