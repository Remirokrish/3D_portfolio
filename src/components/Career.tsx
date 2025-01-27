import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        {/*<h2>
          My career <span>&</span>
          <br /> experience
        </h2>*/}
        <h2>
          My Education <span>&</span>
          <br /> Qualification
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CDAC</h4>
                <h5>Advanced Computing</h5>
              </div>
              <p>Aug 2016 <br></br> to <br/> Feb 2017</p>
            </div>
            <p>
              After completing my engineering, I pursued a CDAC course, which played a pivotal role in sharpening my coding skills and preparing me for a career in the IT industry. The program provided hands-on training in advanced programming languages, software development methodologies, and emerging technologies.
              Through rigorous modules and industry-relevant projects, I gained proficiency in coding, debugging, and building scalable software solutions. The CDAC experience also enhanced my problem-solving capabilities, logical thinking, and ability to work under deadlines—skills that are essential for excelling in the IT field.
              This comprehensive training gave me the confidence and technical expertise to kickstart my career in IT and laid a strong foundation for continuous growth in the tech industry
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>Computer Engineering</h5>
              </div>
              <p>Aug 2013 <br></br> to <br/> May 2016</p>
            </div>
            <p>
              I completed my Bachelor of Engineering (B.E.) from the University of Mumbai, where I gained a strong foundation in engineering concepts and computing technologies. During the program, I studied subjects such as data structures, algorithms, software development, database management, and computer networks, which provided me with in-depth technical knowledge.
              Additionally, I worked on various academic projects that allowed me to apply theoretical knowledge to practical problems. These experiences not only enhanced my technical skills but also helped me develop problem-solving abilities, logical thinking, and teamwork.
              My time at the University of Mumbai was instrumental in shaping my career, as it introduced me to emerging technologies and trends in the IT industry, giving me the confidence to pursue and grow in the tech field
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>Computer Engineering</h5>
              </div>
              <p>Jun 2010<br></br> to <br/> Jun 2013</p>
            </div>
            <p>
              I completed a Diploma in Computer Engineering, which served as the foundation of my technical education and helped me build a strong base in computing technologies. The program introduced me to core subjects like programming, computer architecture, operating systems, and web development.
              During the course, I gained hands-on experience with coding, working on mini-projects, and understanding how software and hardware interact. This practical approach strengthened my problem-solving skills and prepared me to tackle real-world challenges in the field of technology.
              The diploma program not only gave me an early insight into the world of computers but also laid a strong groundwork for pursuing my Bachelor's degree in Engineering. It instilled in me a passion for technology and the confidence to explore advanced concepts during my engineering journey.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC</h4>
                <h5>Schooling</h5>
              </div>
              <p>Mar 2010</p> 
            </div>
            <p>
              I completed my SSC schooling, where I developed a strong interest and aptitude in Science and Mathematics. These subjects fascinated me with their logical reasoning, problem-solving aspects, and real-world applications, shaping my analytical thinking from an early stage.
              The foundation I built during my schooling not only helped me excel academically but also prepared me for further studies in computer engineering and technology. My performance in Science and Mathematics laid the groundwork for my technical education, helping me approach complex concepts with clarity and confidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
