import React from "react";

const Home = () => {
  return (
    <div className="home-body">
      <div className="main-home">
        <h1 className="name">KEATON BRAITHWAITE</h1>
        <h3 className="title">FULL STACK SOFTWARE DEVELOPER</h3>
        <div className="fas fa-laptop-code"></div>
        <div className="tech">
          JAVASCRIPT || REACT || NODE || HTML/CSS || SQL
        </div>
      </div>
      <div className="about-me">
        <h3>
          “Everything negative – pressure, challenges – is all an opportunity
          for me to rise.” — Kobe Bryant
        </h3>
        <p>
          Hi I'm Keaton Braithwaite! I'm a full-stack software developer,
          husband, father of 3, and outdoor enthusiast. I believe that through
          technology people can not only improve their lives but change them! I
          am passionate about helping other people live a better life and
          excited to do it through my own talents as a developer. Below you can
          see some of the technologies I have worked with and continue down to
          see some of my projects.
        </p>
        <div className="technology">
          <i class="fab fa-js-square">
            <span>JAVASCRIPT</span>
          </i>
          <i class="fab fa-react">
            <span>REACT</span>
          </i>
          <i class="fab fa-node">
            <span>NODE</span>
          </i>
          <i class="fab fa-css3-alt">
            <span>CSS</span>
          </i>
          <i class="fab fa-html5">
            <span>HTML</span>
          </i>
          <i class="fab fa-aws">
            <span>AWS</span>
          </i>
          <i class="fab fa-sass">
            <span>SASS</span>
          </i>
          <div className="sql">
            <img
              alt="SQL"
              src="https://lucas-schaat.me/static/postgresLogo_white-94a940ac0737f334344825192977997a.png"
            />
            POSTGRESQL
          </div>
          <div className="redux">
            <img
              alt="redux"
              className="redux-image"
              src="https://lucas-schaat.me/static/reduxLogo_white-e9b5b6d8ff9aefebc2358022ad78b6c7.png"
            />
            REDUX
          </div>
          <div className="express">
            <img
              alt="express"
              className="express-img"
              src="https://lucas-schaat.me/static/expressLogo_white-36cce1f8d4dd9551e0df58ab32af4827.png"
            />
            EXPRESS
          </div>
        </div>
      </div>
      <div className="projects-main">
        <h2>PROJECTS</h2>
        <div className="memory-body">
          <div className="memory-info">
            <h3>Me-Mories</h3>
            <p>
              A memory sharing app giving the user a way to upload image files
              and attach a title and description of the photo.
            </p>
            <a
              href="https://github.com/keatonBraith/noDB-project"
              className="fab fa-github"
            >
              <span>GITHUB</span>
            </a>
          </div>
          <img
            alt="photos"
            src="https://images.unsplash.com/photo-1531845116688-48819b3b68d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          />
        </div>
        <div className="budget-body">
          <img
            alt="budget"
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80"
          />
          <div className="budget-info">
            <h3>BudgeIt</h3>
            <p>
              A budgeting app built to give the user a simple way to keep track
              of their expenses and budgets in different categories over
              different months.
            </p>
            <div>
              <a href="https://budgeit.app/#/">LINK | </a>
              <a
                href="https://github.com/keatonBraith/budgeit"
                className="fab fa-github"
              >
                <span>GITHUB</span>
              </a>
            </div>
          </div>
        </div>
        <div className="yy-body">
          <div className="yy-info">
            <h3>Youtube-Yelp</h3>
            <p>
              A site designed to allow Youtube users a way to review channels
              and give them access to new channels they might not otherwise
              find.
            </p>
            <div>
              <a href="http://youtube-yelp.com/#/">LINK | </a>
              <a
                href="https://github.com/cavingayle/youtubeyelp"
                className="fab fa-github"
              >
                <span>GITHUB</span>
              </a>
            </div>
          </div>
          <img
            alt="computer"
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
