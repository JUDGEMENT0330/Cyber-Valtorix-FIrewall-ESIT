# 🎨 Guía de Personalización - Código de Ejemplo

## 1️⃣ Cambiar Colores del Tema

### Modificar colores principales en `tailwind.config.js`:

```javascript
// ANTES (Cyan y Blue)
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#1a1a1a',
    border: '#2a2a2a',
  },
},

// DESPUÉS (Ejemplo: Green y Teal)
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#1a1a1a',
    border: '#2a2a2a',
  },
  primary: '#10b981',  // Verde
  secondary: '#14b8a6', // Teal
},
```

### Actualizar gradientes en `app/page.js`:

```javascript
// Buscar y reemplazar:
from-cyan-400 to-blue-500
// Por:
from-green-400 to-teal-500
```

## 2️⃣ Personalizar Efectos Glassmorphism

### En `app/globals.css`, ajustar transparencia:

```css
/* MÁS TRANSPARENTE (más sutil) */
.glass-card {
  @apply bg-gradient-to-br from-white/3 to-white/[0.01] backdrop-blur-lg;
}

/* MENOS TRANSPARENTE (más visible) */
.glass-card {
  @apply bg-gradient-to-br from-white/8 to-white/[0.04] backdrop-blur-2xl;
}
```

### Ajustar intensidad del blur:

```css
backdrop-blur-sm   → 4px  (muy sutil)
backdrop-blur-md   → 12px (medio)
backdrop-blur-lg   → 16px (fuerte)
backdrop-blur-xl   → 24px (muy fuerte)
backdrop-blur-2xl  → 40px (extremo)
```

## 3️⃣ Añadir Nueva Sección

### En `app/page.js`, agregar al array de navegación:

```javascript
// Línea ~197 - Modificar el map:
{['overview', 'actitud', 'competencias', 'stack', 'contacto'].map((section) => (
  // ... código existente
))}
```

### Crear el contenido de la nueva sección:

```javascript
// Después de la línea ~365, antes del Footer:
{selectedSection === 'contacto' && (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      Contacto
    </h2>
    <div className="glass-card p-8">
      <p className="text-gray-300">
        Para consultas sobre seguridad de firewall, contacte a nuestro equipo.
      </p>
    </div>
  </div>
)}
```

## 4️⃣ Modificar Iconos y Emojis

### Cambiar iconos de actitudes:

```javascript
// En app/page.js, líneas 15-41:
const actitudes = [
  {
    rasgo: "Metódico y Riguroso",
    descripcion: "...",
    icon: "🎯"  // ← Cambiar aquí
  },
  // Opciones: 🔒 🔐 🛡️ ⚔️ 🎯 💻 🔥 ⚡ 🌟 💎 🚀
]
```

### Usar iconos de bibliotecas (opcional):

```bash
# Instalar Lucide React
npm install lucide-react
```

```javascript
// En app/page.js:
import { Shield, Lock, Brain, FileText, Zap } from 'lucide-react'

// Reemplazar emoji por componente:
<Shield className="w-6 h-6 text-cyan-400" />
```

## 5️⃣ Personalizar Animaciones

### Cambiar velocidad de fade-in en `app/page.js`:

```jsx
{/* RÁPIDO (0.3s) */}
<style jsx>{`
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
`}</style>

{/* LENTO (1s) */}
<style jsx>{`
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
`}</style>
```

### Añadir animación de entrada lateral:

```css
/* En app/globals.css: */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in-left 0.5s ease-out;
}
```

## 6️⃣ Modificar Efectos Hover

### Cambiar intensidad del brillo (shine effect):

```css
/* En app/globals.css, línea ~35 */
.shine-effect::before {
  /* MÁS BRILLANTE */
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  
  /* MENOS BRILLANTE */
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
}
```

### Ajustar escalado en hover:

```javascript
// En app/page.js, buscar clases hover:

// SUTIL
className="hover:scale-[1.01]"

// NORMAL  
className="hover:scale-[1.02]"

// NOTABLE
className="hover:scale-105"

// DRAMÁTICO
className="hover:scale-110"
```

## 7️⃣ Cambiar el Logo

### Opción 1: Usar logo local

```javascript
// 1. Colocar imagen en /public/logo.png

// 2. En app/page.js, reemplazar:
src="https://cybervaltorix.com/wp-content/uploads/2025/09/Logo-Valtorix-1.png"
// Por:
src="/logo.png"

// 3. Eliminar de next.config.js las líneas de remotePatterns
```

### Opción 2: Cambiar URL externa

```javascript
// En next.config.js, actualizar hostname:
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'tu-dominio.com',
    pathname: '/ruta/al/logo/**',
  },
],
```

## 8️⃣ Ajustar Responsive

### Modificar breakpoints de grid:

```javascript
// En app/page.js, buscar className con grid:

// Antes (1 → 2 columnas)
className="grid grid-cols-1 md:grid-cols-2 gap-6"

// Después (1 → 2 → 3 columnas)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// O (siempre 1 columna en móvil, 3 en tablet+)
className="grid grid-cols-1 lg:grid-cols-3 gap-6"
```

### Cambiar padding responsivo:

```javascript
// Buscar clases px-* y py-*:

// MÁS COMPACTO
className="px-2 sm:px-4 lg:px-6"

// MÁS ESPACIOSO
className="px-6 sm:px-8 lg:px-12"
```

## 9️⃣ Personalizar Footer

### Añadir redes sociales en `app/page.js`:

```javascript
// Después de la línea ~357, dentro del footer:
<div className="flex space-x-4 mt-4">
  <a 
    href="https://twitter.com/valtorix" 
    className="text-gray-400 hover:text-cyan-400 transition-colors"
  >
    Twitter
  </a>
  <a 
    href="https://linkedin.com/company/valtorix" 
    className="text-gray-400 hover:text-cyan-400 transition-colors"
  >
    LinkedIn
  </a>
  <a 
    href="https://github.com/valtorix" 
    className="text-gray-400 hover:text-cyan-400 transition-colors"
  >
    GitHub
  </a>
</div>
```

## 🔟 Optimizar Performance

### Cargar fuentes localmente:

```javascript
// En app/layout.js:
import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/MyFont.woff2',
  display: 'swap',
})
```

### Lazy load de secciones:

```javascript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div className="animate-pulse glass-card p-8">Cargando...</div>
})
```

---

## 📝 Tips Rápidos

1. **Usar variables CSS** para colores repetidos
2. **Testear en móvil** antes de desplegar
3. **Mantener consistencia** en espaciados
4. **Documentar cambios** en comentarios
5. **Hacer commits frecuentes** al personalizar

## 🆘 Solución Rápida de Problemas

```bash
# CSS no se actualiza
rm -rf .next && npm run dev

# Error de TypeScript
# Añadir // @ts-ignore encima de la línea problemática

# Imagen no carga
# Verificar next.config.js y consola del navegador
```

---

**¡Experimenta con estos cambios para hacer la app única! 🎨**
