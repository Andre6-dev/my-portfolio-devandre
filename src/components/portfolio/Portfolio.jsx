import React from 'react'
import androidProject from '../../assets/work1.jpg'
import mernProject from '../../assets/work2.jpg'
import springProject from '../../assets/work3.jpg'
import iosProject from '../../assets/work4.jpg'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What Skills I Have</span>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={androidProject} alt="Android Project" />
          </div>
          <h2 className="portfolio__title">Food Project </h2>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Andre6-dev" className="portfolio__social-icon" target="_blank">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={mernProject} alt="Mern Project" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Andre6-dev" className="portfolio__social-icon" target="_blank">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={springProject} alt="Spring Project" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Andre6-dev" className="portfolio__social-icon" target="_blank">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={iosProject} alt="Ios Project" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Andre6-dev" className="portfolio__social-icon" target="_blank">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio