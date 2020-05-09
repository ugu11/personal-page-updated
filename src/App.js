import React from 'react';
import './App.scss';
import SkillDisplayComponent from './SkillDisplayComponent'
import CardComponent from './CardComponent'
import ImageSlider from './ImageSlider'

function App() {
  return (
    <div className="App">
      
      <div id="home-section">

        <h2>Hello! I'm</h2>
        <h1>Hugo Gomes</h1>
        <p>
          I'm a Computer Engineering student in university.<br/>
          I've been programming for 3 years now and during that tima I've worked with a 
          few different programming languages, but I mainly
          focus in web (Javascript, React, Node) and mobile (Flutter, Dart) development.
        </p>

        <button className="btn" onClick={()=>{window.location = "#about-me-section"}}>More about me</button>
        <img src={require('./assets/img/shape.svg')}></img>

      </div>


      <div id="about-me-section">
        <div className="separator"></div>
        <h1 className="section-title">About me</h1>
        <p>
          Hello! My name is Hugo Gomes and I'm 18 years old. Currently I'm studying Computer Engineering in ISEC
          which has been my main goal for 4 years now. In highschool I took a professional course in Management and
          Programming of Informatics Systems. <br/>
          I've been programming for 3 years now and I'm very passionate about it. <br/>
          I know C, Java, Kotlin, Python and PHP but I mainly focus in full-stack web (Javascript, React, Node) and mobile (Flutter, Dart) development.<br/>
          I've also worked with Google's Firebase using it's Authentication API, Cloud Functions and Firestore.
          On the database side, I've worked with MySQL and MongoDB.<br/>
          I've developed some projects using these technologies. You can learn more about them <a href="#projects-section">here</a>.<br/><br/>

          During highschool had two internships. The first one was in 2018 where I participated in the Erasmus+ programme where I spent 10 weeks
          where more important than the internship itself, was the new life experience of living in a different country for the first time.<br/>
          The second one was in 2019 where I was in a local company. This was the internship where I learned the most because I developed a project
          for the company, which also was my final highschool project. More information about this project can be found <a href="#assistec">here</a>.
        </p>
      </div>
    
      <div id="skills-section">
        <h1 className="section-title">Skills</h1>

        <div id="skill-container">
          <div id="left">
            <SkillDisplayComponent skill="HTML5" percentage="90" />
            <SkillDisplayComponent skill="CSS/SASS" percentage="80" />
            <SkillDisplayComponent skill="Javascript" percentage="75" />
            <SkillDisplayComponent skill="Flutter/Dart" percentage="70" />
            <SkillDisplayComponent skill="MySQL" percentage="70" />
            <SkillDisplayComponent skill="React" percentage="65" />
          </div>
          <div id="right">
            <SkillDisplayComponent skill="Kotlin" percentage="60" />
            <SkillDisplayComponent skill="Node" percentage="55" />
            <SkillDisplayComponent skill="C" percentage="50" />
            <SkillDisplayComponent skill="Java" percentage="40" />
            <SkillDisplayComponent skill="PHP" percentage="40" />
            <SkillDisplayComponent skill="Python" percentage="40" />
          </div>

        </div>
      </div>

      <div id="education-experience-section">
        <div id="education">
          <h1 className="section-title">Education</h1>
          <CardComponent title="Computer Engineering" location="ISEC" date="2019 - attending"/>
          <CardComponent title="Professional Course of Management and Programming of Computer Systems"
            location="ETP Sicó" date="2016 - 2019"/>
        </div>

        <div id="experience">
          <h1 className="section-title">Experience</h1>
          <CardComponent title="Internship" location="Pombaldata LDA." date="April 2019 - June 2019 (10 weeks)"/>
          <CardComponent title="Internship - Erasmus+ in Berlin" location="TC Elektronik" date="February 2018 - April 2018 (6 weeks)"/>

        </div>
      </div>


      <div id="projects-section">
        <h1 className="section-title">Projects</h1>


        <div id="multi-manage" className="rowLeft">
          <div className="text">
            <h2>Multi Manage</h2>
            <p>This project is a customizable management web platform. This project was
              conceived with the idea of giving a user or company a solution to easily
              customize and structure the data that they need to manage without having
              to setup a whole database and develop a platform specifically for their needs.
              This platform's data is divided in organizations. An organization has all of the
              tables data stored as well as it's users. The users are specific to the organizations
              and are the ones who can manipulate the data stored in the tables. There is also an
              admin user who has access to users and the table fields and can modify them.<br/><br/>
              For the backend of this project, I used <b>Google's Firebase Cloud Functions, Firestore and Authentication API</b>.<br/>
              For the frontend of tbis project, I used <b>React</b>.<br/><br/>

              <b>Deployed project:</b> <a href="https://multi-manage.ugomes.com/home">https://multi-manage.ugomes.com/home</a>
              <b>Source code:</b> <a href="https://github.com/Hugand/multi-manage">https://github.com/Hugand/multi-manage</a>
            </p>
          </div>
          <div className="img-slider">
            <ImageSlider imgList={[
              "mm_home.png", "mm_table.png",
              "mm_table_data.png", "mm_viewrow.png",
              "mm_add_field.png"]} time={4000}/>
          </div>
        </div>
        
        <div id="smtuc" className="rowRight">
          <div className="text">
            <h2>SMTUC Custom app</h2>
            <p>This project is a mobile app where it is possible to get information about bus stops,
              real-time bus information and their timetables from Coimbra's buses (SMTUC).<br/>
              It is possible to search for bus stops in a specific area and radius, and then the user 
              can select a stop and see which buses are almost arriving at the stop and how much take they will 
              take. On another screen, the user can see the timetables of a specific bus by
              choosing its route, direction and week day.<br/><br/>

              This project is an integration of an already existing API, so I only developed the mobile app itself.<br/>
              For that I used <b>Flutter toolkit</b> and the <b>Dart</b> programming language.<br/><br/>

              <b>Source code:</b> <a href="https://github.com/Hugand/smtuc_dec">https://github.com/Hugand/smtuc_dec</a>
              
            </p>
          </div>
          <div className="img-slider">
            <ImageSlider imgList={["smtuc_stop.gif", "smtuc_stop_data.gif", "smtuc_timetables.gif"]} time={30000}/>
          </div>
        </div>

        <div id="assistec" className="rowLeft">
          <div className="text">
            <h2>Assistec</h2>
            <p>This project was developed for local company during my second internship there in 2019 and was also my final highschool course
              project.<br/>
              With portability in mind, this project is composed by a website and an android app and its main goal is to manage the company's
              technical assistances.<br/>
              Besides the technical assistances, the platform can manage the company's users (the technicians), clients, products, services, 
              it can send automated emails to users and clients on a technical assistance state change, it can generate a pdf report of a specific 
              assistance, and on the android app it can get the clients signature as a confirmation of a technical assistances completed.<br/>
              <br/>
              The backend of this project was developed with <b>PHP/Laravel</b> and for the database I used <b>MySQL</b>.<br/>
              The project's frontend was developed using <b>HTML, CSS and Javascript</b> for the website, and <b>Kotlin</b> for the android app.
              
              </p>
          </div>
          <div className="img-slider">
            <ImageSlider imgList={[
              "at1.png",
              "at2.png",
              "at3.png",
              "at4.png",
              "at5.png",
              "at6.png",
              "at7.png",
              "at8.png",
            ]} time={4000}/>
          </div>
        </div>
        
        <div id="pandemic" className="rowRight">
          <div className="text">
            <h2>Pandemic evolution simulator</h2>
            <p>During the Covid-19 pandemic I decided to build a pandemic evolution simulator.<br/>
               I tried to use approximated rates that would be similar to the Corona Virus, although they are NOT official.<br/>
               The behaviour in this simulation is based if everyone is outside and in perfect contact with everyone without any protections.<br/>
               During the simulation the number of days is counted and a graph with the number of infected people is being generated. Each
               person has a randomly generated age and if any, a desease. During the simulation they can have 4 different states: "healthy", "imune",
               "dead" or "infected". Healthy people are represented in green, imune people in blue and infected people in red. When infected people
               can die, recover or recover and be imune. If someone is healthy, that person can be infected, if it is imune it can't.<br/>
               The people were based on Reactive Agents' behaviour.<br/>
               <b>This is just a simulation, not real data and behaviour!</b>
               <br/><br/>

               For this project I used <b>Javascript</b> and to help me with the graphical displaying I used the <b>P5js</b> library.<br/><br/>

               <b>Live demo:</b> <a href="https://hugand.github.io/corona/">https://hugand.github.io/corona/</a><br/>
               <b>Source code:</b> <a href="https://github.com/Hugand/corona">https://github.com/Hugand/corona</a>

               
            </p>
          </div>
          <div className="img-slider">
            <ImageSlider imgList={["pandemic.gif"]}/>
          </div>
        </div>

      </div>


      <div id="articles-section">
        <h1 className="section-title">Articles</h1>
        <h2>Capture photos from Camera using Image Stream with Flutter</h2>
        <p>
          This article/tutorial is about using native C code in a Flutter app to increase the 
          app's performance when converting an image from YUV420 to RGB. During the article
          I walk you through the steps of using an Image Stream to get the image from the phone's
          camera, setting up the dart:ffi library and the native C function, converting the image
          from YUV420 to RGB and finally displaying the image on the screen.
            <br/><br/>
          The full article can be found at:
          <a href="https://medium.com/@hugand/capture-photos-from-camera-using-image-stream-with-flutter-e9af94bc2bee">
          https://medium.com/@hugand/capture-photos-from-camera-using-image-stream-with-flutter-e9af94bc2bee
          </a>
        </p>
      </div>

      <div id="contact-section">
        <h1 className="section-title">Contact</h1>

        <div id="contact-card">
          <div className="row">
            <label><b>Email: </b>hugoasgomes@hotmail.com</label>
          </div>
          <div className="row">
            <label><b>Github: </b><a href="https://github.com/Hugand">https://github.com/Hugand</a></label>
          </div>
          <div className="row">
            <label><b>Medium: </b><a href="https://medium.com/@hugand">https://medium.com/@hugand</a></label>
          </div>
        </div>

      </div>

      <footer id="footer">

      </footer>
      
    </div>
  );
}

export default App;
