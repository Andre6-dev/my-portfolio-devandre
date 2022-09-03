import React, { useState } from 'react'
import "./services.css"

import androidProject from '../../assets/projectAndroid.jpg'
import mernProject from '../../assets/work2.jpg'
import springProject from '../../assets/work3.jpg'
import iosProject from '../../assets/work4.jpg'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What Skills I Have</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bxl-android services__icon"></i>
            <h3 className="services__title">Android Project</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Food Project</h3>
              <div className="services__item-image">
                <img src={androidProject} alt="Android Project" />
              </div>
              <p className="services__modal-description">
                DaftFood app a mobile application that makes making food easier.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Navigation component : one activity contains
                    multiple fragments instead of creating multiple activites.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Retrofit : making HTTP connection with the rest API
                    and convert meal json file to Kotlin/Java object.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Room : Save meals in local database.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">MVVM & LiveData : Saperate logic code from views and save the state in case the screen configuration changes.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Coroutines : do some code in the background.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">View binding : instead of inflating views manually
                    view binding will take care of that.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Glide : Catch images and load them in imageView.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxl-flutter services__icon"></i>
            <h3 className="services__title">Flutter Project</h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button" >View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">BeatsCode Project</h3>
              <p className="services__modal-description">
                A social app like instagram, you can make posts, follow other users, etc.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I create ux element interactions.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxl-spring-boot services__icon"></i>
            <h3 className="services__title">Spring Boot Project</h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Backend <br /> Developer</h3>
              <p className="services__modal-description">
                Services with more than 3 years of experience.Providing
                quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I create ux element interactions.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxl-react services__icon"></i>
            <h3 className="services__title">MERN Project</h3>
          </div>
          <span onClick={() => toggleTab(4)} className="services__button">View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Backend <br /> Developer</h3>
              <p className="services__modal-description">
                Services with more than 3 years of experience.Providing
                quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I create ux element interactions.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxl-apple services__icon"></i>
            <h3 className="services__title">iOS Project</h3>
          </div>
          <span onClick={() => toggleTab(5)} className="services__button">View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Backend <br /> Developer</h3>
              <p className="services__modal-description">
                Services with more than 3 years of experience.Providing
                quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">I create ux element interactions.</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services