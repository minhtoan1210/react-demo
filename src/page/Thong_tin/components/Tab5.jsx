import React from 'react';

// import { Container } from './styles';

function Tab5() {
  return (
      <>
     
     <div className="tab5 cointab" style={{display: 'block'}}>
            <div className="coininfo">
              <div className="coininfo__box">
                <h3><strong>Thông tin COIN</strong></h3>
                <div className="coininfo__box-ct">
                  <div>
                    <img src="/img/cfd-coin.png" alt="" />
                    <p>Bạn có <strong>300</strong> COIN</p>
                  </div>
                </div>
              </div>
              <div className="coininfo__box">
                <h3><strong>Đổi COIN</strong></h3>
                <div className="coininfo__box-ct">
                  <label className="checkcontainer">
                    Voucher Tiki 100k
                    <input type="radio" name="radio" />
                    <span className="checkmarkradio" />
                  </label>
                  <label className="checkcontainer">
                    Voucher Tiki 200k
                    <input type="radio" name="radio" />
                    <span className="checkmarkradio" />
                  </label>
                  <label className="checkcontainer">
                    Voucher Tiki 500k
                    <input type="radio" name="radio" />
                    <span className="checkmarkradio" />
                  </label>
                  <label className="checkcontainer">
                    Thẻ nạp điện thoại 100k
                    <input type="radio" name="radio" />
                    <span className="checkmarkradio" />
                  </label>
                  <label className="checkcontainer">
                    Thẻ nạp điện thoại 200k
                    <input type="radio" name="radio" />
                    <span className="checkmarkradio" />
                  </label>
                  <label className="checkcontainer">
                    Thẻ nạp điện thoại 500k
                    <input type="radio" name="radio" />
                    <span className="checkmarkradio" />
                  </label>
                  <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                </div>
                <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
              </div>
            </div>
            <div className="coinhistory">
              <h3><strong>Lịch sử COIN</strong></h3>
              {/* <p>Chưa sử dụng COIN</p> */}
              <div className="itemhistory">
                <div className="td"><strong>COIN</strong></div>
                <div className="td"><strong>Thời gian</strong></div>
                <div className="td"><strong>Nội dung</strong></div>
                <div className="td"><strong>Trạng thái</strong></div>
              </div>
                <Item coin="-300" date="09/09/2020" course="Giới thiệu khóa học cho học viên mới" status="Đã chấp nhận"></Item>
                <Item coin="+300" date="18/10/2020" course="Dùng COIN để quy đổi sang Voucher Tiki" status="Đã chấp nhận"></Item>
                <Item coin="-300" date="18/10/2020" course="Dùng COIN để đổi sang Thẻ nạp điện thoạ" status="Chờ duyệt"></Item>
              
            </div>
          </div>
        
      </>
  )
}

export default Tab5;


function Item({coin, date,course, status})
{
  return (
    <>
       <div className="itemhistory">
                <div className="td">
                    {
                        coin>=0 ?
                        <span class="coin">{coin}</span>         
                        :  <span className="coin red">{coin}</span>
                    }
                    </div>
                <div className="td">{date}</div>
                <div className="td">{course}</div>
                <div className="td">{status}</div>
              </div>
    </>
  )
}