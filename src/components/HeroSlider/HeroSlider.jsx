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
        autoplay={{ delay: 500000, disableOnInteraction: false }}
        className="hero-slider__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <article className="hero-slide">
              {slide.type === "video" ? (
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
