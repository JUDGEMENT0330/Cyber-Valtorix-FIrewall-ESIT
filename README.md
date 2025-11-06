# 🔥 Valtorix Firewall Manager

Una aplicación web moderna para gestionar configuraciones de firewall con Next.js, React y Tailwind CSS. Incluye tema oscuro con efectos glassmorphism y diseño elegante.

## ✨ Características

- **Tema Oscuro Elegante**: Diseño moderno con efectos de vidrio negro pulido (glassmorphism)
- **Efectos Hover Interactivos**: Transiciones suaves y animaciones en tarjetas
- **Responsive**: Optimizado para todos los dispositivos
- **Secciones Dinámicas**: Navegación fluida entre Overview, Actitud, Competencias y Stack Tecnológico
- **Logo Valtorix**: Integración del logo oficial con efectos shine

## 🚀 Instalación

### Requisitos previos
- Node.js 18.x o superior
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**:
```bash
cd firewall-manager
npm install
```

2. **Ejecutar en modo desarrollo**:
```bash
npm run dev
```

3. **Abrir en el navegador**:
```
http://localhost:3000
```

## 📦 Despliegue en Vercel

### Opción 1: Despliegue desde la interfaz de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Importa tu repositorio de Git
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"

### Opción 2: Despliegue con Vercel CLI

1. **Instalar Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login en Vercel**:
```bash
vercel login
```

3. **Desplegar**:
```bash
cd firewall-manager
vercel
```

4. **Desplegar a producción**:
```bash
vercel --prod
```

## 📁 Estructura del Proyecto

```
firewall-manager/
├── package.json          # Dependencias y scripts
├── next.config.js        # Configuración de Next.js
├── tailwind.config.js    # Configuración de Tailwind CSS
├── postcss.config.js     # Configuración de PostCSS
├── .gitignore           # Archivos ignorados por Git
└── app/
    ├── layout.js        # Layout principal
    ├── page.js          # Página principal con toda la lógica
    └── globals.css      # Estilos globales y glassmorphism
```

## 🎨 Tecnologías Utilizadas

- **Next.js 14**: Framework React para producción
- **React 18**: Biblioteca de UI
- **Tailwind CSS**: Framework de CSS utilitario
- **Glassmorphism**: Efectos de vidrio modernos

## 🔧 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta el linter
```

## 🌐 Variables de Entorno

No se requieren variables de entorno para este proyecto. La imagen del logo se carga desde la URL pública de Valtorix.

## 📝 Personalización

### Cambiar colores
Edita `tailwind.config.js` para modificar la paleta de colores.

### Modificar efectos glassmorphism
Edita las clases `.glass-card` y `.glass-card-dark` en `app/globals.css`.

### Actualizar contenido
Modifica los datos en `app/page.js` dentro de los objetos `proyecto`, `actitudes` y `competencias`.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de Valtorix.

## 📞 Soporte

Para soporte y preguntas, visita [cybervaltorix.com](https://cybervaltorix.com)

---

Desarrollado con ❤️ por el equipo de Valtorix
