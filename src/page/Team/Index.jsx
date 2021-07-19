import React from 'react';
import Main from '../../layout/Main.jsx';

import List_intern_teacher from './components/List_intern_teacher.jsx';

function Team() {
  return (
     <>
      <main className="team" id="main">
  <section>
    <div className="container">
      <div className="top">
        <h2 className="main-title">cfd team</h2>
        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
          elementum
          sem non luctus
        </p>
      </div>
      <div className="list row">
          <List_intern_teacher></List_intern_teacher>
      </div>
    </div>
  </section>
</main>

      </>
  )
}

export default Team;