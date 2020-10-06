import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-body">
        <div className="contact-main">
          <h1>GET IN TOUCH WITH ME</h1>
          <h2 className="email">EMAIL : KEATONBRAITH@GMAIL.COM</h2>
          <h2 className="linkedin">
            LINKEDIN : <a href="https://www.linkedin.com/in/keaton-braithwaite-4754a664/" className="fab fa-linkedin"></a>
          </h2>
          <h2 className="facebook">
            FACEBOOK : <a href="https://www.facebook.com/keaton.braithwaite" className="fab fa-facebook"></a>
          </h2>
          <h2 className="twitter">
            TWITTER : <a href="https://twitter.com/KeatonBraithwa1" className="fab fa-twitter"></a>
          </h2>
          <h2 className="github">
            GITHUB : <a href="https://github.com/keatonBraith" className="fab fa-github"></a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
