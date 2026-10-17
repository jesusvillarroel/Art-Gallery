# 🎨 Proyecto: Sitio Web Galería de Arte

Este proyecto consiste en el desarrollo de un sitio web responsivo para una galería de arte, desarrollado como parte de los entregables prácticos de mi curso de desarrollo frontend. El objetivo principal fue maquetar una interfaz compleja con alta fidelidad de diseño, aplicando las mejores prácticas de arquitectura CSS y automatización de despliegue.

## 🔗 Demostración en Vivo

- **Sitio Web en Producción:** [Ver Proyecto Aquí](https://jesusvillarroel.github.io/Art-Gallery/)

## 🚀 Puntos Clave de la Implementación

- **Diseño Mobile-First & Responsivo:** Adaptado meticulosamente para dispositivos móviles, tablets y pantallas de escritorio grandes (utilizando un contenedor de `111rem` de ancho seguro para garantizar simetría).
- **Estilos Modulares con Sass (SCSS):** Organización limpia basada en componentes y arquitectura modular (`@use`, variables globales y mixins avanzados para breakpoints como `@include vp.responder-a()`).
- **Layouts con CSS Grid y Flexbox:** Estructuración precisa de rejillas complejas. Destaca la unificación del Footer y la sección de contacto, que comparten la misma cuadrícula y espaciados (`column-gap: 22rem`) para lograr una alineación vertical perfecta.
- **Microinteracciones y Rendimiento:** Efectos de hover en los elementos interactivos optimizados mediante transformaciones de hardware (`transform: scale`) para transiciones fluidas sin alterar el reflujo de la página.
- **Automatización CI/CD:** Configuración de un flujo de trabajo profesional mediante **GitHub Actions** (`deploy.yaml`), lo que permite compilar el código Sass y desplegarlo de manera automatizada a producción con cada cambio.

## 🛠️ Tecnologías y Metodologías Aplicadas

- HTML5 semántico
- Sass / SCSS (Estructura modular y reutilizable)
- Maquetación avanzada (CSS Grid & Flexbox)
- Control de versiones con Git & GitHub (Historial organizado por etapas: móvil, tablet, escritorio)
- Integración Continuas (GitHub Actions)

## 💻 Configuración e Instalación Local

Si deseas clonar este proyecto y ejecutarlo en tu entorno local para revisar el código o realizar pruebas, sigue estos sencillos pasos:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta el comando de clonación:
```bash
git clone https://github.com/jesusvillarroel/Art-Gallery.git
```

### 2. Navegar a la carpeta del proyecto
```bash
cd Art-Gallery
```

### 3. Instalar las dependencias
*(Asegúrate de tener [Node.js](https://nodejs.org) instalado en tu equipo)*
```bash
npm install
```

### 4. Ejecutar el proyecto en desarrollo con Vite
Para levantar el servidor local de desarrollo y compilar de forma automática los cambios en tus archivos Sass:
```bash
npm run dev
```
*(Abre la URL local que te proporcione la terminal, usualmente `http://localhost:5173`)*

### 5. Compilar para producción
Si deseas generar la carpeta de distribución optimizada de forma manual:
```bash
npm run build
```


## 🧠 Aprendizajes Destacados

Durante el desarrollo de este proyecto, profundicé en la resolución de problemas de desalineación en layouts responsivos complejos. Aprendí cómo los paddings laterales aplicados a elementos superiores pueden romper la cascada de un ancho fijo (`width: 111rem`). Al corregir esto y optimizar la cuadrícula del Footer a tres columnas eficientes, logré dominar el control del espacio y la alineación matemática en pantallas ultra anchas (superiores a `1275px`).
