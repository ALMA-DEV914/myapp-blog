import React from "react";
import bg from "../assets/hero.png";
import food from "../assets/food.png";
import writingJob from "../assets/PaidOnlineWritingJobsl-e1594729647803.png";
import mentor from "../assets/abt-img.png";
import creative from "../assets/74-Creative-Drawing-Tutorial-For-Children-01.png";

function Home() {
  return (
    <>
      <div className="container mt-4 pb-4 mb-4">
        <div className="row">
          <h5 className="card-title display-3 fw-bolder mb-4 py-2">
            Dare to be great, exercise and stay fit
          </h5>
          <p className="lead-text">
            {" "}
            Conscious, healthy living can be difficult to implement, much less
            maintain. If you are one of those, like us, who tries their darndest
            to eat right, sleep enough, and properly hydrate but, falls off the
            wagon from time to time, this site is for you. Take these as an
            inspiration to stay the course with the positive habits you have put
            into place! “Create healthy habits, not restrictions.”
          </p>
          <div className="col-sm-4">
            <div className="fakeimg">
              <img src={food} alt="food" width="100%"></img>
            </div>
            <p>
              If you are trying to improve your diet, health experts recommend
              you try to monitor how much you eat each day, eat a wide variety
              of foods, base your diet on cereals and whole grains, and increase
              fruit and vegetable consumption.
            </p>
            <p>
              {" "}
              Also, drink plenty of water and reduce consumption of fat, salt
              and sugar. Your thoughts make a big difference, so try to maintain
              a mindset that inspires healthier eating. If you’re trying to
              change your eating habits but slip up and mindlessly eat, get back
              up and keep trying.
            </p>
          </div>
          <div className="col-sm-8">
            <div className="fakeimg">
              <img src={bg} className="card-img" alt="background" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4 justify-content-center mt-4">
        <h1>Things You Might be Interested</h1>
      </div>
      <div className="container mb-4">
        <div className="row">
          <div className="col bg-dark text-white text-center">
            <h3>Looking For A REAL Online Job?</h3><br></br>
            <img src={writingJob} alt="job" width="100%" /><br></br><br></br>
            <a href="https://bit.ly/3SAyFDj">
              We need more Paid Writers From United States{" "}
            </a><br></br><br></br>
            <p>
              You have experience writing professionally and enjoy writing in your spare time and am passionate about it.
             You are a keen learner
            </p>
            <p>
              Familiar with posting on social media Familiar with writing on a
              laptop, tablet or PC Experience using Microsoft Word or similar
              word processor Able to write clearly Good grammar, spelling and
              punctuation Good email communication Able to closely follow
              instructions Motivated when working remotely/independently
            </p>
          </div>
          <div className="col text-center bg-secondary text-white">
            <h3>Home New - 1000pip Builder</h3>
            <a href="https://bit.ly/3xTs7Yk">Home New - 1000pip Builder</a>
            <p>
              Meet your Forex mentor Bob James – Lead Trader - Over 10 years
              Forex trading experience Bob is the lead trader behind 1000pip
              Builder.
            </p>
            <img src={mentor} alt="mentor-bob" width="280px" height="280px" />
            <p>
              Trusted Forex Signals Your Success Starts Here Accurate Forex
              signals, independently verified results and much more ...
            </p>
          </div>
          <div className="col text-center bg-dark text-white ">
            <h3>74 Creative Drawing Tutorial For Children</h3>

            <a href="https://bit.ly/3rb8l76">
              4 Creative Drawing Tutorial For Children
            </a>
            <p>
              #1 Best Seller in Conceptual Arts and Children's Drawing Books
            </p>
            <img src={creative} alt="book" width="280px" height="280px" />

            <p>
              Turn creativity into ability. The activities in The Drawing Book
              for Kids book help kids turn their love of drawing into skill.
              With tips on how to draw, easy techniques, and tons of ideas, soon
              they will be able to take their creativity to a new level. If your
              kids are fascinated by art, sketching, or just want to learn how
              to draw cute illustrations, this book provides easy drawing ideas
              step-by-step!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
