// Función para scroll suave al Calendly - Cargada en el head para disponibilidad inmediata
function scrollToCalendly() {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
        calendlySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Hacer la función disponible globalmente
window.scrollToCalendly = scrollToCalendly;

// Asignar event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Botón principal
    const primaryCta = document.getElementById('primary-cta');
    if (primaryCta) {
        primaryCta.addEventListener('click', scrollToCalendly);
    }
    
    // Botón final
    const finalCta = document.getElementById('final-cta');
    if (finalCta) {
        finalCta.addEventListener('click', scrollToCalendly);
    }
    
    // Botón sobre mí
    const sobreMiCta = document.getElementById('sobre-mi-cta');
    if (sobreMiCta) {
        sobreMiCta.addEventListener('click', scrollToCalendly);
    }
    
    console.log('Event listeners asignados correctamente');
});

