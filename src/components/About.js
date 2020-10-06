import React from "react";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-body">
        <div className="about-me">
          <h1>ABOUT ME</h1>
          <p>
            Hi, I'm Keaton Braithwaite! I'm a software developer who
            loves to create and design websites and applications that are
            meaningful to people. Coming from a sales background and having
            helped build a pool construction company from the ground up I know
            how to work and am eager to learn. I am also a father of 3 beautiful
            children and husband to an amazing wife. I love the mountains here
            in Utah and exploring the many areas to hike. I'm a big sports
            enthusiast and enjoy playing football, basketball , pickleball and
            more.
          </p>
        </div>
        <div className="experience">
          <div className="devmtn">
            <h1 className="fas fa-code"><span>DEVMOUNTAIN GRADUATE</span></h1>
            <p>
              Immersive, 13-week web-development bootcamp for learning
              Javascript, HTML/CSS, React, Node, and PostgreSQL frameworks
            </p>
          </div>
          <div className="premier">
            <h1 className="fas fa-swimming-pool"><span>PREMIER POOLS SALES & DESIGN</span></h1>
            <p>
              Helped build this pool construction company from the ground up and
              got us to over $2.5 million in sales and still growing
            </p>
          </div>
          <div className="franz">
            <h1 className="fas fa-bread-slice"><span>ROUTE SALES AT FRANZ BAKERY</span></h1>
            <p>
              Sold to national and local grocery stores and lead the state in
              summer bun sales in 2015
            </p>
          </div>
          <div className="crane">
            <h1 className="fas fa-swimmer"><span>SERVICE MANAGER AT CRANE POOL CO</span></h1>
            <p>
              Helped build our service side of the company coming out of the
              recession and grew clientele over 40% over the two years I managed
              it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
