import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";

function HeroSlider({ slides }) {
  return (
    <section id="inicio" className="hero-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="hero-slider__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <article className="hero-slide">
              {slide.type === "promo" ? (
                // Slide de promoción con contenido estático diseñado
                <div className="hero-slide__promo">
                  <div
                    className="hero-slide__promo-bg"
                    style={{ backgroundImage: `url(${slide.media})` }}
                  />
                  <div className="hero-slide__overlay" />
                  <div className="hero-slide__promo-content">
                    <div className="promo__header">
                      <h2 className="promo__title">{slide.title}</h2>
                    </div>
                    <div className="promo__features">
                      <p className="promo__description">{slide.description}</p>
                      <p className="promo__subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="promo__pricing">
                      <p className="promo__price">{slide.price}</p>
                      <p className="promo__validity">{slide.validity}</p>
                    </div>
                    <div className="promo__payment">
                      <p className="promo__label">PODES ABONAR:</p>
                      <ul className="promo__methods">
                        {slide.paymentMethods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="promo__footer">
                      <div className="promo__info">
                        <strong>{slide.contact}</strong>
                        <p>{slide.address}</p>
                        <p>{slide.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : slide.type === "video" ? (
                // Estructura lista para reemplazar imagenes por videos en cada slide.
                <video
                  className="hero-slide__media"
                  src={slide.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div
                  className={`hero-slide__media hero-slide__media--image ${index === 0 ? "hero-slide__media--first" : ""}`}
                  style={{ backgroundImage: `url(${slide.media})` }}
                />
              )}

              <div className="hero-slide__overlay" />

              <div className="hero-slide__content">
                <p className="hero-slide__eyebrow">Gimnasio Aventur</p>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <a href={slide.ctaLink} className="hero-slide__cta">
                  {slide.ctaLabel}
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
