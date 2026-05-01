import Image from 'next/image';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="construction-page">
      <video
        className="construction-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/video/logo-video.mp4" type="video/mp4" />
      </video>
      <a
        href="https://wa.me/5519991299358"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-button"
        aria-label="Abrir conversa no WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
      <section className="construction-card">
        <p className="construction-kicker">ORTOCONEX</p>
        <div className="construction-logo-wrapper">
          <Image
            src="/images/branding/ortoconex-logo.png"
            alt="Logo da OrtoConex"
            width={220}
            height={220}
            className="construction-logo"
            priority
          />
        </div>
        <h1>Site em construção</h1>
        <p>
          Estamos preparando um novo site para apresentar nossos serviços e
          conteúdos. Em breve, teremos novidades.
        </p>
        <div className="construction-contact">
          <p className="contact-item">
            <MapPin size={18} />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Antonio+Augusto+185,+Jd+Novo+Campos+Eliseos,+Campinas+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-link"
            >
              Rua Antonio Augusto 185
              <br />
              Jd Novo Campos Eliseos, Campinas - SP
              <span className="contact-map-link-caption">Abrir no Google Maps</span>
            </a>
          </p>
          <p className="contact-item">
            <Phone size={18} />
            <a href="tel:+551922091416">19 2209-1416</a>
          </p>
          <p className="contact-item">
            <FaWhatsapp size={18} />
            <a
              href="https://wa.me/5519991299358"
              target="_blank"
              rel="noopener noreferrer"
            >
              19 99129-9358
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
