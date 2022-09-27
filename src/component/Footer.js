import React from "react";

function Footer() {
  return (
    <>
    <footer className="footer bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Our Story</h5>
            <p>
            When we think about getting healthier and managing various problems conditions, one of the suggestions that always pops up is diet or exercises. Healthy diet is a very crucial part of how we recover, manage our healthy life-style, and make progress. Health@Wellness was created for your custom and generic search for a healthy diet plan.
            </p>
          </div>
          <div className="col">
            <h5>Contact Us</h5>
            <a href="mailto:aungonalna58@gmail.com">health@wellness@gmail.com</a>
            <p>Phone: 7757425989</p>
            <p>Copyright @2022 The health&Wellness - All Rights Reserved</p>
          </div>
          <div className="col">
            <h4>Location</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.0366059328876!2d-119.73748578440672!3d39.44590462202996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809915a5bf6aa023%3A0xd06aa1b132485903!2s1845%20Badlands%20Dr%2C%20Reno%2C%20NV%2089521!5e0!3m2!1sen!2sus!4v1664233387307!5m2!1sen!2sus"
                  width="400"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="location"
                ></iframe>
              </div>
            </div>
            </div>
            </footer>
            <p className="disclaimer">USE AT YOUR OWN RISK: This website is for informational purposes only. Any exercise/diet program may result in injury or health problems. Consult a physician before performing  od using any exercise/diet program, including the programs on this website. The information provided on this website is provided “AS-IS” with NO WARRANTIES. WE DISCLAIM AND ASSUME NO LIABILITY FOR ANY INJURY OR DAMAGES incurred by any person as a result of the use or misuse of any of the information or content on this website. By voluntarily undertaking any exercise displayed on this website, you assume the risk of any resulting injury.</p>
          
    </>
  );
}
export default Footer;
