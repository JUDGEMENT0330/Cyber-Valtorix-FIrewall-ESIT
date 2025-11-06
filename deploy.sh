#!/bin/bash

# 🚀 Script de Despliegue Automatizado - Valtorix Firewall Manager
# Este script instalará dependencias y desplegará automáticamente en Vercel

echo "🔥 Valtorix Firewall Manager - Despliegue Automatizado"
echo "======================================================"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_step() {
    echo -e "${CYAN}[PASO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

# Verificar si Node.js está instalado
print_step "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js $NODE_VERSION detectado"

# Verificar si npm está instalado
print_step "Verificando npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm no está instalado."
    exit 1
fi

NPM_VERSION=$(npm -v)
print_success "npm $NPM_VERSION detectado"

echo ""
print_step "Instalando dependencias del proyecto..."
npm install

if [ $? -ne 0 ]; then
    print_error "Error al instalar dependencias"
    exit 1
fi
print_success "Dependencias instaladas correctamente"

echo ""
print_step "Construyendo el proyecto..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Error al construir el proyecto"
    exit 1
fi
print_success "Proyecto construido correctamente"

echo ""
echo "======================================================"
print_success "¡Proyecto listo para desplegar!"
echo "======================================================"
echo ""

# Preguntar si desea desplegar en Vercel
echo -e "${CYAN}¿Deseas desplegar ahora en Vercel?${NC} (s/n)"
read -r DEPLOY_NOW

if [[ $DEPLOY_NOW =~ ^[Ss]$ ]]; then
    print_step "Verificando Vercel CLI..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI no está instalado. Instalando..."
        npm i -g vercel
        
        if [ $? -ne 0 ]; then
            print_error "Error al instalar Vercel CLI"
            echo ""
            echo "Puedes instalarlo manualmente con: npm i -g vercel"
            exit 1
        fi
        print_success "Vercel CLI instalado"
    else
        print_success "Vercel CLI ya está instalado"
    fi
    
    echo ""
    print_step "Iniciando despliegue en Vercel..."
    print_warning "Se abrirá el proceso de login si es necesario"
    echo ""
    
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "======================================================"
        print_success "🎉 ¡DESPLIEGUE COMPLETADO!"
        echo "======================================================"
        echo ""
        echo -e "${GREEN}Tu aplicación está ahora en línea en Vercel${NC}"
        echo ""
    else
        print_error "Hubo un error durante el despliegue"
        echo ""
        echo "Puedes intentar desplegar manualmente con:"
        echo "  vercel --prod"
    fi
else
    echo ""
    echo "======================================================"
    print_success "Proyecto listo. Para desplegar más tarde ejecuta:"
    echo "======================================================"
    echo ""
    echo "  npm i -g vercel          # Instalar Vercel CLI (solo una vez)"
    echo "  vercel login             # Login en Vercel (solo una vez)"
    echo "  vercel --prod            # Desplegar a producción"
    echo ""
    echo "O prueba localmente con:"
    echo "  npm run dev              # Servidor de desarrollo"
    echo ""
fi

echo ""
print_success "Script completado"
