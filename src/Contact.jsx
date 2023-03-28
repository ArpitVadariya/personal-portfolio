import React from "react";

function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <span>📧</span> arpit092vadariya@gmail.com
              </p>
              <p>
                <span>📞</span> +91 7226058760
              </p>
              <div className="social-icons">
                <a href="https://www.youtube.com">
                  <span>🤘</span>
                </a>
                <a href="https://www.youtube.com">
                  <span>🤘</span>
                </a>
                <a href="https://www.youtube.com">
                  <span>🤘</span>
                </a>
                <a href="https://www.youtube.com">
                  <span>🤘</span>
                </a>
              </div>
              <a href="require('./images/my-cv.pdf')" className="btn btn2">
                Download Resume
              </a>
            </div>
            <div className="contact-right">
              <form action="">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © Arpitkumar. 💖 Made by React js</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
