import React from 'react';
import Course from './Course.jsx';


function CourseList({online,offline}) {
  return (
    <>
    {
      offline.map(e=> <Course key={e.id} {...e} />)
    }
    </>
  )
}

export default CourseList;