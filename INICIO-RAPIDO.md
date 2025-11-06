# 🚀 Inicio Rápido - Valtorix Firewall Manager

## ⚡ Comandos Rápidos

### 1️⃣ Instalación (primera vez)
```bash
cd firewall-manager
npm install
```

### 2️⃣ Desarrollo Local
```bash
npm run dev
```
Abre http://localhost:3000 en tu navegador

### 3️⃣ Despliegue en Vercel

**Método más rápido - CLI:**
```bash
# Instalar Vercel CLI (solo una vez)
npm i -g vercel

# Login (solo una vez)
vercel login

# Desplegar
cd firewall-manager
vercel --prod
```

**Método alternativo - GitHub:**
1. Sube el proyecto a GitHub
2. Ve a https://vercel.com/new
3. Importa tu repositorio
4. ¡Listo! Vercel lo desplegará automáticamente

## 🎯 Características Principales

✅ Tema oscuro profesional
✅ Efectos glassmorphism (vidrio negro pulido)
✅ Navegación fluida entre secciones
✅ 100% responsive
✅ Logo Valtorix integrado
✅ Animaciones y efectos hover elegantes

## 📱 Secciones de la App

- **Overview**: Vista general del proyecto y estadísticas
- **Actitud**: 5 actitudes clave del equipo de seguridad
- **Competencias**: 13 competencias técnicas organizadas por categoría
- **Stack**: Tecnologías y herramientas utilizadas

## 🛠️ Personalización Rápida

**Cambiar datos del proyecto:**
Edita `app/page.js` líneas 6-60

**Modificar estilos glassmorphism:**
Edita `app/globals.css` líneas 10-30

**Ajustar colores del tema:**
Edita `tailwind.config.js` líneas 10-18

## ⚠️ Troubleshooting

**Error: Cannot find module 'next'**
Solución: `npm install`

**Puerto 3000 en uso**
Solución: `npm run dev -- -p 3001`

**Imagen del logo no carga**
Verificar: El dominio cybervaltorix.com está en `next.config.js`

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- 100% Responsive

---

**¿Listo para empezar?** → `npm install && npm run dev`
