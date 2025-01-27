import "./styles/Work.css";
//import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My Career &<span> Experience</span>
          {/*My <span> Work</span>*/}
        </h2>
        <div className="work-flex">
          {/*{[...Array(6)].map((_value, index) => (*/}
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">   
                <h3>01</h3>            
                  <div>
                    <h4>Blenheim Chalcot India Pvt Ltd</h4>                  
                    <p>Aug 2024 - Nov 2024</p>                
                  </div>                  
                </div>               
                <h4>Tools and features</h4>
                <p>Java, Spring Boot, JPA, PostgressSQL</p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="" />*/}
              <div>
                <h4>Specialist Software Engineer</h4>
                <h5>Project: Modulr - UK Payment Gateway</h5>
                <p> Developed software applications to meet customer requirements and deadlines.
                    Identified areas of improvement within existing software systems.
                    Designed test plans and conducted tests to ensure quality assurance standards were met.
                    Written integration and unit test for the missing piece to cover the test cases within
                    development phase
                </p>
              </div>            
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">   
                <h3>02</h3>            
                  <div>
                    <h4>Ampcus Pvt Ltd</h4>                  
                    <p>Jan 2024 - Aug 2024</p>                
                  </div>                  
                </div>               
                <h4>Tools and features</h4>
                <p>Java, Spring Boot, JPA, PostgressSQL</p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="" />*/}
              <div>
                <h4>Java Fullstack Developer</h4>
                <h5>Project: USA - DC Federation</h5>
                <p> Leading a team of 12 developers along with development task, understanding requirements
                    from clients and BA's and grooming them with proper ETA and assign the task to teams,
                    reviewing the code to fulfill the requirements properly without introducing the bug, Working
                    for Fire Hydrant project for DC water Federation
                </p>
              </div>            
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>
                  <div>
                    <h4>Worldline India Pvt Ltd</h4>
                    <p>Mar 2022- Oct 2023</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Java, Spring Boot, JPA, Oracle SQL</p>
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt="Hello" /> */}
              <div>
                <h4>Senior Appliation Engineer</h4>
                <h5>Project: IPG - Internet Payment Gateway</h5>
                <p> Working under IPG (Internet Payment Gateway) project which provides smooth platform to
                    merchants for performing online transactions like CC, DC, UPI, Net-baking, etc along with
                    reports and transaction dashboard managements with T+0 or T+1 settlement and tech used
                    like Java, JPA, React, JavaScript, Oracle SQL, microservices and Cronus batch, etc
                    Reworked applications to meet individual customer demands
                    Reviewed code and debugged errors to improve performance
                    Collaborated in team-based, Agile environment to accomplish objectives by deadlines
                </p>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>04</h3>

                  <div>
                    <h4>IDC Technologies Pvt Ltd</h4>
                    <p>Mar 2020 - Mar 2022</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Java, Spring Boot, JPA, PostgressSQL</p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="Hello" />*/}
              <div>
                <p>
                  <h4>Java Developer</h4>
                  <h5>Project: IPG - Internet Payment Gateway</h5>                
                  Worked as contract based employee under Atos-Worldline Project name IPG which is a
                  payment gateway that allows merchants to perform transactions like CC, DC, UPI, Net-bank,
                  etc also provide various portal to merchant and Admin to manage the on-boarding and
                  various functionality to merchants
                  Application is build by using technologies like Java, Spring Boot, HTML, CSS, JavaScript,
                  ReactJS, Oracle, etc
                </p>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>05</h3>
                  <div>
                    <h4>Intellect Design Arena Pvt Ltd</h4>
                    <p>Mar 2017- Mar 2020</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Java, MVN, Applet, JSP, Servlet, PLSQL</p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="Hello" />*/}
              <p>
              <h4>Jr.Java Developer</h4>
              <h5>Project: Bank Treasury Management System</h5>
                Developed Java based Bank e-Treasury application which involves major operations of
                Forex, Domestic and Risk management that deals with front office and back office
                operations
                Bond papers, CP's, USD-INR, cross currency deal with T+N days settlement is handled
                under the application
                Also works with end user to understand the query and problems faced once the application
                went live and smooth working of the application
              </p>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3></h3>
                  <div>
                    <h4></h4>
                    <p></p>
                  </div>
                </div>
                <h4></h4>
                <p></p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="Hello" />*/}
              <p>
              <h4></h4>
              <h5></h5>
                
              </p>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3></h3>
                  <div>
                    <h4></h4>
                    <p></p>
                  </div>
                </div>
                <h4></h4>
                <p></p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="Hello" />*/}
              <p>
              <h4></h4>
              <h5></h5>
                
              </p>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3></h3>
                  <div>
                    <h4></h4>
                    <p></p>
                  </div>
                </div>
                <h4></h4>
                <p></p>
              </div>
              {/*<WorkImage image="/images/placeholder.webp" alt="Hello" />*/}
              <p>
              <h4></h4>
              <h5></h5>
                
              </p>
            </div>
            
          {/*}))}*/}
        </div>
      </div>
    </div>
  );
};

export default Work;
