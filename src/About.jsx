import React from "react";

function About() {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={require("./images/user.png")} alt="img" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, eius culpa blanditiis earum cupiditate ipsum. Officiis
                illum culpa, delectus, perspiciatis eos praesentium natus nulla,
                hic nisi corrupti voluptas itaque deleniti.
              </p>
              <div className="details">
                <div>
                  <div className="tab-titles">
                    <p className="tab-links active-link">Skills</p>
                  </div>
                  <div className="tab-contents active-tab" id="skills">
                    <ul>
                      <li>
                        <span>Cloud Development</span>
                        <br />
                        Build Infrastructure On Cloud
                      </li>
                      <li>
                        <span>Web Development</span>
                        <br />
                        Build Websites
                      </li>
                      <li>
                        <span>App Development</span>
                        <br />
                        Building Android iOS Apps
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="tab-titles">
                    <p className="tab-links active-link">Experience</p>
                  </div>
                  <div className="tab-contents active-tab" id="experience">
                    <ul>
                      <li>
                        <span>April/2022 - July/2022</span>
                        <br />
                        Google Cloud Ready Faciliter Program
                      </li>
                      <li>
                        <span>November/2022 - December/2022</span>
                        <br />
                        Google Cloud Career Practitioner Program
                      </li>
                      <li>
                        <span>September/2022 - December/2022</span>
                        <br />
                        The Arcade Event - by Qwiklabs
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="tab-titles">
                    <p className="tab-links active-link">Education</p>
                  </div>
                  <div className="tab-contents active-tab" id="education">
                    <ul>
                      <li>
                        <span>June/2017 - June/2018</span>
                        <br />
                        SSC - Noble High School
                      </li>
                      <li>
                        <span>June/2019 - June/2020</span>
                        <br />
                        HSC - Dev International School
                      </li>
                      <li>
                        <span>June/2020 - June/2023</span>
                        <br />
                        BCA - Dr. Subhash Technical Campus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

<script>
  var tablinks = document.getElementsByClassName("tab-links"); var tabcontents =
  document.getElementsByClassName("tab-contents");
</script>;
