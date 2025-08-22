# 🚀 Landing Page Scaleally - Guía de Configuración

## 📍 **URL de Acceso**
La landing page estará disponible en: `scaleally.co/landing`

## 🎯 **Características Principales**

### **Hero Section con Video**
- **Video de fondo** con overlay gradiente
- **Título impactante** con animaciones
- **CTA principal** que abre Calendly
- **Indicadores de confianza** (métricas)

### **Sección de Servicios**
- **3 tarjetas** de servicios principales
- **Iconos SVG** personalizados
- **Efectos hover** con animaciones
- **Lista de beneficios** por servicio

### **Embed de Calendly**
- **Widget integrado** de Calendly
- **Diseño personalizado** con gradientes
- **CTA alternativo** para WhatsApp
- **Beneficios destacados** de la consulta

### **Secciones Adicionales**
- **Testimonios** de clientes
- **Proceso** de implementación (4 pasos)
- **CTA final** con múltiples opciones
- **Footer** completo con información

## 🎨 **Personalización**

### **Colores (Variables CSS)**
```css
--primary: #0f172a      /* Azul oscuro */
--secondary: #1e293b    /* Azul medio */
--accent: #6366f1       /* Azul-violeta principal */
--accent-hover: #4f46e5 /* Azul-violeta hover */
--accent-light: #818cf8 /* Azul claro */
```

### **Contenido a Personalizar**
1. **Título principal** - Línea 95
2. **Subtítulo** - Línea 100
3. **Métricas de confianza** - Líneas 110-125
4. **Servicios** - Líneas 140-220
5. **Testimonios** - Líneas 250-320
6. **Proceso** - Líneas 340-400
7. **URL de Calendly** - Línea 180 y 280

## 📱 **Responsive Design**
- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Grid layouts** que se adaptan automáticamente
- **Navegación móvil** con menú hamburguesa

## 🎬 **Archivos de Media Necesarios**

### **Imágenes**
- `/logo.png` - Logo de Scaleally
- `/video-poster.jpg` - Imagen de respaldo para el video

### **Video**
- `/hero-video.mp4` - Video de fondo del hero section

### **Recomendaciones de Video**
- **Duración**: 10-30 segundos (loop)
- **Formato**: MP4, WebM
- **Resolución**: 1920x1080 mínimo
- **Contenido sugerido**:
  - Equipo trabajando
  - Clientes satisfechos
  - Animaciones de crecimiento
  - Gráficos de métricas

## ⚙️ **Configuración de Calendly**

### **URL del Widget**
```javascript
https://calendly.com/scaleally/consulta-gratuita
```

### **Personalización del Widget**
- **Duración**: 30 minutos
- **Tipo**: Consulta gratuita
- **Campos**: Nombre, email, empresa, desafíos
- **Confirmación**: Email automático con detalles

## 🚀 **Despliegue**

### **1. Construir el Proyecto**
```bash
npm run build
```

### **2. Verificar la Ruta**
La landing page se generará en: `dist/landing/`

### **3. Subir al Servidor**
- Copiar `dist/landing/` al directorio raíz del servidor
- Configurar redirección de `/landing` a `landing/index.html`

## 📊 **Analytics y Tracking**

### **Google Analytics**
```html
<!-- Agregar en el <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Eventos de Conversión**
- **Clicks en CTA principal**
- **Apertura de Calendly**
- **Clicks en WhatsApp**
- **Scroll hasta sección Calendly**

## 🔧 **Optimizaciones Recomendadas**

### **Performance**
- **Lazy loading** para imágenes
- **Compresión de video** (WebM + MP4)
- **Minificación** de CSS/JS
- **CDN** para assets estáticos

### **SEO**
- **Meta tags** optimizados
- **Schema markup** para empresa
- **Open Graph** para redes sociales
- **Sitemap** actualizado

### **Conversión**
- **A/B testing** de CTAs
- **Heatmaps** de comportamiento
- **Formularios** de captura de leads
- **Chatbot** de soporte

## 📞 **Soporte**

Para personalizaciones adicionales o soporte técnico:
- **WhatsApp**: +57 301 569 9864
- **Email**: [Tu email]
- **Documentación**: [Enlace a docs]

---

**¡Tu landing page está lista para convertir visitantes en clientes! 🎉**
