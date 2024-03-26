import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  const [isSend, setIsSend] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    setIsSend(true);
  }

  return (
    <>
      <div className="contact-container">
        <NavBar />
        {!isSend ? (
          <div className="contact-form-container">
            <h1>Get in Touch</h1>
            <p>Contact our team</p>
            <form onSubmit={submitForm}>
              <input type="email" placeholder="Email address" required />
              <textarea
                placeholder="What can we help with?"
                cols="20"
                rows="7"
                required
              />
              <button className="send-form-button">Send</button>
            </form>
          </div>
        ) : (
          <div className="message-send-container">
            <h1>Message received</h1>
            <p>
              Thank you for contacting us. Your message has been received
              successfully. We will respond within 24 hours.
            </p>
            <img
              className="message-send-image"
              src="images/message-send.png"
              alt="Message-Send"
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
