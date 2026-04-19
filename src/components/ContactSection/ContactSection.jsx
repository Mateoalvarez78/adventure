import { useState } from 'react'
import './ContactSection.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Ingresa tu nombre.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Ingresa tu email.'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      nextErrors.email = 'Ingresa un email valido.'
    }
    if (!formData.message.trim()) nextErrors.message = 'Escribe un mensaje breve.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formErrors = validateForm()
    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) {
      setStatus('error')
      return
    }

    // Base lista para conectar a backend o API de email en el futuro.
    setStatus('success')
    setFormData(initialForm)
  }

  return (
    <section id="contacto" className="contact section-space">
      <div className="contact__wrapper">
        <div>
          <p className="section-tag">Contacto</p>
          <h2>Recibi asesoramiento personalizado</h2>
          <p>
            Dejanos tus datos y te ayudamos a elegir el plan ideal para tus
            objetivos.
          </p>
        </div>

        <form className="contact__form" noValidate onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@email.com"
            />
            {errors.email && (
              <span className="contact__error">{errors.email}</span>
            )}
          </label>

          <label>
            Telefono
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Opcional"
            />
          </label>

          <label>
            Mensaje
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Contanos que objetivo te gustaria trabajar"
            />
            {errors.message && (
              <span className="contact__error">{errors.message}</span>
            )}
          </label>

          <button type="submit">Enviar</button>

          {status === 'success' && (
            <p className="contact__status contact__status--success">
              Mensaje enviado. En breve te contactaremos.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status contact__status--error">
              Revisa los campos marcados antes de enviar.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
