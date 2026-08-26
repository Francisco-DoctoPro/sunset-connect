# Sunset Connect

Primera versión de la web de Sunset Connect, una comunidad curada de creadores y emprendedores en Cuenca.

## Tecnologías
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- TypeScript

## Desarrollo Local

Instala las dependencias y corre el servidor de desarrollo:
```bash
npm install
npm run dev
```

La web estará disponible en [http://localhost:3000](http://localhost:3000).

## Configuración y Contenido

Todo el contenido "duro" de la página está centralizado en un único archivo de datos para que sea fácil de actualizar sin modificar componentes de UI.

Edita el archivo `src/data/config.ts` para modificar:
- **URL de Luma**: Configura el enlace al evento en `config.lumaUrl`.
- **Redes Sociales y Email**: Configura los enlaces en `config.social`.
- **Miembros (`config.members`)**: Agrega o edita los miembros de la comunidad destacada (incluyendo fotos alojadas o locales en `/public/images`).
- **Historias (`config.stories`)**: Modifica las noticias. La primera que tenga `isFeatured: true` aparecerá destacada.
- **Partners (`config.partners`)**: Agrega los logos de las instituciones auspiciantes.

### Imágenes Locales
Si deseas reemplazar los placeholders de imágenes externas de Unsplash o Wikipedia por archivos locales:
1. Guarda las imágenes optimizadas en `public/images/`.
2. En `src/data/config.ts`, actualiza la ruta, por ejemplo: `image: "/images/miembro-1.jpg"`.

### Logos y Assets Faltantes
El diseño utiliza elementos CSS como placeholders temporales para el logotipo de "Perfiles esenciales" y la animación de "Comunidad en movimiento" en el hero. Cuando tengas los SVGs definitivos:
- Reemplaza las barras animadas en `src/components/sections/Hero.tsx`.
- Reemplaza el logo en el `Header.tsx` y `Footer.tsx`.
