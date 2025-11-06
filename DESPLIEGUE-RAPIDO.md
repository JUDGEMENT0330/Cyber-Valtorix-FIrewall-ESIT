# 🚀 DESPLIEGUE RÁPIDO - 3 OPCIONES

## ⚡ OPCIÓN 1: Script Automatizado (RECOMENDADO)

### En Linux/Mac:
```bash
./deploy.sh
```

### En Windows:
```cmd
deploy.bat
```

El script hará todo automáticamente:
- ✅ Instalar dependencias
- ✅ Construir el proyecto
- ✅ Desplegar en Vercel

---

## 🎯 OPCIÓN 2: Despliegue Manual Rápido

### Paso 1: Instalar dependencias
```bash
npm install
```

### Paso 2: Construir el proyecto
```bash
npm run build
```

### Paso 3: Desplegar en Vercel
```bash
# Instalar Vercel CLI (solo primera vez)
npm i -g vercel

# Login en Vercel (solo primera vez)
vercel login

# Desplegar a producción
vercel --prod
```

---

## 🌐 OPCIÓN 3: Despliegue vía GitHub + Vercel

### Paso 1: Subir a GitHub
```bash
# Inicializar git (si no existe)
git init

# Añadir archivos
git add .

# Commit
git commit -m "Initial commit - Valtorix Firewall Manager"

# Añadir remote (sustituye con tu repo)
git remote add origin https://github.com/tu-usuario/firewall-manager.git

# Push
git push -u origin main
```

### Paso 2: Conectar con Vercel
1. Ve a https://vercel.com/new
2. Click en "Import Git Repository"
3. Selecciona tu repositorio
4. Click en "Deploy"
5. ¡Listo! Vercel desplegará automáticamente

---

## 🧪 Probar Localmente Primero

Antes de desplegar, prueba la app localmente:

```bash
# Instalar
npm install

# Desarrollo
npm run dev

# Abrir navegador
# http://localhost:3000
```

---

## 📋 Requisitos Previos

- ✅ Node.js 18+ instalado
- ✅ npm instalado
- ✅ Cuenta en Vercel (gratis en vercel.com)

---

## ⚠️ Troubleshooting

### Error: "command not found: vercel"
```bash
npm i -g vercel
```

### Error: "EACCES: permission denied"
```bash
sudo npm i -g vercel
```

### Error: Puerto 3000 en uso
```bash
npm run dev -- -p 3001
```

### Limpiar caché
```bash
rm -rf .next node_modules
npm install
```

---

## 🎉 ¡Listo!

Tu app estará disponible en una URL como:
```
https://firewall-manager-tu-usuario.vercel.app
```

---

## 📞 Soporte

- 📖 Lee README.md para más información
- 🐛 Revisa la consola para errores
- 💬 Contacta a soporte de Vercel: vercel.com/support

---

**Desarrollado con ❤️ por Valtorix**
