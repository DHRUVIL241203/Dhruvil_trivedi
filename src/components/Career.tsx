import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Laravel Developer</h4>
                <h5>Kriyan Infotech</h5>
              </div>
              <h3>Aug 2025 – Mar 2026</h3>
            </div>
            <p>
              • Developed and maintained REST APIs for web and mobile applications using Laravel.<br />
              • Designed and optimized database structures for better performance and scalability.<br />
              • Collaborated with frontend developers to ensure seamless integration and efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack PHP Intern</h4>
                <h5>Ncode Technologies Inc.</h5>
              </div>
              <h3>Jan 2025 – Jul 2025</h3>
            </div>
            <p>
              • Developed a Hospital Management System using PHP, MySQL, and JavaScript.<br />
              • Built modules for patient management, appointment scheduling, and admin panel.<br />
              • Improved UI responsiveness and optimized application performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
