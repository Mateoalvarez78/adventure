import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const iconByLabel = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  WhatsApp: FaWhatsapp,
  TikTok: FaTiktok,
};

function Footer({ info }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <a className="footer__brand" href="#inicio">
            Adventur
          </a>
          <p>{info.tagline}</p>
        </div>

        <div className="footer__socials" aria-label="Redes sociales">
          {info.socialLinks.map((item) => {
            const Icon = iconByLabel[item.label];

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                {Icon ? <Icon /> : item.label}
              </a>
            );
          })}
        </div>

        <div className="footer__links">
          <a href="#contacto">Contacto</a>
          <a href="#ubicacion">Ubicacion</a>
          <a href="#inicio" className="footer__top">
            <FaArrowUp /> Volver arriba
          </a>
        </div>
      </div>
      <p className="footer__legal">{info.legalText}</p>
    </footer>
  );
}

export default Footer;
