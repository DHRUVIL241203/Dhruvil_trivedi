import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:trivedidhruvil24@gmail.com" data-cursor="disable">
                trivedidhruvil24@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919510411795" data-cursor="disable">
                +91 95104 11795
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/DHRUVIL241203"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruviltrivedi4ab247286"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Dhruvil Trivedi</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
