import React from "react";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="container1">
        <div className="left-space"></div>
        <h1 className="typing-text"> Digital Recruitment Solution</h1>
        <div className="right-space"></div>
      </div>
      <br />
      <hr />
      <br />
      <div className="container3">
        <img
          className="image"
          src="https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png"
          alt="team Work"
        />
      </div>
      <br />
      <p>
        Our digital recruitment solution is designed to revolutionize the hiring
        process and provide a seamless experience for multiple MNCs.
        <br /> With cutting-edge technology and user-friendly features,
        <br /> we aim to transform the way organizations find and hire top
        talent.
      </p>

      <hr className="line" />
      <div className="feature">
        <h2>Key Features:</h2>
        <ul>
          <li>
            Smart Job Matching: Our platform uses advanced algorithms to match
            job seekers with relevant job openings, ensuring better alignment
            between candidates and positions.
          </li>
          <li>
            Efficient Applicant Tracking: Easily manage and track candidates
            throughout the recruitment process, from initial application to
            final selection, all within a single intuitive interface.
          </li>
          <li>
            Automated Screening: Save time and effort with automated candidate
            screening, allowing you to focus on qualified candidates and reduce
            manual screening tasks.
          </li>
          <li>
            Seamless Collaboration: Enable seamless collaboration among hiring
            managers, recruiters, and other stakeholders with integrated
            communication tools and real-time updates.
          </li>
          <li>
            Data-Driven Insights: Leverage data analytics and reporting to gain
            valuable insights into your hiring process, identify bottlenecks,
            and make data-driven decisions to optimize recruitment strategies.
          </li>
          <li>
            Enhanced Candidate Experience: Provide candidates with a
            user-friendly interface, intuitive application process, and
            personalized communication to create a positive and engaging
            candidate experience.
          </li>
        </ul>
      </div>

      <div className="cta">
        <h2>Experience the Future of Recruitment Today!</h2>
        <p>
          Ready to streamline your hiring process and find the perfect
          candidates for your organization?
        </p>
        <a href="contact.html" className="cta-button">
          Get Started
        </a>
      </div>
    </>
  );
}
