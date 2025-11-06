@echo off
REM 🚀 Script de Despliegue Automatizado - Valtorix Firewall Manager (Windows)

echo =========================================================
echo 🔥 Valtorix Firewall Manager - Despliegue Automatizado
echo =========================================================
echo.

REM Verificar Node.js
echo [PASO] Verificando Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado.
    echo Por favor instala Node.js 18+ desde https://nodejs.org
    pause
    exit /b 1
)
echo [OK] Node.js detectado
node -v

REM Verificar npm
echo.
echo [PASO] Verificando npm...
npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm no esta instalado.
    pause
    exit /b 1
)
echo [OK] npm detectado
npm -v

REM Instalar dependencias
echo.
echo [PASO] Instalando dependencias del proyecto...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Error al instalar dependencias
    pause
    exit /b 1
)
echo [OK] Dependencias instaladas correctamente

REM Construir proyecto
echo.
echo [PASO] Construyendo el proyecto...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Error al construir el proyecto
    pause
    exit /b 1
)
echo [OK] Proyecto construido correctamente

echo.
echo =========================================================
echo [OK] Proyecto listo para desplegar!
echo =========================================================
echo.

REM Preguntar por despliegue
set /p DEPLOY="Deseas desplegar ahora en Vercel? (S/N): "
if /i "%DEPLOY%"=="S" goto DEPLOY
if /i "%DEPLOY%"=="s" goto DEPLOY
goto SKIP_DEPLOY

:DEPLOY
echo.
echo [PASO] Verificando Vercel CLI...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [AVISO] Vercel CLI no esta instalado. Instalando...
    call npm i -g vercel
    if %errorlevel% neq 0 (
        echo [ERROR] Error al instalar Vercel CLI
        echo Puedes instalarlo manualmente con: npm i -g vercel
        pause
        exit /b 1
    )
    echo [OK] Vercel CLI instalado
) else (
    echo [OK] Vercel CLI ya esta instalado
)

echo.
echo [PASO] Iniciando despliegue en Vercel...
echo [AVISO] Se abrira el proceso de login si es necesario
echo.

call vercel --prod

if %errorlevel% equ 0 (
    echo.
    echo =========================================================
    echo [OK] DESPLIEGUE COMPLETADO!
    echo =========================================================
    echo.
    echo Tu aplicacion esta ahora en linea en Vercel
    echo.
) else (
    echo [ERROR] Hubo un error durante el despliegue
    echo.
    echo Puedes intentar desplegar manualmente con:
    echo   vercel --prod
)
goto END

:SKIP_DEPLOY
echo.
echo =========================================================
echo [OK] Proyecto listo. Para desplegar mas tarde ejecuta:
echo =========================================================
echo.
echo   npm i -g vercel          # Instalar Vercel CLI (solo una vez)
echo   vercel login             # Login en Vercel (solo una vez)
echo   vercel --prod            # Desplegar a produccion
echo.
echo O prueba localmente con:
echo   npm run dev              # Servidor de desarrollo
echo.

:END
echo.
echo [OK] Script completado
echo.
pause
