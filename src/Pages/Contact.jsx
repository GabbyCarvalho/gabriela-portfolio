import "../styles/contact.css";
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { useLang } from "../LanguageContext";
import { t } from "../i18n";

export default function Contact() {
  const { lang } = useLang();
  const c = t.contact;

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
      label: lang === "en" ? "Location" : "Localização",
      value: c.location[lang],
      link: null,
    },
  ];

  return (
    <main className="contact">

      <section className="contactHeader">
        <p className="contactPre">{c.pre[lang]}</p>
        <h1 className="contactTitle">{c.title[lang]} <span>{c.titleSpan[lang]}</span></h1>
        <p className="contactSub">{c.sub[lang]}</p>
      </section>

      <section className="contactGrid">

        <div className="contactInfo">
          <h2 className="contactInfoTitle">{c.getInTouch[lang]}</h2>
          <p className="contactInfoText">{c.infoText[lang]}</p>

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
          <h2 className="contactInfoTitle">{c.sendMsg[lang]}</h2>
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
              <label htmlFor="name">{c.name[lang]}</label>
              <input id="name" name="name" type="text" placeholder={c.namePh[lang]} required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">{c.email[lang]}</label>
              <input id="email" name="email" type="email" placeholder={c.emailPh[lang]} required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">{c.message[lang]}</label>
              <textarea id="message" name="message" rows={5} placeholder={c.messagePh[lang]} required />
            </div>
            <button type="submit" className="submitBtn">
              {c.send[lang]} <FiMail size={15} />
            </button>
          </form>
        </div>

      </section>

    </main>
  );
}