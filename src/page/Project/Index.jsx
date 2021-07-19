import React from 'react';
import Item from './compoenents/Item';
// import { Container } from './styles';

function Index() {
  return (
      <>
      <main className="projectpage" id="main">
  <section className="section-1">
    <div className="container">
      <h2 className="main-title">dự án</h2>
      <p className="top-des">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
        luctus
      </p>
      <div className="list row">
      <Item name="WOODER" makeby="Minh Toàn" images=""></Item>
      <Item name="GBOXMB" makeby="Minh Toàn" images=""></Item>
      <Item name="WOODER" makeby="Minh Toàn" images=""></Item>
      <Item name="GBOXMB" makeby="Minh Toàn" images=""></Item>
      <Item name="WOODER" makeby="Minh Toàn" images=""></Item>
      <Item name="GBOXMB" makeby="Minh Toàn" images=""></Item>
      </div>
      <div className="bottom">
        <div className="btn overlay round btn-more">
          tải thêm
        </div>
      </div>
    </div>
  </section>
</main>

      </>
  )
}

export default Index;