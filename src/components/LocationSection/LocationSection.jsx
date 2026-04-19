import './LocationSection.css'

function LocationSection({ info }) {
  return (
    <section id="ubicacion" className="location section-space">
      <div className="location__container">
        <div className="location__info">
          <p className="section-tag">Ubicacion</p>
          <h2>{info.title}</h2>
          <p className="location__note">{info.note}</p>

          <ul>
            <li>
              <strong>Direccion:</strong> {info.address}
            </li>
            <li>
              <strong>Ciudad:</strong> {info.city}
            </li>
            <li>
              <strong>Telefono:</strong> {info.phone}
            </li>
            <li>
              <strong>Horario:</strong> {info.schedule}
            </li>
          </ul>
        </div>

        <div className="location__map-wrapper">
          <iframe
            className="location__map"
            src={info.mapEmbedUrl}
            title="Mapa de ubicacion Adventur"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default LocationSection
