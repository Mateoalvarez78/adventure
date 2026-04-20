export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Sala de musculacion", href: "#musculacion" },
  { label: "CrossFit", href: "#crossfit" },
  { label: "Ubicacion", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export const heroSlides = [
  {
    id: 1,
    type: "image",
    media:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80",
    title: "Tu mejor version empieza hoy",
    subtitle: "Entrena con energia y constancia en Adventur.",
    ctaLabel: "Sumate hoy",
    ctaLink: "#contacto",
  },
  {
    id: 2,
    type: "image",
    media:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=80",
    title: "Equipamiento de alto rendimiento",
    subtitle: "Espacios disenados para progresar en cada rutina.",
    ctaLabel: "Conocer planes",
    ctaLink: "#beneficios",
  },
  {
    id: 3,
    type: "image",
    media:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80",
    title: "Comunidad que te impulsa",
    subtitle: "Entrenadores y clases para superar tus limites.",
    ctaLabel: "Reservar clase",
    ctaLink: "#contacto",
  },
];

export const benefitsSection = {
  title: "Entrena en un gimnasio pensado para vos",
  description:
    "Combinamos tecnologia, acompanamiento profesional y un clima motivador para que entrenar sea parte de tu estilo de vida.",
  image:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
  items: [
    "Equipamiento moderno",
    "Entrenadores capacitados",
    "Ambiente motivador",
    "Planes accesibles",
    "Actividades variadas",
  ],
};

export const featureSections = [
  {
    id: "musculacion",
    title: "Sala de musculacion",
    description:
      "Un espacio completo para entrenar fuerza con maquinas, peso libre y seguimiento personalizado.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Entrenamiento de fuerza",
      "Rutinas personalizadas",
      "Maquinas y peso libre",
      "Progreso fisico medible",
    ],
    reverse: true,
  },
  {
    id: "crossfit",
    title: "CrossFit",
    description:
      "Clases intensas y dinamicas para mejorar tu condicion fisica general en un entorno de apoyo constante.",
    image:
      "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Mejora de resistencia",
      "Entrenamiento funcional",
      "Clases dinamicas",
      "Trabajo en comunidad",
      "Superacion personal",
    ],
    reverse: false,
  },
];

export const locationInfo = {
  title: "Donde estamos",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Av.+Corrientes+1234,+Buenos+Aires&output=embed",
  note: "Reemplazar mapEmbedUrl por la URL real de Google Maps cuando la tengas definida.",
  address: "Av. Corrientes 1234",
  city: "Buenos Aires, Argentina",
  phone: "+54 11 5555-0000",
  schedule: "Lunes a Sabado de 7:00 a 22:00",
};

export const footerInfo = {
  tagline: "Entrena, superate y vivi la experiencia Adventur.",
  legalText: `© ${new Date().getFullYear()} Adventur. Todos los derechos reservados.`,
  socialLinks: [
    {
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5491100000000",
    },
    {
      label: "TikTok",
      href: "https://tiktok.com",
    },
  ],
};
