import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jorge",
  lastName: "Ricardo",
  name: `Jorge Ricardo`,
  role: "Arquitecto de Soluciones | DXB",
  avatar: "/images/avatar.jpg",
  email: "secure@architect.dxb",
  location: "Asia/Dubai", 
  languages: ["Español", "Inglés"], 
};

const newsletter: Newsletter = {
  display: true,
  title: <>Suscríbete al boletín de {person.firstName}</>,
  description: <>Mi boletín semanal sobre creatividad, ingeniería y automatización.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jorge0902",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `Portafolio de ${person.name} | Automatización e Ingeniería`,
  description: `Sitio web de portafolio que muestra mi trabajo como ${person.role}`,
  headline: <>Ingeniería de Crecimiento: <br/>Sistemas Web y Automatización Odoo.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Estado del Sistema:</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Optimizado
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    Interfaces premium + automatización backend. Arquitecturando la infraestructura digital para los líderes de la próxima generación en Dubái.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre Mí",
  title: `Sobre – ${person.name}`,
  description: `Conoce a ${person.name}, ${person.role} basado en ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Jorge es un arquitecto de soluciones basado en Dubái con pasión por transformar desafíos complejos
        en soluciones de diseño simples y elegantes. Su trabajo abarca interfaces digitales, experiencias
        interactivas y la convergencia de la tecnología y los negocios.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Experiencia Profesional",
    experiences: [
      {
        company: "DXB Automation",
        timeframe: "2022 - Presente",
        role: "Arquitecto Senior de Soluciones",
        achievements: [
          <>
            Rediseñé la arquitectura de automatización para clientes clave en Dubái, resultando en un aumento del 40% en la eficiencia operativa.
          </>,
          <>
            Lideré la integración de módulos personalizados de Odoo para empresas logísticas de gran escala.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Estudios",
    institutions: [
      {
        name: "Ingeniería de Sistemas",
        description: <>Especialización en automatización de procesos y desarrollo web escalable.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Automatización Odoo",
        description: (
          <>Implementación de flujos de trabajo inteligentes y personalizados para ERP.</>
        ),
        tags: [
          {
            name: "Odoo",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Desarrollo Next.js",
        description: (
          <>Construyendo aplicaciones de próxima generación con tecnologías modernas.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre tecnología y automatización...",
  description: `Lee lo que ${person.name} ha estado haciendo recientemente`,
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Proyectos de desarrollo y diseño por ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería de fotos – ${person.name}`,
  description: `Una colección de fotos por ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
