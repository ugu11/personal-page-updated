import React, { useState } from 'react';
import './App.scss';
import ImageSlider from './ImageSlider'

function App() {
  const [ selectedProject, setSelectedProject ] = useState("")
  const imgLists = {
    mm: ["mm_add_field.png", "mm_home.png", "mm_table.png", "mm_table_data.png", "mm_viewrow.png"],
    baixa: ["baixa_1.png", "baixa_2.png", "baixa_3.png"],
    philter: ["philter_1.png", "philter_2.png"]
  }
  const projectsDescription = {
    mm: <p>Multi Manage is a customizable data management web platform. It was conceived with the idea of giving a user and/or company a solution to easily customize and structure the data that they need to manage, without having to setup a whole database and develop a platform specifically for their needs.
      <br/><br/>
      For the backend of this project, it was used <b>Node.js</b> with the <b>Express framework</b> and <b>MongoDB</b> for the database.
      The frontend was built using <b>React</b>.
      <br/><br/>
      Deployed project: <a href="https://multi-manage.ugomes.com/">https://multi-manage.ugomes.com/</a><br/>
      Frontend source code: <a href="https://github.com/Hugand/multi-manage">https://github.com/Hugand/multi-manage</a><br/>
      Backend source code: <a href="https://github.com/Hugand/multi-manage-node-mongo-backend">https://github.com/Hugand/multi-manage-node-mongo-backend</a></p>,

    baixa: <p>
      Baixa is a project that gives the users access to the businesses, shops and points of interest of Coimbra's downtown.
      <br/><br/>
      It was built using <b>Ruby on Rails</b> on the backend, <b>Angular</b> on the frontend and <b>PostgreSQL</b> for the database.<br/>
      For the tests, it was used <b>Rails Minitest</b> and <b>Cypress</b>, for the backend and end-2-end tests respectively.
      <br/><br/>
      Deployed project: <a href="https://www.baixa.app/">https://www.baixa.app/</a><br/>
    </p>,

    philter: <p>
      Philter is a photo filtering web app. It provides exposure, contrast, highlights, shadows, hue and saturation enhancement, blur, noise and black and white filtering, and finally, color inversion.
      <br/><br/>
      The algorithms for the image enhancement and filtering were developed from scratch with the exception from the blur filter where it was used a third-party library
      providing 2d FFT functions.<br/>
      <br/><br/>
      This app was developed using <b>React</b> and <b>Rust</b>, which was compiled with <b>Web Assembly</b> and used for the filtering and enhancement functions.
      <br/><br/>
      Deployed project: <a href="https://philter.ugomes.com/">https://philter.ugomes.com/</a><br/>
      Source code: <a href="https://github.com/Hugand/philter">https://github.com/Hugand/philter</a><br/>
    </p>
  }

  const titles = {
    mm: "Multi Manage",
    baixa: "Baixa",
    philter: "Philter"
  }

  return (
    <div className="main-container">
      <section className="main-page">
        <img src={require('../src/assets/bubbles.svg')} alt="bg-img"/>

        <div>
          <h5>Hello! I'm</h5>
          <h1>Hugo Gomes</h1>
          <h3>Computer Engineering Student @ ISEC</h3>
        </div>

      </section>

      <section className="about-me">
        <div className="container">
          <img src={require('../src/assets/img/me_photo.png')} alt="me"/>
          <div className="content">
            <h2>About me</h2>
            <div className="separator"></div>
            <p>I'm currently a second year Computer Engineering student at <b>Instituto Superior de Engenharia de Coimbra (ISEC).</b>
              <br/><br/>
              My main goal for these next few years is to finish my bachelor’s, get a masters degree either in the Software Engineering or Artificial Intelligence fields and grow as a developer.
              <br/><br/>
              At the moment, my main areas of interest in software development are frontend, backend and mobile development, although, I’m always interested in exploring new areas.
            </p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>

        <div className="item-list skill-list">
          <div className="item-display skill-display item-dark">
            <div>
              <img src={require('../src/assets/img/react_logo.svg')} alt="react_logo"/>
            </div>
            <h5>React</h5>
          </div>

          <div className="item-display skill-display item-dark">
            <div>
              <img src={require('../src/assets/img/node_logo.jpg')} alt="node_logo"/>
            </div>
            <h5>Node.js</h5>
          </div>

          <div className="item-display skill-display item-dark">
            <div>
              <img src={require('../src/assets/img/angular_logo.png')} alt="angular_logo"/>
            </div>
            <h5>Angular</h5>
          </div>

          <div className="item-display skill-display item-dark">
            <div>
              <img className="sass" src={require('../src/assets/img/sass_logo.png')} alt="sass_logo"/>
            </div>
            <h5>SASS/SCSS</h5>
          </div>

          <div className="item-display skill-display item-dark">
            <div>
              <img src={require('../src/assets/img/java_logo.png')} alt="java_logo"/>
            </div>
            <h5>Java</h5>
          </div>
          
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>

        <section className="timeline">
          <div className="time-point">
            <article className="card">
              <h4>Nest Collective - Summer Internship</h4>
              <p>Developed a web app from scratch where it displays the businesses and points of interest in Coimbra’s downtown, giving users access to their details and location, making easier the task of finding them and discovering new ones.
                <br/><br/>
                This project was built with a team of two developers and two designers where we used <b>Ruby on Rails</b> for the backend, <b>Angular</b> for the frontend and <b>PostgreSQL</b> for the database. We also covered backend and end-to-end testing using <b>Rails Minitest</b> and <b>Cypress</b>, respectively. A CI/CD pipeline was setup in the gitlab repository, covering our backend tests.
                We had a <b>Product Design Sprint</b> for designing the solution to the problem given to the team.
                Finally, the <b>agile</b> methodology was adopted with <b>SCRUM</b> for the project management.
                <br/><br/>
                For more about the development process: <a href="https://medium.com/nest-collective-writing-wall/development-process-summer-internship-2020-dae3e2b5a4fc">https://medium.com/nest-collective-writing-wall/development-process-summer-internship-2020-dae3e2b5a4fc</a>
                <br/><br/>
                Deployed project: <a href="https://www.baixa.app">https://www.baixa.app</a>
                <br/><br/>
                Duration of 2 months</p>
            </article>
            <div className="bar-container">
              <div className="bar"></div>
              <img src={require('../src/assets/img/nest_logo.svg')} alt="nest_logo"/>
            </div>
          </div>
          <div className="time-point">
            <article className="card">
              <h4>Pombalsys - Internship</h4>
              <p>Attended the professional course of Management and Programing of Informatics Systems during highschool.
                  Finished my final course project with the grade of 19 (0-20) and the course with the grade of 18,2 (0-20).
                  <br/><br/>
                  September 2016 - July 2019</p>
            </article>
            <div className="bar-container">
              <div className="bar"></div>
              <img src={require('../src/assets/img/pombalsys_logo.svg')} alt="pombalsys_logo"/>
            </div>
          </div>
        </section>
      </section>


      <section className="education">
        <h2>Education</h2>

        <section className="timeline">
          <div className="time-point">
            <div className="bar-container">
              <div className="bar"></div>
              <img src={require('../src/assets/img/isec_logo.svg')} alt="isec_logo"/>
            </div>
            <article className="card">
              <h4>Instituto Superior de Engenharia de Coimbra</h4>
              <h5>Computer Engineering</h5>
              <div className="separator"></div>
              <p>Currently taking my bachelor’s degree of Computer Engineering.
                <br/><br/>
                September 2019 - Currently attending</p>
            </article>
          </div>
          <div className="time-point">
            <div className="bar-container">
              <div className="bar"></div>
              <img src={require('../src/assets/img/etpsico_logo.svg')} alt="etpsico_logo"/>
            </div>
            <article className="card">
              <h4>ETPSicó</h4>
              <h5>Professional course in Management and Programming of Computer Systems</h5>
              <div className="separator"></div>
              <p>Development of a platform from scratch for managing tecnical assistances using PHP Laravel for the Backend and Frontend, Kotlin for the mobile app and MySQL for the database. This project was used in my final highschool course project, which got a grade of 19 (0-20).
                <br/><br/>
                Duration of 2 months</p>
            </article>
          </div>
        </section>
      </section>


      <section className="projects">
        <h2>Projects</h2>

        <div className="item-list project-list">
          <div className="item-display project-display item-light multi-manage-item">
            <div className={(selectedProject === "mm" ? "selected" : undefined)} onClick={() => setSelectedProject("mm")}>
              <img src={require('../src/assets/img/multi_manage_logo.svg')} alt="multi_manage_logo"/>
            </div>
          </div>

          <div className="item-display project-display item-light">
            <div className={(selectedProject === "baixa" ? "selected" : undefined)} onClick={() => setSelectedProject("baixa")}>
              <img src={require('../src/assets/img/baixa_logo.svg')} alt="baixa_logo"/>
            </div>
          </div>

          <div className="item-display project-display item-light philter-item">
            <div className={(selectedProject === "philter" ? "selected" : undefined)} onClick={() => setSelectedProject("philter")}>
              <img src={require('../src/assets/img/philter_logo.svg')} alt="philter_logo"/>
            </div>
          </div>
        </div>
        
        {selectedProject && <section className="project-details">
            <header>
              <button className="close-btn" onClick={() => setSelectedProject("")}>&#10005;</button>
              <h4>{titles[selectedProject]}</h4>
            </header>
            <div className="content">
              {imgLists[selectedProject] && <ImageSlider imgList={imgLists[selectedProject]}/>}
              
              { projectsDescription[selectedProject] }
            </div>
          </section>}
        
      </section>

      <section className="articles">
        <h2>Articles written</h2>

        <div className="content">
          <section className="article">
            <h4>Capture photos from Camera using Image Stream with Flutter</h4>

            <p>This article/tutorial is about using native C code in a Flutter app to increase the app's performance when converting an image from YUV420 to RGB. During the article I walk you through the steps of using an Image Stream to get the image from the phone's camera, setting up the dart:ffi library and the native C function, converting the image from YUV420 to RGB and finally displaying the image on the screen.
              <br/><br/>
              The full article can be found at: <a href="https://medium.com/@hugand/capture-photos-from-camera-using-image-stream-with-flutter-e9af94bc2bee">https://medium.com/@hugand/capture-photos-from-camera-using-image-stream-with-flutter-e9af94bc2bee</a></p>
          </section>

          <section className="article">
            <h4>Development Process - Summer Internship 2020</h4>

            <p>This article describes how I and the rest of the developers' team in the Nest Collective Summer Internship 2020 developed the project at hands. We talk about how it is structured, the technologies used and the decisions we made throughout the internship in more detail.
              <br/><br/>
              The full article can be found at: <a href="https://medium.com/@hugand/capture-photos-from-camera-using-image-stream-with-flutter-e9af94bc2bee">https://medium.com/@hugand/capture-photos-from-camera-using-image-stream-with-flutter-e9af94bc2bee</a></p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;