# Video para Landing Page en Móviles

## Instrucciones

Para que el video se reproduzca automáticamente en móviles ocupando toda la pantalla, debes:

1. **Subir tu video aquí** con el nombre `landing-video.mp4`
   - El video debe estar en formato MP4 para máxima compatibilidad
   - Se recomienda que el video esté optimizado para dispositivos móviles (resolución 720p o 1080p)

2. **Alternativas para alojar el video:**
   
   Si el video es muy grande, puedes alojarlo en servicios externos y cambiar la URL en `src/pages/landing.astro`:
   
   - **Vimeo:** Sube el video a Vimeo y usa la URL directa del archivo MP4
   - **Cloudflare Stream:** Servicio especializado para videos
   - **AWS S3 / DigitalOcean Spaces:** Almacenamiento en la nube
   - **Bunny.net:** CDN especializado en videos

3. **Cómo cambiar la URL del video:**
   
   Edita el archivo `src/pages/landing.astro` y busca esta línea:
   ```html
   <source src="/video/landing-video.mp4" type="video/mp4">
   ```
   
   Cámbiala por la URL de tu video:
   ```html
   <source src="https://tu-url-del-video.mp4" type="video/mp4">
   ```

## Características del Video en Móviles

- ✅ Se reproduce automáticamente al entrar desde móvil
- ✅ Ocupa toda la pantalla del dispositivo
- ✅ Tiene un botón para cerrar (X en la esquina superior derecha)
- ✅ Se cierra automáticamente cuando el video termina
- ✅ Incluye controles para pausar, adelantar, etc.
- ✅ El video está en mute por defecto (requerido para autoplay)

## Compatibilidad

La funcionalidad funciona en:
- ✅ iPhone / iOS Safari
- ✅ Android Chrome
- ✅ Android Firefox
- ✅ Todos los navegadores móviles modernos

## Notas Técnicas

- El video se detecta como móvil si el ancho de pantalla es ≤ 768px
- El atributo `playsinline` permite reproducción en iOS sin pantalla completa nativa
- El atributo `muted` es necesario para que funcione el autoplay
- El video tiene `preload="auto"` para carga más rápida

