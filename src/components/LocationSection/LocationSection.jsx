import "./LocationSection.css";

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.522918757937!2d-55.5800151!3d-34.7676089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ffdcfd4092d23%3A0xe8203a5966fc26f8!2sGimnasio%20AVENTUR!5e0!3m2!1ses!2suy!4v1776729161232!5m2!1ses!2suy"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
