import React, { useState } from "react";
import emailjs from "emailjs-com";

import SectionTitle from "./SectionTitle";

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

  const list = [
    [
      "Our web applications provide time-sensitive information to our global financial industry customers, and as such, they have to meet the highest requirements for availability and security at all times. HyperOps team’s technical assistance and knowledge of our business logic are invaluable and their dedication to keeping systems running 24×7 is unmatched.",
      "Karl Mallalieu",
      "Managing Director, Bond Radar Limited, London, UK"
    ],
    [
      "We are extremely happy with the quality of the services and the high technical standards provided by Metasite HyperOps as well as their responsiveness in the day-to-day business.",
      "Dr. Jochen Kraatz",
      "Managing Director, ARENSIA GmbH, Dusseldorf, Germany"
    ],
    [
      "Their incident reaction times were almost always under 10 minutes. I can confidently recommend HyperOps to anyone in need of the flawless operation of their critical systems. We are very happy with our relationship and the level of services HyperOps provides",
      "Algirdas Petrauskas",
      "CTO, Beta.lt + Grupinis.lt, Vilnius, Lithuania"
    ],
    [
      "Our web applications provide time-sensitive information to our global financial industry customers, and as such, they have to meet the highest requirements for availability and security at all times. HyperOps team’s technical assistance and knowledge of our business logic are invaluable and their dedication to keeping systems running 24×7 is unmatched.",
      "Karl Mallalieu",
      "Managing Director, Bond Radar Limited, London, UK"
    ]
  ];

  return (
    <div className="section section7 section-clients">
      <SectionTitle center={false} sectionIndex={7} />
      <div className="text-box text-box1">
        <div className="qoute-image"></div>
        <div className="overflow-wrapper">
          <div className="text-carousel">
            {list.map((listItem, index) => (
              <div className="text-qoute" key={index}>
                <p>{`"${listItem[0]}"`}</p>
                <p className="name">{listItem[1]}</p>
                <p>{listItem[2]}</p>
                <div className="lines-image">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-box text-box2">
        <p>Join our customers and give our DevOps as a Service a try today.</p>
        <p>
          Once you see how we can change your workflow, you won't want to go back. Enter your email address below to sign up for your free
          demo.
        </p>
      </div>
      <form className="email-container" onSubmit={sendEmail}>
        <div className="input-form">
          <input className="input" placeholder="Your email address" name="email" type="email" required />
          <p className="email-sent" style={{ opacity: messageSent ? "1" : "0" }}>
            Email sent successfully
          </p>
        </div>
        <div className="ads-button">
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
