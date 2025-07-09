# Configuración del Chat Automatizado con n8n

## 🚀 Instalación

El chat automatizado ya está integrado en tu sitio web de Scaleally. Solo necesitas configurar el webhook de n8n.

## ⚙️ Configuración del Webhook

### 1. Actualizar la URL del Webhook

Edita el archivo `src/config/n8n.js` y reemplaza `'TU_WEBHOOK_URL_AQUI'` con tu URL de webhook de n8n:

```javascript
export const N8N_CONFIG = {
  WEBHOOK_URL: 'https://tu-instancia-n8n.com/webhook/scaleally-chat',
  // ... resto de la configuración
};
```

### 2. Estructura del Webhook

El chat envía los siguientes datos a tu webhook de n8n:

```json
{
  "message": "Mensaje del usuario",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "url": "https://tu-sitio.com",
  "sessionId": "session_1705312200000_abc123def",
  "source": "scaleally-chat-widget"
}
```

### 3. Respuesta Esperada

Tu webhook debe responder con:

```json
{
  "response": "Respuesta automatizada del bot"
}
```

## 🤖 Configuración en n8n

### Nodo Webhook
1. Crea un nodo **Webhook**
2. Configura el método como `POST`
3. Copia la URL generada y úsala en `src/config/n8n.js`

### Procesamiento del Mensaje
1. Conecta el webhook a un nodo **Switch** para categorizar mensajes
2. Usa nodos **IF** para diferentes tipos de consultas:
   - Servicios de Scaleally
   - Precios
   - Contacto
   - Información general

### Respuestas Automatizadas
Puedes usar:
- **Set** node para respuestas simples
- **OpenAI** node para respuestas más inteligentes
- **HTTP Request** para consultar bases de datos
- **Code** node para lógica personalizada

### Ejemplo de Flujo Básico
```
Webhook → Switch → IF (contiene "servicios") → Set (respuesta servicios)
         ↓
         IF (contiene "precio") → Set (respuesta precios)
         ↓
         IF (contiene "contacto") → HTTP Request (WhatsApp API)
         ↓
         Set (respuesta por defecto)
```

## 📱 Características del Chat

### ✅ Funcionalidades Implementadas
- Chat flotante en la esquina inferior derecha
- Diseño responsive
- Indicador de escritura
- Persistencia de sesión
- Manejo de errores
- Integración completa con n8n

### 🎨 Personalización
- Colores que coinciden con tu marca (violeta/azul)
- Animaciones suaves
- Diseño moderno y profesional

### 📊 Datos Enviados
- Mensaje del usuario
- Timestamp
- User Agent
- URL de la página
- ID de sesión único
- Información de la fuente

## 🔧 Desarrollo

### Archivos Principales
- `src/components/ChatWidget.astro` - Componente del chat
- `src/config/n8n.js` - Configuración del webhook
- `src/pages/index.astro` - Integración en la página principal

### Comandos de Desarrollo
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
```

## 🚨 Solución de Problemas

### Chat no aparece
- Verifica que el componente esté importado en `index.astro`
- Revisa la consola del navegador para errores

### Webhook no responde
- Verifica la URL en `src/config/n8n.js`
- Asegúrate de que n8n esté ejecutándose
- Revisa los logs de n8n

### Errores de CORS
- Configura CORS en tu instancia de n8n
- O usa un proxy si es necesario

## 📞 Soporte

Para ayuda adicional:
- WhatsApp: +57 315-436-0996
- Email: [tu-email@scaleally.com]

---

**Nota:** Asegúrate de probar el chat en un entorno de desarrollo antes de desplegarlo en producción. 