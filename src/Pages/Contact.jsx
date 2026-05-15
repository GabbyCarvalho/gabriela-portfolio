import "../styles/contact.css";
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

const contactItems = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "gabrielacarvalho.tech@gmail.com",
    link: "mailto:gabrielacarvalho.tech@gmail.com",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "/gabriela-carvalho-santos",
    link: "https://www.linkedin.com/in/gabriela-carvalho-santos/",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/GabbyCarvalho",
    link: "https://github.com/GabbyCarvalho",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "São Paulo, Brazil · Open to Remote",
    link: null,
  },
];

export default function Contact() {
  return (
    <main className="contact">

      <section className="contactHeader">
        <p className="contactPre"><span className="prompt">&gt;</span> contact.init()</p>
        <h1 className="contactTitle">Let's work <span>together.</span></h1>
        <p className="contactSub">
          I'd love to connect and learn how I can bring value to your team or project.
          Looking forward to hearing from you!
        </p>
      </section>

      <section className="contactGrid">

        <div className="contactInfo">
          <h2 className="contactInfoTitle">Get in touch</h2>
          <p className="contactInfoText">
            Whether you have a project in mind, a question, or just want to say hi —
            my inbox is always open. I'll do my best to get back to you as soon as possible.
          </p>

          <div className="contactLinks">
            {contactItems.map((item) => (
              <div className="contactLinkItem" key={item.label}>
                <span className="contactLinkIcon">{item.icon}</span>
                <div>
                  <p className="contactLinkLabel">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="contactLinkValue">
                      {item.value}
                    </a>
                  ) : (
                    <p className="contactLinkValue plain">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contactFormWrap">
          <h2 className="contactInfoTitle">Send a message</h2>
          <form
            className="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:gabrielacarvalho.tech@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(
                e.target.message.value
              )}`;
            }}
          >
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="submitBtn">
              Send message <FiMail size={15} />
            </button>
          </form>
        </div>

      </section>

    </main>
  );
}
