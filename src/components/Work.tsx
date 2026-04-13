import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    function getScrollAmount() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container") as HTMLElement;
      const box = boxes[0] as HTMLElement;
      if (!box || !container) return 0;

      const rectLeft = container.getBoundingClientRect().left;
      const parentWidth = container.clientWidth;
      const padding = parseInt(window.getComputedStyle(box).padding) / 2;
      return (box.offsetWidth * boxes.length) - (rectLeft + parentWidth) + padding;
    }

    const workFlex = document.querySelector(".work-flex") as HTMLElement;

    const tween = gsap.to(workFlex, {
      x: () => -getScrollAmount(),
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: ".work-section",
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    // Ensure ScrollSmoother and GSAP recalculate layout dimensions after images load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { title: "MadiBook", role: "Full Stack Developer", tools: "PHP, MySQL, JavaScript", image: "/Dhruvil_trivedi/images/medibook.png" },
            { title: "Product Inventory", role: "Backend Developer", tools: "PHP, MySQL", image: "/Dhruvil_trivedi/images/inventory-management.png" },
            { title: "Chatbot System", role: "Full Stack Developer", tools: "PHP, JavaScript", image: "/Dhruvil_trivedi/images/chatbot.png" },
            { title: "AIIMS Raipur", role: "Backend Developer", tools: "REST APIs, Database", image: "/Dhruvil_trivedi/images/aiims raipur.png" },
            { title: "Flashmarket.in", role: "Laravel Developer", tools: "Laravel, MySQL", image: "/Dhruvil_trivedi/images/flashmarket.png" },
            { title: "Lexcru", role: "Backend Developer", tools: "Laravel, REST APIs", image: "/Dhruvil_trivedi/images/lexcru.png" },
            { title: "Skedulin", role: "Backend Developer", tools: "PHP, APIs", image: "/Dhruvil_trivedi/images/skedulin.png" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{index < 9 ? `0${index + 1}` : index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.role}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
