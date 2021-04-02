import React, { useState } from "react";
import emailjs from "emailjs-com";

function Section7() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("email", "template_ji6ru88", e.target, "user_tnk5I7i4z3Pzm0d2B5QxQ").then(
      (result) => {},
      (error) => {}
    );
    e.target.reset();
    setMessageSent(!messageSent);
  }

  const [messageSent, setMessageSent] = useState(false);

  return (
    <div className="section section7 section4b">
      <div className="section-title section-title-side">
        <h5>{window.innerWidth > 450 ? "Curious to give it a try?" : "Curious to try?"}</h5>
        <h4>99% who test our platform, stay.</h4>
      </div>
      <form className="email-container" onSubmit={sendEmail}>
        <div className="input-form">
          <input className="input" placeholder="Your email address" name="email" type="email" required />
          <p className="email-sent" style={{ opacity: messageSent ? "1" : "0" }}>
            Email sent successfully
          </p>
        </div>
        <div className="ads-button" onClick={() => {}}>
          <input className="btn btn-round" type="submit" value="Get demo account" />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=3182313&conversionId=4072441&fmt=gif"
          />
        </div>
      </form>
    </div>
  );
}

export default Section7;
