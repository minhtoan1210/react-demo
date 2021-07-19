import React from 'react';

// import { Container } from './styles';

function Tab4() {
  return (
      <>
          <div className="tab4" >
            <Item name_course="Khóa học CFD1-offline" date="09/09/2020" total="1.500.000 VND"></Item>
            <Item name_course="Khóa học CFD2-offline" date="18/10/2020" total="1.500.000 VND"></Item>
            <Item name_course="Khóa học CFD3-offline" date="18/10/2020" total="1.500.000 VND"></Item>
            <Item name_course="Khóa học CFD4-offline" date="18/10/2020" total="1.500.000 VND"></Item>
           </div>
      </>
  )
}

export default Tab4;


function Item({name_course, date, total})
{
  return (
    <>
 <div className="item itemhistory">
              <div className="name">{name_course}</div>
              <div className="date">{date}</div>
              <div className="money">{total}</div>
            </div>
    </>
  )
}