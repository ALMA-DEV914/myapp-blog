import React from "react";
import bg from "../assets/pexels-photo-1640770.jpeg";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-dark border-0">
        <img src={bg} className="card-img" alt="background" height="800px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0 py-2">Dare to be great, exercise and stay fit</h5>
          <p className="card-text lead fs-3 p-4">
          Conscious, healthy living can be difficult to implement, much less maintain. If you are one of those, like us, who tries their darndest to eat right, sleep enough, and properly hydrate but, falls off the wagon from time to time, this site is for you. Take these as an inspiration to stay the course with the positive habits you have put into place! “Create healthy habits, not restrictions.”
          </p>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
