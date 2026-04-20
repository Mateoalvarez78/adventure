import "./BenefitsSection.css";

function BenefitsSection({ content }) {
  return (
    <section id="beneficios" className="benefits section-space">
      <div className="benefits__media">
        <img src={content.image} alt="Zona de entrenamiento en Adventur" />
      </div>

      <div className="benefits__content">
        <p className="section-tag">Beneficios</p>
        <h2>{content.title}</h2>
        <p>{content.description}</p>

        <ul>
          {content.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BenefitsSection;
