import React from "react";
import "../css/Footer.css";
import "../css/common.css";
import mainSiteLogo from "../images/logo_mainsite.png";
import { CONTACTS, GLOBAL_OFFICES, FOOTER_LINKS } from "./mocks";

const Footer: React.FC = (props) => {
  return (
    <div className="footerWrapper">
      <img src={mainSiteLogo} alt="site logo" />
      <div className="linksWrapper">
        <h2>Stay Updated</h2>
        <div>
          {FOOTER_LINKS.map((link) => (
            <p key={link.label}>
              <a href={link.link}>{link.label}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="contactsWrapper">
        <h2>{CONTACTS.label}</h2>
        {CONTACTS.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
        <h2>Global Offices</h2>
        {GLOBAL_OFFICES.map((office) => (
          <>
            <h3 key={office.label}>{office.label}</h3>
            {office.details.map((detail) => (
              <p>{detail}</p>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
