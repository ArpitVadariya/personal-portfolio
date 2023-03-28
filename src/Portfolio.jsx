import React from "react";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={require("./images/work-1.png")} alt="work-1" />
              <div className="layer">
                <h3>Music Player</h3>
                <p>The app connects you to music and beats of music.</p>
              </div>
            </div>
            <div className="work">
              <img src={require("./images/work-2.png")} alt="work-2" />
              <div className="layer">
                <h3>Movies and Series Web-site</h3>
                <p>
                  The website provide you to movies and web series in hindi.
                </p>
              </div>
            </div>
            <div className="work">
              <img src={require("./images/work-3.png")} alt="work-3" />
              <div className="layer">
                <h3>Parlour and Salon Web Site</h3>
                <p>The website connects you to Beauty Parlour Salon.</p>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See More
          </a>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
