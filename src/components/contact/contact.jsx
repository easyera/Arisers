import "./contact.css";

export default function ContactSection() {
  const recipient = "inventflex@gmail.com";
  const subject = "Project Discussion";
  const body =
    "Hello, my name is [your name], and my email address is [your email]. I would like to discuss this project.";

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  
  return (
    <div className="contact-section" id="contact">
      <div className="contact-details">
        <h2>Meet us</h2>
        <p>📞 +919159783185</p>
        <p>📧 inventflex@gmail.com</p>
        {/* <p>📍 Amman St, no 35, 4th floor, ap 10, Bucharest</p> */}
      </div>
      <div className="pitch-form">
        <h2>Contact us</h2>
        <p>
          hello, <br />
          my name is <strong>your name</strong> and my e-mail address is{" "}
          <strong>your email</strong>. I would like to discuss about my
          project.
        </p>
        <a
          href={gmailURL}
          target="_blank"
          rel="noopener noreferrer"
          className="send-button"
        >
          send
        </a>
      </div>
    </div>
  );
}
