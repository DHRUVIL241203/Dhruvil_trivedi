import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    // ✅ Only desktop pe smoother
    if (window.innerWidth > 1024) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,        // 🔽 reduce
        speed: 1,         // 🔽 reduce
        effects: false,   // ❌ disable heavy feature
        autoResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);
    }

    let links = document.querySelectorAll(".header ul a");

    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024 && smoother) {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        smoother.scrollTo(section, true, "top top");
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", resizeHandler);

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });

      window.removeEventListener("resize", resizeHandler);

      smoother?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img
            src="/images/Yellow and Black Simple Professional LinkedIn Profile Picture (1).png"
            alt="Dhruvil"
            style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover" }}
          />
        </a>
        <a
          href="mailto:trivedidhruvil24@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          trivedidhruvil24@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
