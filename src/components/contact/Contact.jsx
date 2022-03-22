import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/yellow-flowers2.jpg" alt="" />
      </div>
      <div className="right">
        <h2>contact.</h2>
        <h3>I'd love to hear from you!</h3>
        <div className="paint-smear">
          <img src="assets/paint-smear.png" alt=""></img>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}