# DBS Gold Cuts

Landing page responsive de DBS Gold Cuts, desarrollada en Angular y TypeScript. No necesita backend, API ni base de datos. Las imágenes de la página están incluidas en `public/images`.

## Requisitos

- Node.js 18.19 o superior (o una versión LTS compatible con Angular 18).
- npm.

## Instalar y ejecutar

```bash
npm install
npm start
```

Abre la URL que muestra Angular CLI (normalmente `http://localhost:4200/`). Para generar la versión de producción:

```bash
npm run build
```

## Editar en Visual Studio Code

Abre esta carpeta en VS Code. El contenido y los datos de servicios, packs, equipo y preguntas se encuentran en `src/app/app.component.ts`; la estructura de la landing en `src/app/app.component.html` y sus estilos en `src/app/app.component.css`. Los elementos compartidos están en `src/app/shared`.

Todos los enlaces de reserva usan el componente `BookingLinkComponent`, que abre Trafft en una pestaña nueva en `https://barberstuk.wlbookings.com/`.
