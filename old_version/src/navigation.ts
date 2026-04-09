import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '#inicio',
    },
    {
      text: 'Servicios',
      href: '#servicios',
    },
    {
      text: 'Portafolio',
      href: '#portafolio',
    },
    {
      text: 'Contacto',
      href: '#contacto',
    },
  ],
  actions: [{ text: 'Hablemos de tu proyecto', href: '#contacto', variant: 'primary' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © 2024 Jorge Ricardo · Todos los derechos reservados · Email: <a href="mailto:jorgeraudelricardo@gmail.com" class="text-blue-600 underline dark:text-muted">jorgeraudelricardo@gmail.com</a> · Tel: +971557976925
  `,
};
