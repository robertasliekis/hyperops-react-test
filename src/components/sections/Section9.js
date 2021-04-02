import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import emailjs from "emailjs-com";

import gtag_report_conversion from "../../functions/gtag_report_conversion";

function Section9() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("email", "template_p9xck36", e.target, "user_tnk5I7i4z3Pzm0d2B5QxQ").then(
      (result) => {},
      (error) => {}
    );
    e.target.reset();
    setMessageSent(!messageSent);
  }

  const [messageSent, setMessageSent] = useState(false);

  return (
    <HelmetProvider>
      <div className="section section9">
        <h6 className="text">Leave your details below to speak to one of our experts about the best DevOps solution for your business. </h6>
        <form className="email-container" onSubmit={sendEmail}>
          <div className="input-form">
            <input className="input" placeholder="Your email address" name="email" type="email" required />
          </div>
          <div className=" input-form input-form-message">
            <input className="input input-message" placeholder="Message (optional)" name="message" type="text" />
            <p className="email-sent" style={{ opacity: messageSent ? "1" : "0" }}>
              Email sent successfully
            </p>
          </div>
          <div className="ads-button">
            <input
              className="btn btn-round"
              type="submit"
              value="Request price"
              onClick={() => gtag_report_conversion("https://www.hyperops.net")}
            />
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=3182313&conversionId=4072449&fmt=gif"
            />
          </div>
        </form>
      </div>
    </HelmetProvider>
  );
}

export default Section9;
