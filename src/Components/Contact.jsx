import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      <div className="contact-info">
        <div className="contact-me-msg">
          <p>
            Hello there, feel free to contact me at any time, I will get back to
            you within 48hrs and if it's urgent, reaching me through my social
            handle would be better in situations like this.
          </p>
          <p>
            <b>
              Email:
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="harunajubril07@gmail.com"
              >
                harunajubril07@gmail
              </a>
            </b>
          </p>
        </div>
        <div className="email">
          <input type="text" placeholder="Your Name" />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />{" "}
          <br />
          <br />
          <textarea
            name="msg"
            id="msg"
            cols="40"
            rows="10"
            placeholder="Your Message...."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
