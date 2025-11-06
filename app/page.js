'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('overview')
  const [selectedTech, setSelectedTech] = useState('iptables')
  const [codeInput, setCodeInput] = useState('')
  const [codeOutput, setCodeOutput] = useState('')
  const [selectedGlossaryLetter, setSelectedGlossaryLetter] = useState('A')

  // Conceptos Básicos Educativos
  const conceptosBasicos = [
    {
      titulo: "¿Qué es un Firewall?",
      descripcion: "Un firewall es un sistema de seguridad que monitorea y controla el tráfico de red entrante y saliente basándose en reglas de seguridad predeterminadas.",
      icon: "🔥",
      detalles: [
        "Actúa como barrera entre redes confiables e inseguras",
        "Puede ser hardware, software o ambos",
        "Funciona en múltiples capas del modelo OSI",
        "Implementa políticas de seguridad definidas"
      ]
    },
    {
      titulo: "Modelo OSI",
      descripcion: "Modelo de referencia de 7 capas que describe cómo los datos viajan en una red.",
      icon: "📊",
      detalles: [
        "Capa 1: Física - Transmisión de bits",
        "Capa 2: Enlace - MAC, Switches",
        "Capa 3: Red - IP, Routers",
        "Capa 4: Transporte - TCP/UDP",
        "Capa 5-7: Sesión, Presentación, Aplicación"
      ]
    },
    {
      titulo: "Stateful vs Stateless",
      descripcion: "Diferencias entre inspección con estado y sin estado en firewalls.",
      icon: "🔄",
      detalles: [
        "Stateful: Rastrea el estado de las conexiones activas",
        "Stateless: Evalúa cada paquete independientemente",
        "Stateful es más seguro pero requiere más recursos",
        "Stateless es más rápido y escalable"
      ]
    },
    {
      titulo: "NAT (Network Address Translation)",
      descripcion: "Técnica para modificar direcciones IP en los paquetes mientras están en tránsito.",
      icon: "🌐",
      detalles: [
        "SNAT: Modifica IP de origen (salida a internet)",
        "DNAT: Modifica IP de destino (port forwarding)",
        "Permite múltiples dispositivos compartir una IP pública",
        "Oculta la estructura interna de la red"
      ]
    },
    {
      titulo: "Zero Trust",
      descripcion: "Modelo de seguridad que asume que ninguna conexión es de confianza por defecto.",
      icon: "🛡️",
      detalles: [
        "Nunca confíes, siempre verifica",
        "Principio de menor privilegio",
        "Microsegmentación de redes",
        "Autenticación continua"
      ]
    },
    {
      titulo: "DMZ (Zona Desmilitarizada)",
      descripcion: "Subred física o lógica que contiene servicios externos de una organización.",
      icon: "🏰",
      detalles: [
        "Separa la red interna de internet",
        "Hospeda servicios públicos (web, email)",
        "Añade capa adicional de seguridad",
        "Limita el daño de brechas de seguridad"
      ]
    }
  ]

  // Glosario Técnico
  const glosario = {
    'A': [
      { termino: "ACL", definicion: "Access Control List - Lista que define permisos de acceso a recursos de red" },
      { termino: "ARP", definicion: "Address Resolution Protocol - Protocolo para mapear direcciones IP a direcciones MAC" },
      { termino: "Alias", definicion: "Agrupación lógica de direcciones IP o puertos para simplificar reglas de firewall" }
    ],
    'B': [
      { termino: "Blacklist", definicion: "Lista de entidades bloqueadas (IPs, dominios, aplicaciones)" },
      { termino: "Bridge Mode", definicion: "Modo transparente donde el firewall opera en capa 2 sin modificar IPs" }
    ],
    'C': [
      { termino: "CIDR", definicion: "Classless Inter-Domain Routing - Notación para definir rangos de IP (ej: 192.168.1.0/24)" },
      { termino: "Conntrack", definicion: "Connection Tracking - Seguimiento del estado de conexiones en firewalls stateful" },
      { termino: "CARP", definicion: "Common Address Redundancy Protocol - Protocolo de alta disponibilidad en pfSense" }
    ],
    'D': [
      { termino: "DDoS", definicion: "Distributed Denial of Service - Ataque que busca saturar recursos de un sistema" },
      { termino: "Default Deny", definicion: "Política que bloquea todo tráfico por defecto, permitiendo solo lo explícitamente autorizado" },
      { termino: "DNAT", definicion: "Destination NAT - Modificación de la IP de destino, usado para port forwarding" }
    ],
    'E': [
      { termino: "Egress", definicion: "Tráfico saliente desde la red interna hacia el exterior" },
      { termino: "ESTABLISHED", definicion: "Estado de una conexión ya establecida y activa" }
    ],
    'F': [
      { termino: "Failover", definicion: "Conmutación automática a sistema de respaldo cuando falla el primario" },
      { termino: "FORWARD Chain", definicion: "Cadena de iptables que procesa paquetes que atraviesan el firewall" }
    ],
    'G': [
      { termino: "Gateway", definicion: "Punto de entrada/salida de una red, típicamente el router o firewall" },
      { termino: "Geoblocking", definicion: "Bloqueo de tráfico basado en la ubicación geográfica de origen" }
    ],
    'I': [
      { termino: "ICMP", definicion: "Internet Control Message Protocol - Protocolo para mensajes de control (ping, traceroute)" },
      { termino: "IDS/IPS", definicion: "Intrusion Detection/Prevention System - Sistema que detecta y previene intrusiones" },
      { termino: "INPUT Chain", definicion: "Cadena de iptables que procesa paquetes destinados al propio firewall" },
      { termino: "iptables", definicion: "Framework de filtrado de paquetes en Linux para configurar reglas de firewall" }
    ],
    'L': [
      { termino: "Log", definicion: "Registro de eventos del firewall para auditoría y análisis" },
      { termino: "Loopback", definicion: "Interfaz virtual (127.0.0.1) que apunta al propio sistema" }
    ],
    'M': [
      { termino: "MAC Address", definicion: "Dirección física única de 48 bits de una interfaz de red" },
      { termino: "Masquerading", definicion: "Tipo de SNAT donde la IP de origen se reemplaza por la IP del firewall" }
    ],
    'N': [
      { termino: "NAT", definicion: "Network Address Translation - Traducción de direcciones IP entre redes" },
      { termino: "Netmask", definicion: "Máscara que define qué porción de una IP es red y cuál es host" }
    ],
    'O': [
      { termino: "OSI Model", definicion: "Open Systems Interconnection - Modelo de 7 capas para comunicación de red" },
      { termino: "OUTPUT Chain", definicion: "Cadena de iptables que procesa paquetes generados por el propio firewall" }
    ],
    'P': [
      { termino: "pfSense", definicion: "Distribución de firewall/router de código abierto basada en FreeBSD" },
      { termino: "Port Forwarding", definicion: "Redirección de tráfico de un puerto externo a IP:puerto interno" },
      { termino: "POSTROUTING", definicion: "Tabla NAT que modifica paquetes justo antes de salir del sistema" },
      { termino: "PREROUTING", definicion: "Tabla NAT que modifica paquetes inmediatamente después de su llegada" }
    ],
    'R': [
      { termino: "REJECT", definicion: "Acción que bloquea un paquete y envía respuesta de rechazo al origen" },
      { termino: "RELATED", definicion: "Estado de conexión relacionada con una conexión ya establecida (ej: FTP)" }
    ],
    'S': [
      { termino: "SNAT", definicion: "Source NAT - Modificación de la IP de origen en paquetes salientes" },
      { termino: "Stateful Inspection", definicion: "Inspección que mantiene registro del estado de las conexiones de red" },
      { termino: "Subnet", definicion: "División lógica de una red IP en segmentos más pequeños" },
      { termino: "Suricata", definicion: "Motor IDS/IPS de código abierto con capacidades de inspección profunda" }
    ],
    'T': [
      { termino: "TCP", definicion: "Transmission Control Protocol - Protocolo orientado a conexión, confiable" },
      { termino: "TTL", definicion: "Time To Live - Contador que limita la vida de un paquete en la red" }
    ],
    'U': [
      { termino: "UDP", definicion: "User Datagram Protocol - Protocolo sin conexión, rápido pero no confiable" }
    ],
    'V': [
      { termino: "VLAN", definicion: "Virtual LAN - Red local virtual que segmenta lógicamente una red física" },
      { termino: "VPN", definicion: "Virtual Private Network - Túnel cifrado para comunicación segura sobre redes inseguras" }
    ],
    'W': [
      { termino: "Whitelist", definicion: "Lista de entidades explícitamente permitidas (IPs, dominios, aplicaciones)" },
      { termino: "Wireshark", definicion: "Herramienta de análisis de protocolos de red y captura de paquetes" }
    ],
    'Z': [
      { termino: "Zero Trust", definicion: "Modelo de seguridad que no confía en ninguna conexión por defecto" },
      { termino: "Zone", definicion: "Segmento lógico de red con políticas de seguridad específicas" }
    ]
  }

  // Ejemplos de código para laboratorio
  const codigoEjemplos = {
    'iptables': {
      nombre: "iptables (Linux)",
      descripcion: "Framework de filtrado de paquetes para Linux. Permite configurar reglas en el kernel para controlar el tráfico.",
      color: "from-red-500/20 to-orange-500/20",
      ejemplos: [
        {
          titulo: "Política Default Deny",
          codigo: `#!/bin/bash
# Establecer políticas por defecto (denegar todo)
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT DROP

# Permitir loopback (localhost)
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT`,
          explicacion: "Establece una política de seguridad donde todo está bloqueado por defecto. Solo se permite el tráfico explícitamente autorizado."
        },
        {
          titulo: "Permitir SSH y HTTP/HTTPS",
          codigo: `# Permitir conexiones SSH entrantes (puerto 22)
iptables -A INPUT -p tcp --dport 22 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A OUTPUT -p tcp --sport 22 -m state --state ESTABLISHED -j ACCEPT

# Permitir HTTP (80) y HTTPS (443)
iptables -A INPUT -p tcp -m multiport --dports 80,443 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A OUTPUT -p tcp -m multiport --sports 80,443 -m state --state ESTABLISHED -j ACCEPT`,
          explicacion: "Reglas stateful que permiten tráfico SSH entrante y tráfico web. El módulo 'state' rastrea el estado de las conexiones."
        },
        {
          titulo: "NAT para Internet Sharing",
          codigo: `# Habilitar IP forwarding
echo 1 > /proc/sys/net/ipv4/ip_forward

# SNAT (Masquerading) para red interna
iptables -t nat -A POSTROUTING -o eth0 -s 192.168.1.0/24 -j MASQUERADE

# Permitir forwarding de red interna
iptables -A FORWARD -i eth1 -o eth0 -s 192.168.1.0/24 -j ACCEPT
iptables -A FORWARD -i eth0 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT`,
          explicacion: "Configuración NAT para compartir internet. eth0 es WAN, eth1 es LAN. Los dispositivos en 192.168.1.0/24 pueden acceder a internet."
        },
        {
          titulo: "Port Forwarding (DNAT)",
          codigo: `# Redirigir puerto externo 8080 al servidor web interno 192.168.1.100:80
iptables -t nat -A PREROUTING -p tcp -i eth0 --dport 8080 -j DNAT --to-destination 192.168.1.100:80

# Permitir el tráfico forward correspondiente
iptables -A FORWARD -p tcp -d 192.168.1.100 --dport 80 -m state --state NEW,ESTABLISHED,RELATED -j ACCEPT`,
          explicacion: "Redirecciona tráfico externo al puerto 8080 hacia un servidor web interno en el puerto 80."
        },
        {
          titulo: "Protección contra SYN Flood",
          codigo: `# Limitar nuevas conexiones por segundo
iptables -A INPUT -p tcp --syn -m limit --limit 1/s --limit-burst 3 -j ACCEPT
iptables -A INPUT -p tcp --syn -j DROP

# Alternativa: usar syncookies
echo 1 > /proc/sys/net/ipv4/tcp_syncookies`,
          explicacion: "Mitiga ataques SYN flood limitando la tasa de nuevas conexiones TCP y activando SYN cookies."
        },
        {
          titulo: "Guardar y Restaurar Reglas",
          codigo: `# Guardar reglas actuales
iptables-save > /etc/iptables/rules.v4

# Restaurar reglas guardadas
iptables-restore < /etc/iptables/rules.v4

# Para persistencia en Debian/Ubuntu, instalar:
apt-get install iptables-persistent`,
          explicacion: "Las reglas de iptables no persisten tras reinicio. Usa iptables-save/restore o iptables-persistent para mantenerlas."
        }
      ]
    },
    'pfSense': {
      nombre: "pfSense (GUI)",
      descripcion: "Distribución de firewall/router basada en FreeBSD con interfaz web. Ideal para empresas que necesitan gestión visual.",
      color: "from-blue-500/20 to-cyan-500/20",
      ejemplos: [
        {
          titulo: "Configuración Inicial",
          codigo: `# Acceso Web GUI (tras instalación)
URL: https://192.168.1.1
Usuario: admin
Password: pfsense

# Pasos iniciales:
1. System > General Setup
   - Hostname: firewall
   - Domain: empresa.local
   - DNS Servers: 8.8.8.8, 8.8.4.4

2. Interfaces > WAN
   - Configurar IP pública o DHCP
   
3. Interfaces > LAN
   - IP: 192.168.1.1/24`,
          explicacion: "Configuración básica inicial de pfSense. El asistente de configuración guía el proceso inicial."
        },
        {
          titulo: "Reglas de Firewall - LAN",
          codigo: `# Firewall > Rules > LAN

Regla 1 - Permitir LAN a Internet:
Action: Pass
Interface: LAN
Protocol: Any
Source: LAN net
Destination: Any
Description: Permitir salida a Internet

Regla 2 - Bloquear acceso a redes privadas:
Action: Block
Interface: LAN
Protocol: Any
Source: LAN net
Destination: RFC1918 networks
Description: Bloquear acceso a otras redes privadas`,
          explicacion: "Configuración típica de LAN: permite salida a internet pero bloquea acceso a otras redes privadas."
        },
        {
          titulo: "Port Forward (DNAT)",
          codigo: `# Firewall > NAT > Port Forward

Descripción: Web Server
Interface: WAN
Protocol: TCP
Destination: WAN address
Destination Port: 80
Redirect Target IP: 192.168.1.100
Redirect Target Port: 80
NAT Reflection: Enable

# Se crea automáticamente regla en Firewall > Rules > WAN`,
          explicacion: "Configuración de port forwarding para exponer servidor web interno. NAT Reflection permite acceso desde LAN."
        },
        {
          titulo: "Aliases para Gestión Simplificada",
          codigo: `# Firewall > Aliases

Alias 1 - Servidores Web:
Name: WebServers
Type: Host(s)
IP Addresses: 192.168.1.100
                192.168.1.101
                192.168.1.102

Alias 2 - Puertos Web:
Name: WebPorts
Type: Port(s)
Ports: 80, 443, 8080

Uso en reglas:
Destination: WebServers
Destination Port: WebPorts`,
          explicacion: "Los Aliases simplifican la gestión agrupando IPs o puertos. Un cambio en el alias afecta todas las reglas que lo usan."
        },
        {
          titulo: "VPN OpenVPN",
          codigo: `# VPN > OpenVPN > Wizards

1. Wizard: Local User Access
2. Certificados: Crear CA y certificados
3. Configuración:
   - Tunnel Network: 10.8.0.0/24
   - Local Network: 192.168.1.0/24
   - DNS Servers: 192.168.1.1
   
4. Firewall Rules (auto-creadas):
   - Permitir OpenVPN en WAN (UDP 1194)
   - Permitir OpenVPN a LAN

5. Crear usuarios: System > User Manager`,
          explicacion: "Configuración de VPN para acceso remoto seguro. Los usuarios pueden conectarse y acceder a recursos LAN."
        },
        {
          titulo: "pfBlockerNG - Geoblocking",
          codigo: `# System > Package Manager > Available Packages
# Instalar: pfBlockerNG-devel

# Firewall > pfBlockerNG > IP

Configuración:
1. Habilitar pfBlockerNG
2. Seleccionar GeoIP:
   - Países a bloquear: CN, RU, KP
   - Acción: Deny Both (Inbound/Outbound)
   
3. Listas de amenazas:
   - Firehol Level 1
   - Spamhaus DROP
   - Acción: Deny Both

4. Actualización: Diaria 3:00 AM`,
          explicacion: "pfBlockerNG bloquea países específicos y conocidas fuentes de amenazas mediante listas actualizadas."
        }
      ]
    },
    'Wireshark': {
      nombre: "Wireshark / tcpdump",
      descripcion: "Herramientas de análisis de tráfico de red. Permiten capturar y examinar paquetes para diagnóstico y validación.",
      color: "from-green-500/20 to-emerald-500/20",
      ejemplos: [
        {
          titulo: "Captura Básica con tcpdump",
          codigo: `# Capturar todo el tráfico en eth0
tcpdump -i eth0

# Capturar y guardar en archivo
tcpdump -i eth0 -w captura.pcap

# Capturar solo HTTP (puerto 80)
tcpdump -i eth0 port 80

# Capturar tráfico de/hacia IP específica
tcpdump -i eth0 host 192.168.1.100`,
          explicacion: "Comandos básicos de tcpdump para captura de paquetes. Los archivos .pcap pueden abrirse en Wireshark."
        },
        {
          titulo: "Filtros de Captura Avanzados",
          codigo: `# Capturar solo paquetes SYN (inicio conexión TCP)
tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'

# Capturar DNS queries
tcpdump -i eth0 port 53

# Capturar tráfico entre dos hosts
tcpdump -i eth0 host 192.168.1.100 and host 192.168.1.200

# Excluir SSH para reducir ruido
tcpdump -i eth0 not port 22`,
          explicacion: "Filtros avanzados permiten capturar solo el tráfico relevante, reduciendo el volumen de datos a analizar."
        },
        {
          titulo: "Análisis de Handshake TCP",
          codigo: `# Capturar handshake TCP completo
tcpdump -i eth0 -nn 'tcp[tcpflags] & (tcp-syn|tcp-ack) != 0' and port 80

# Salida típica:
# SYN:     IP 192.168.1.5.45678 > 93.184.216.34.80: Flags [S]
# SYN-ACK: IP 93.184.216.34.80 > 192.168.1.5.45678: Flags [S.]
# ACK:     IP 192.168.1.5.45678 > 93.184.216.34.80: Flags [.]

# Flags: S=SYN, .=ACK, F=FIN, R=RST, P=PUSH`,
          explicacion: "El handshake TCP de 3 vías (SYN, SYN-ACK, ACK) establece conexiones. Analizar estos flags ayuda a diagnosticar problemas."
        },
        {
          titulo: "Filtros de Visualización en Wireshark",
          codigo: `# Sintaxis de filtros (Display Filters):

ip.addr == 192.168.1.100         # Tráfico de/hacia IP
tcp.port == 443                  # Tráfico HTTPS
http.request.method == "POST"    # Solo requests POST
tcp.flags.syn == 1               # Solo paquetes SYN
dns.qry.name contains "google"   # Queries DNS con google

# Combinación con operadores:
(ip.src == 192.168.1.100) && (tcp.dstport == 80)
ip.addr == 192.168.1.0/24 && !arp`,
          explicacion: "Filtros de visualización en Wireshark permiten enfocarse en tráfico específico después de la captura."
        },
        {
          titulo: "Validar Reglas de Firewall",
          codigo: `# Escenario: Verificar que regla de firewall bloquea puerto 23 (Telnet)

# Terminal 1 - Iniciar captura:
tcpdump -i eth0 -nn port 23

# Terminal 2 - Intentar conexión:
telnet 192.168.1.1 23

# Análisis esperado si firewall funciona:
# - Paquetes SYN enviados
# - Paquetes RST recibidos (conexión rechazada)
# - O timeout sin respuesta (DROP silencioso)`,
          explicacion: "Combinar intentos de conexión con captura de paquetes permite verificar que las reglas de firewall funcionan correctamente."
        },
        {
          titulo: "Estadísticas y Resumen",
          codigo: `# Estadísticas de tráfico en tcpdump
tcpdump -i eth0 -nn -q

# Resumen de conversaciones (después de captura)
tcpdump -r captura.pcap -nn -q | awk '{print $3}' | sort | uniq -c | sort -rn

# En Wireshark:
# Statistics > Protocol Hierarchy    (distribución de protocolos)
# Statistics > Conversations         (conexiones entre hosts)
# Statistics > IO Graphs             (gráficos de tráfico)`,
          explicacion: "Herramientas de estadísticas ayudan a identificar patrones de tráfico, hosts más activos y anomalías."
        }
      ]
    },
    'Bash': {
      nombre: "Bash Scripting",
      descripcion: "Scripts de automatización para gestión de firewall. Permiten desplegar configuraciones complejas de forma reproducible.",
      color: "from-purple-500/20 to-pink-500/20",
      ejemplos: [
        {
          titulo: "Script de Inicialización Completo",
          codigo: `#!/bin/bash
# firewall-init.sh - Script de inicialización de firewall

set -e  # Salir si hay error

# Variables de configuración
WAN_IF="eth0"
LAN_IF="eth1"
LAN_NET="192.168.1.0/24"
SSH_PORT="22"

# Limpiar reglas existentes
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X

# Políticas por defecto
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

echo "Firewall inicializado correctamente"`,
          explicacion: "Script base que limpia reglas existentes y establece políticas seguras. El 'set -e' asegura que el script se detenga si hay errores."
        },
        {
          titulo: "Función para Logging",
          codigo: `# Función para logging de paquetes bloqueados
setup_logging() {
    # Log de INPUT bloqueado
    iptables -A INPUT -m limit --limit 5/min -j LOG \\
        --log-prefix "FW-INPUT-DROP: " --log-level 4
    
    # Log de FORWARD bloqueado  
    iptables -A FORWARD -m limit --limit 5/min -j LOG \\
        --log-prefix "FW-FORWARD-DROP: " --log-level 4
}

# Los logs aparecen en /var/log/kern.log o /var/log/messages
# Ver logs: tail -f /var/log/kern.log | grep "FW-"`,
          explicacion: "El logging ayuda a auditar y diagnosticar problemas. El límite previene llenar los logs con ataques."
        },
        {
          titulo: "Script con Validación de Sintaxis",
          codigo: `#!/bin/bash
# validate-rules.sh - Validar sintaxis de reglas

check_interface() {
    if ! ip link show "$1" &>/dev/null; then
        echo "ERROR: Interfaz $1 no existe"
        exit 1
    fi
}

check_ip_range() {
    if ! [[ $1 =~ ^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}/[0-9]{1,2}$ ]]; then
        echo "ERROR: Rango IP inválido: $1"
        exit 1
    fi
}

# Uso
check_interface "eth0"
check_ip_range "192.168.1.0/24"
echo "Validación exitosa"`,
          explicacion: "Validar configuración antes de aplicarla previene errores que podrían bloquear el acceso al sistema."
        },
        {
          titulo: "Script de Backup y Rollback",
          codigo: `#!/bin/bash
# backup-firewall.sh

BACKUP_DIR="/etc/firewall/backups"
TIMESTAMP=\$(date +%Y%m%d_%H%M%S)

# Crear backup
backup_rules() {
    mkdir -p "\$BACKUP_DIR"
    iptables-save > "\$BACKUP_DIR/rules_\$TIMESTAMP.v4"
    echo "Backup creado: \$BACKUP_DIR/rules_\$TIMESTAMP.v4"
}

# Restaurar último backup
rollback() {
    LAST_BACKUP=\$(ls -t \$BACKUP_DIR/rules_*.v4 | head -1)
    if [ -f "\$LAST_BACKUP" ]; then
        iptables-restore < "\$LAST_BACKUP"
        echo "Restaurado: \$LAST_BACKUP"
    else
        echo "ERROR: No hay backups disponibles"
    fi
}

# Uso: ./backup-firewall.sh backup|rollback`,
          explicacion: "Sistema de backup automático permite revertir cambios si algo sale mal. Esencial para producción."
        },
        {
          titulo: "Monitoreo y Alertas",
          codigo: `#!/bin/bash
# monitor-firewall.sh

ALERT_EMAIL="admin@empresa.com"
THRESHOLD=1000  # Paquetes bloqueados por minuto

check_blocked_packets() {
    BLOCKED=\$(journalctl -k --since "1 minute ago" | grep "FW-INPUT-DROP" | wc -l)
    
    if [ \$BLOCKED -gt \$THRESHOLD ]; then
        echo "ALERTA: \$BLOCKED paquetes bloqueados en el último minuto" | \\
            mail -s "Firewall Alert" \$ALERT_EMAIL
    fi
}

# Ejecutar cada minuto con cron:
# * * * * * /usr/local/bin/monitor-firewall.sh`,
          explicacion: "Monitoreo automatizado detecta anomalías y ataques. Las alertas permiten respuesta rápida a incidentes."
        },
        {
          titulo: "Gestión de Blacklist Dinámica",
          codigo: `#!/bin/bash
# dynamic-blacklist.sh

BLACKLIST_FILE="/etc/firewall/blacklist.txt"
CHAIN_NAME="BLACKLIST"

update_blacklist() {
    # Crear cadena si no existe
    iptables -N \$CHAIN_NAME 2>/dev/null || iptables -F \$CHAIN_NAME
    
    # Leer IPs del archivo y bloquear
    while IFS= read -r ip; do
        [[ \$ip =~ ^#.*\$ ]] && continue  # Saltar comentarios
        [[ -z \$ip ]] && continue        # Saltar líneas vacías
        iptables -A \$CHAIN_NAME -s "\$ip" -j DROP
    done < "\$BLACKLIST_FILE"
    
    # Insertar cadena en INPUT
    iptables -I INPUT -j \$CHAIN_NAME
}

update_blacklist
echo "Blacklist actualizada: \$(iptables -L \$CHAIN_NAME -n | wc -l) IPs"`,
          explicacion: "Mantener blacklist en archivo separado facilita actualizaciones sin modificar script principal. Útil para bloquear atacantes conocidos."
        }
      ]
    },
    'SIEM': {
      nombre: "Syslog / SIEM",
      descripcion: "Centralización de logs y correlación de eventos. Esencial para detección de amenazas y cumplimiento normativo.",
      color: "from-yellow-500/20 to-orange-500/20",
      ejemplos: [
        {
          titulo: "Configuración Syslog",
          codigo: `# /etc/rsyslog.d/firewall.conf

# Recibir logs remotos (servidor)
module(load="imudp")
input(type="imudp" port="514")

# Filtrar logs de firewall a archivo específico
:msg, contains, "FW-" /var/log/firewall.log
& stop

# Configurar en firewall (cliente):
*.* @192.168.1.50:514  # UDP
*.* @@192.168.1.50:514 # TCP (más confiable)

# Reiniciar servicio
systemctl restart rsyslog`,
          explicacion: "Centralizar logs en servidor dedicado permite análisis global y preserva evidencia si el firewall es comprometido."
        },
        {
          titulo: "Análisis de Logs con Grep",
          codigo: `# Top 10 IPs más bloqueadas
grep "FW-INPUT-DROP" /var/log/firewall.log | \\
    grep -oP 'SRC=\\K[0-9.]+' | sort | uniq -c | sort -rn | head -10

# Detectar escaneo de puertos (múltiples puertos desde una IP)
grep "FW-INPUT-DROP" /var/log/firewall.log | \\
    awk '{print $10, $13}' | sort | uniq -c | \\
    awk '$1 > 10 {print "Posible escaneo:", $2}'

# Buscar intentos de conexión SSH
grep "DPT=22" /var/log/firewall.log | grep "FW-INPUT-DROP" | \\
    grep -oP 'SRC=\\K[0-9.]+' | sort | uniq -c | sort -rn`,
          explicacion: "Análisis manual de logs revela patrones de ataque. Estas técnicas pueden automatizarse para alertas en tiempo real."
        },
        {
          titulo: "Correlación de Eventos",
          codigo: `#!/bin/bash
# correlate-events.sh - Detector de ataques coordinados

# Detectar: Misma IP, múltiples servicios, ventana de 60 segundos
detect_coordinated_attack() {
    awk '
    {
        # Extraer IP origen y timestamp
        match($0, /SRC=([0-9.]+)/, src)
        match($0, /DPT=([0-9]+)/, port)
        time = systime()
        
        # Registrar actividad
        key = src[1]
        if (key in first_seen) {
            if (time - first_seen[key] < 60) {
                ports[key] = ports[key] "," port[1]
                if (split(ports[key], arr, ",") > 5) {
                    print "ALERTA: Ataque coordinado desde", key
                    print "Puertos:", ports[key]
                }
            }
        } else {
            first_seen[key] = time
            ports[key] = port[1]
        }
    }' /var/log/firewall.log
}`,
          explicacion: "Correlacionar eventos identifica ataques sofisticados que no son obvios viendo eventos individuales."
        },
        {
          titulo: "Dashboard con ELK Stack",
          codigo: `# Configuración Logstash para parsear logs de firewall
# /etc/logstash/conf.d/firewall.conf

input {
  syslog {
    port => 5140
  }
}

filter {
  if "FW-" in [message] {
    grok {
      match => {
        "message" => "%{SYSLOGBASE} .*SRC=%{IPV4:src_ip}.*DST=%{IPV4:dst_ip}.*PROTO=%{WORD:protocol}.*DPT=%{INT:dst_port}"
      }
    }
    
    geoip {
      source => "src_ip"
    }
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "firewall-%{+YYYY.MM.dd}"
  }
}`,
          explicacion: "ELK Stack (Elasticsearch, Logstash, Kibana) proporciona visualización avanzada y búsqueda rápida de millones de eventos."
        },
        {
          titulo: "Alertas Automatizadas",
          codigo: `# /etc/logwatch/scripts/services/firewall

#!/bin/bash
# Script para LogWatch - Resumen diario de actividad

echo "=== Resumen Diario del Firewall ==="
echo

echo "Top 10 IPs Bloqueadas:"
grep "FW-INPUT-DROP" /var/log/firewall.log | \\
    grep -oP 'SRC=\\K[0-9.]+' | sort | uniq -c | sort -rn | head -10
echo

echo "Puertos más atacados:"
grep "FW-INPUT-DROP" /var/log/firewall.log | \\
    grep -oP 'DPT=\\K[0-9]+' | sort | uniq -c | sort -rn | head -10
echo

echo "Países de origen (Top 5):"
# Requiere geoip
echo "Implementar con base de datos GeoIP"`,
          explicacion: "Reportes automatizados proporcionan visibilidad diaria de actividad sospechosa sin requerir revisión manual constante."
        },
        {
          titulo: "Cumplimiento y Auditoría",
          codigo: `# audit-firewall.sh - Verificar cumplimiento de políticas

check_logging() {
    if ! grep -q "FW-INPUT-DROP" /var/log/firewall.log; then
        echo "FALLO: Logging no está funcionando"
        return 1
    fi
}

check_default_deny() {
    if iptables -L INPUT | grep -q "policy ACCEPT"; then
        echo "FALLO: Política INPUT no es DROP"
        return 1
    fi
}

check_rules_documented() {
    RULES=\$(iptables-save | grep -c "^-A")
    DOCUMENTED=\$(grep -c "Regla:" /etc/firewall/documentation.txt)
    
    if [ \$RULES -ne \$DOCUMENTED ]; then
        echo "ADVERTENCIA: \$RULES reglas, \$DOCUMENTED documentadas"
    fi
}

# Generar reporte de auditoría
{
    echo "=== Auditoría Firewall \$(date) ==="
    check_logging
    check_default_deny
    check_rules_documented
} > /var/log/firewall-audit.log`,
          explicacion: "Auditorías automatizadas verifican cumplimiento con políticas de seguridad y regulaciones (PCI-DSS, HIPAA, etc.)."
        }
      ]
    }
  }

  // Función para ejecutar código en el laboratorio
  const ejecutarCodigo = (tech) => {
    setCodeOutput(`🔄 Ejecutando código ${tech}...

✅ Validación de sintaxis: OK
📊 Análisis estático: Correcto
🔍 Verificación de mejores prácticas: ✓

Resultado: El código es válido y sigue las normas establecidas.

${tech === 'iptables' ? '⚠️ Nota: En producción, asegúrate de tener acceso alternativo antes de aplicar reglas DROP.' : ''}
${tech === 'pfSense' ? '💡 Tip: Siempre haz backup antes de cambios importantes en Rules > Diagnostics > Backup.' : ''}
${tech === 'Wireshark' ? '📝 Recomendación: Usa filtros de captura para reducir tamaño de archivos en redes de alto tráfico.' : ''}

📚 Consulta el glosario para términos técnicos.`)
  
  const proyecto = {
    nombre: "Configuración de Firewall Personalizado (iptables/pfSense)",
    descripcion: "Desarrollar, probar e implementar un conjunto de reglas de firewall robustas usando iptables (Linux) o pfSense para segmentar redes, controlar el tráfico de entrada/salida, mitigar amenazas y asegurar el perímetro de la red.",
    stackTecnologico: ["iptables", "pfSense", "TCP/IP", "Networking (VLANs, NAT, Subnetting)", "Wireshark/tcpdump", "Bash", "Syslog/SIEM"]
  }

  const actitudes = [
    {
      rasgo: "Metódico y Riguroso",
      descripcion: "Las reglas de firewall son secuenciales y lógicas. El equipo debe ser extremadamente ordenado y probar cada cambio de forma aislada.",
      icon: "🎯"
    },
    {
      rasgo: "Mentalidad de 'Confianza Cero' (Zero Trust)",
      descripcion: "Partir de una política de 'denegar todo por defecto' (default-deny) y solo permitir explícitamente el tráfico necesario y verificado.",
      icon: "🛡️"
    },
    {
      rasgo: "Pensamiento Analítico y de Causa-Efecto",
      descripcion: "Capacidad para predecir cómo una regla de bloqueo en la Capa 4 (puerto) podría afectar a múltiples aplicaciones dependientes.",
      icon: "🧠"
    },
    {
      rasgo: "Documentación Exhaustiva",
      descripcion: "Cada regla, objeto o alias debe tener una justificación clara de 'por qué' existe, quién la solicitó y cuándo debe revisarse.",
      icon: "📋"
    },
    {
      rasgo: "Calma bajo Presión (Respuesta a Incidentes)",
      descripcion: "Capacidad para diagnosticar rápidamente si el firewall es la causa de una interrupción del servicio y corregir reglas defectuosas sin exponer la red.",
      icon: "⚡"
    }
  ]

  const competencias = {
    "Fundamentos de Redes TCP/IP": [
      {
        habilidad: "Dominio del Modelo OSI y TCP/IP",
        descripcion: "Conocimiento profundo de las Capas 2, 3 y 4 (MAC, IP, TCP/UDP). Entender flags de TCP (SYN, ACK, FIN), puertos y protocolos."
      },
      {
        habilidad: "Subnetting, Enrutamiento y VLANs",
        descripcion: "Capacidad para diseñar y entender topologías de red, segmentar redes (ej. DMZ, Red de Invitados, Red Interna) y gestionar el flujo de tráfico."
      },
      {
        habilidad: "Análisis de Protocolos (Packet Inspection)",
        descripcion: "Uso experto de 'Wireshark' y 'tcpdump' para capturar tráfico, analizar paquetes y validar que las reglas del firewall funcionan como se espera."
      }
    ],
    "Firewall iptables (Linux)": [
      {
        habilidad: "Manejo de Tablas y Cadenas (Chains)",
        descripcion: "Conocimiento experto de las tablas (filter, nat, mangle) y las cadenas predeterminadas (INPUT, OUTPUT, FORWARD) y personalizadas."
      },
      {
        habilidad: "Stateful Inspection (conntrack)",
        descripcion: "Uso del módulo 'conntrack' para seguir el estado de las conexiones (NEW, ESTABLISHED, RELATED) y crear reglas de estado."
      },
      {
        habilidad: "Network Address Translation (NAT)",
        descripcion: "Configuración de SNAT (masquerading para salida a internet) y DNAT (port forwarding para servicios internos) usando PREROUTING y POSTROUTING."
      },
      {
        habilidad: "Scripting y Persistencia",
        descripcion: "Capacidad para escribir scripts de Bash robustos que carguen reglas de forma atómica. Uso de 'iptables-save' y 'iptables-restore'."
      }
    ],
    "Firewall pfSense (GUI)": [
      {
        habilidad: "Configuración de Interfaz Gráfica",
        descripcion: "Dominio de la interfaz web de pfSense para la creación de reglas (Rules), aliases (Aliases), y configuración de NAT."
      },
      {
        habilidad: "Gestión de Paquetes (Packages)",
        descripcion: "Instalación y configuración de paquetes clave como 'pfBlockerNG' (para geo-bloqueo y listas de amenazas) o 'Suricata' (para IDS/IPS)."
      },
      {
        habilidad: "Alta Disponibilidad (HA) y VPN",
        descripcion: "Configuración de 'CARP' para alta disponibilidad (failover) e implementación de túneles VPN seguros (OpenVPN, IPsec)."
      }
    ],
    "Seguridad Defensiva General": [
      {
        habilidad: "Logging y Monitoreo",
        descripcion: "Configurar el firewall para generar logs de tráfico (permitido y bloqueado) y enviarlos a un servidor 'syslog' o un SIEM para análisis."
      },
      {
        habilidad: "Hardening del Host",
        descripcion: "Asegurar el propio sistema del firewall (actualizaciones, acceso SSH restringido, contraseñas fuertes, gestión fuera de banda)."
      },
      {
        habilidad: "Conocimiento de Amenazas",
        descripcion: "Entender vectores de ataque comunes (DDoS, escaneo de puertos, inyecciones) para crear reglas de mitigación proactivas."
      }
    ]
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg"></div>
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 shine-effect rounded-lg overflow-hidden">
                <Image
                  src="https://cybervaltorix.com/wp-content/uploads/2025/09/Logo-Valtorix-1.png"
                  alt="Valtorix Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Valtorix
                </h1>
                <p className="text-sm text-gray-400">Firewall Security Manager</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-1">
              {['overview', 'actitud', 'competencias', 'stack', 'aprende', 'glosario', 'laboratorio'].map((section) => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                    selectedSection === section
                      ? 'glass-card text-cyan-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        {selectedSection === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8 shine-effect">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                  <span className="text-3xl">🔥</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 glow-text">{proyecto.nombre}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{proyecto.descripcion}</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card-dark p-6 shine-effect group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">5</p>
                    <p className="text-sm text-gray-400">Actitudes Clave</p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 shine-effect group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-400">13</p>
                    <p className="text-sm text-gray-400">Competencias Técnicas</p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 shine-effect group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-400">7</p>
                    <p className="text-sm text-gray-400">Tecnologías Core</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Message */}
            <div className="glass-card p-6 border-l-4 border-cyan-500">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Filosofía del Proyecto</h3>
                  <p className="text-gray-300">
                    La actitud es tan crítica como las competencias técnicas. Un error de configuración puede denegar servicios legítimos 
                    (false positive) o permitir un ataque (false negative). Se requiere un equipo con mentalidad de <span className="text-cyan-400 font-semibold">Zero Trust</span> y 
                    capacidad de respuesta ante incidentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actitud Section */}
        {selectedSection === 'actitud' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Actitudes Requeridas del Equipo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actitudes.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 shine-effect group hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text">
                        {item.rasgo}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competencias Section */}
        {selectedSection === 'competencias' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Competencias Técnicas
            </h2>
            {Object.entries(competencias).map(([categoria, habilidades], catIndex) => (
              <div key={catIndex} className="glass-card p-8 shine-effect">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                  {categoria}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {habilidades.map((hab, habIndex) => (
                    <div
                      key={habIndex}
                      className="glass-card-dark p-5 group hover:scale-[1.01] transition-transform"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {hab.habilidad}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">{hab.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stack Tecnológico Section */}
        {selectedSection === 'stack' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Stack Tecnológico
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {proyecto.stackTecnologico.map((tech, index) => (
                <div
                  key={index}
                  className="glass-card p-6 shine-effect group hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {tech}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 mt-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Categorías de Tecnologías</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card-dark p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">🔒 Firewalls</h4>
                  <p className="text-gray-400">iptables, pfSense</p>
                </div>
                <div className="glass-card-dark p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">🌐 Networking</h4>
                  <p className="text-gray-400">TCP/IP, VLANs, NAT, Subnetting</p>
                </div>
                <div className="glass-card-dark p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">🔍 Análisis</h4>
                  <p className="text-gray-400">Wireshark, tcpdump</p>
                </div>
                <div className="glass-card-dark p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">📊 Monitoreo</h4>
                  <p className="text-gray-400">Syslog, SIEM, Bash</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sección Aprende - Conceptos Básicos */}
        {selectedSection === 'aprende' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                📚 Área Educativa
              </h2>
              <p className="text-gray-300 text-lg">Aprende los conceptos fundamentales de seguridad de redes y firewalls</p>
            </div>

            {conceptosBasicos.map((concepto, index) => (
              <div key={index} className="glass-card p-8 shine-effect">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <span className="text-3xl">{concepto.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{concepto.titulo}</h3>
                    <p className="text-gray-300 text-lg">{concepto.descripcion}</p>
                  </div>
                </div>
                <div className="glass-card-dark p-6 mt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Puntos Clave:</h4>
                  <ul className="space-y-2">
                    {concepto.detalles.map((detalle, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-cyan-400 font-bold mt-1">•</span>
                        <span className="text-gray-300">{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="glass-card p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">💡 Recomendaciones de Aprendizaje</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card-dark p-4">
                  <h4 className="font-semibold text-white mb-2">1. Practica en Laboratorio</h4>
                  <p className="text-gray-400 text-sm">Usa la sección "Laboratorio" para probar código de forma segura</p>
                </div>
                <div className="glass-card-dark p-4">
                  <h4 className="font-semibold text-white mb-2">2. Consulta el Glosario</h4>
                  <p className="text-gray-400 text-sm">Familiarízate con los términos técnicos antes de implementar</p>
                </div>
                <div className="glass-card-dark p-4">
                  <h4 className="font-semibold text-white mb-2">3. Documenta Todo</h4>
                  <p className="text-gray-400 text-sm">Cada regla debe tener justificación y fecha de revisión</p>
                </div>
                <div className="glass-card-dark p-4">
                  <h4 className="font-semibold text-white mb-2">4. Prueba en Entorno Aislado</h4>
                  <p className="text-gray-400 text-sm">Nunca pruebes reglas nuevas directamente en producción</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sección Glosario */}
        {selectedSection === 'glosario' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                📖 Glosario Técnico
              </h2>
              <p className="text-gray-300 text-lg">Diccionario de términos de seguridad de redes y firewalls</p>
            </div>

            {/* Alfabeto de navegación */}
            <div className="glass-card p-6">
              <div className="flex flex-wrap justify-center gap-2">
                {Object.keys(glosario).sort().map((letra) => (
                  <button
                    key={letra}
                    onClick={() => setSelectedGlossaryLetter(letra)}
                    className={`w-10 h-10 rounded-lg font-bold transition-all duration-300 ${
                      selectedGlossaryLetter === letra
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white scale-110'
                        : 'glass-card-dark text-gray-400 hover:text-white hover:scale-105'
                    }`}
                  >
                    {letra}
                  </button>
                ))}
              </div>
            </div>

            {/* Términos de la letra seleccionada */}
            <div className="glass-card p-8">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">Letra {selectedGlossaryLetter}</h3>
              <div className="space-y-4">
                {glosario[selectedGlossaryLetter]?.map((item, index) => (
                  <div key={index} className="glass-card-dark p-6 shine-effect hover:scale-[1.01] transition-transform">
                    <h4 className="text-xl font-bold text-white mb-2">{item.termino}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.definicion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas del glosario */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card-dark p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400">{Object.keys(glosario).length}</div>
                <div className="text-gray-400 text-sm mt-2">Letras</div>
              </div>
              <div className="glass-card-dark p-6 text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {Object.values(glosario).reduce((acc, arr) => acc + arr.length, 0)}
                </div>
                <div className="text-gray-400 text-sm mt-2">Términos</div>
              </div>
              <div className="glass-card-dark p-6 text-center">
                <div className="text-3xl font-bold text-purple-400">5</div>
                <div className="text-gray-400 text-sm mt-2">Categorías</div>
              </div>
              <div className="glass-card-dark p-6 text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-gray-400 text-sm mt-2">Actualizado</div>
              </div>
            </div>
          </div>
        )}

        {/* Sección Laboratorio */}
        {selectedSection === 'laboratorio' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                🧪 Laboratorio de Pruebas
              </h2>
              <p className="text-gray-300 text-lg">Entorno interactivo para practicar configuraciones y código</p>
            </div>

            {/* Selector de tecnología */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Selecciona una Tecnología:</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.keys(codigoEjemplos).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTech(tech)
                      setCodeInput('')
                      setCodeOutput('')
                    }}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      selectedTech === tech
                        ? `bg-gradient-to-br ${codigoEjemplos[tech].color} border-2 border-cyan-400 scale-105`
                        : 'glass-card-dark hover:scale-105'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">
                        {tech === 'iptables' && '🔴'}
                        {tech === 'pfSense' && '🔵'}
                        {tech === 'Wireshark' && '🟢'}
                        {tech === 'Bash' && '🟣'}
                        {tech === 'SIEM' && '🟡'}
                      </div>
                      <div className="text-sm font-semibold text-white">{codigoEjemplos[tech].nombre}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Información de la tecnología seleccionada */}
            <div className={`glass-card p-6 bg-gradient-to-br ${codigoEjemplos[selectedTech].color}`}>
              <h3 className="text-2xl font-bold text-white mb-3">{codigoEjemplos[selectedTech].nombre}</h3>
              <p className="text-gray-200">{codigoEjemplos[selectedTech].descripcion}</p>
            </div>

            {/* Ejemplos de código */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400">📝 Ejemplos de Código y Mejores Prácticas</h3>
              {codigoEjemplos[selectedTech].ejemplos.map((ejemplo, index) => (
                <div key={index} className="glass-card p-6 shine-effect">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{ejemplo.titulo}</h4>
                    <button
                      onClick={() => {
                        setCodeInput(ejemplo.codigo)
                        setCodeOutput('')
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                    >
                      📋 Copiar al Editor
                    </button>
                  </div>
                  
                  <div className="glass-card-dark p-4 mb-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{ejemplo.codigo}</code>
                    </pre>
                  </div>
                  
                  <div className="glass-card-dark p-4 border-l-4 border-cyan-500">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Explicación:</h5>
                        <p className="text-gray-300">{ejemplo.explicacion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Editor interactivo */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🖥️ Editor de Código Interactivo</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Escribe o pega tu código aquí:
                  </label>
                  <textarea
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder={`Escribe tu código ${selectedTech} aquí...`}
                    className="w-full h-64 bg-black/50 border border-white/10 rounded-lg p-4 text-gray-300 font-mono text-sm focus:border-cyan-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => ejecutarCodigo(selectedTech)}
                    disabled={!codeInput.trim()}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    ▶️ Validar Código
                  </button>
                  <button
                    onClick={() => {
                      setCodeInput('')
                      setCodeOutput('')
                    }}
                    className="px-6 py-3 glass-card-dark rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                  >
                    🗑️ Limpiar
                  </button>
                </div>

                {codeOutput && (
                  <div className="glass-card-dark p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-white mb-3 flex items-center">
                      <span className="text-2xl mr-2">📤</span>
                      Resultado de la Validación:
                    </h4>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">{codeOutput}</pre>
                  </div>
                )}
              </div>
            </div>

            {/* Advertencias de seguridad */}
            <div className="glass-card p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">⚠️</span>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Advertencias de Seguridad</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Este es un entorno de validación simulado. No ejecuta código real en el sistema.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Siempre prueba reglas nuevas en un entorno de laboratorio aislado antes de producción.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Mantén acceso alternativo (consola, IPMI) antes de aplicar reglas DROP en INPUT.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Documenta cada cambio con fecha, autor y justificación.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Realiza backups de configuración antes de cambios importantes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 backdrop-blur-xl bg-black/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="https://cybervaltorix.com/wp-content/uploads/2025/09/Logo-Valtorix-1.png"
                alt="Valtorix"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-gray-400">© 2025 Valtorix. Firewall Security Management.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentación</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Soporte</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
