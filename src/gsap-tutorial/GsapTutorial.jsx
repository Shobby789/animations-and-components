import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { useGSAP } from "gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapTutorial = () => {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/${i + 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/${i}.jpg`} alt="" />
          </div>
        </div>
      );
    }
    return rows;
  };

  const boxRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 50 }, // Initial state (before scroll)
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // When element reaches 80% of viewport
          end: "top 50%", // Animation ends at 50%
          scrub: false, // Set `true` for smooth animation while scrolling
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0.4 },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <ReactLenis root>
      <section className="hero">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1738936339590-ea1fc8bd9732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
      <section className="main">
        <div className="main-content">
          <div className="logo">
            <img src="" alt="" />
          </div>

          <div className="copy">
            <div className="line">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                cumque?
              </p>
            </div>
            <div className="line">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                cumque?
              </p>
            </div>
            <div className="line">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                cumque?
              </p>
            </div>
          </div>

          <div className="btn">
            <button type="button">Get PRO</button>
          </div>
        </div>
        {generateRows()}
      </section>
      <section className="footer">
        {/* <Link to="/" ref={boxRef} className="link">
          Link in description.
        </Link> */}
        <Link to="/" ref={boxRef} className="link">
          {"Link in description.".split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => (textRef.current[index] = el)}
              className="inline-block opacity-0"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </Link>
      </section>
    </ReactLenis>
  );
};

export default GsapTutorial;
