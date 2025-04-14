import React from "react";

function AboutMe() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">About Me</h1>
          <p className="lead">
            Hi, I'm Farzan Shaikh, a passionate web developer skilled in crafting
            modern, responsive, and user-friendly websites. I love solving
            real-world problems through code and constantly strive to improve my
            skills.
          </p>
          <img
            src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg"
            alt="Your Avatar"
            className="img-fluid rounded-circle mt-4"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
