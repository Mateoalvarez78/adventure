import './FeatureSection.css'

function FeatureSection({ feature }) {
  return (
    <section
      id={feature.id}
      className={`feature section-space ${feature.reverse ? 'is-reverse' : ''}`}
    >
      <div className="feature__media">
        <img src={feature.image} alt={feature.title} />
      </div>

      <div className="feature__content">
        <p className="section-tag">Entrenamiento</p>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>

        <ul>
          {feature.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FeatureSection
