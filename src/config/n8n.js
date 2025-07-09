// Configuración para el webhook de n8n
export const N8N_CONFIG = {
  // Reemplaza esta URL con tu webhook de n8n
  WEBHOOK_URL: 'https://olympo-n8n.bsnk1a.easypanel.host/webhook-test/d7676169-5834-4427-ab34-f7f431b0b413',
  
  // Configuración adicional
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
  
  // Headers personalizados si los necesitas
  HEADERS: {
    'Content-Type': 'application/json',
    'User-Agent': 'Scaleally-Chat-Widget/1.0'
  }
};

// Función para enviar mensajes a n8n
export async function sendToN8N(messageData) {
  try {
    const response = await fetch(N8N_CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: N8N_CONFIG.HEADERS,
      body: JSON.stringify({
        ...messageData,
        timestamp: new Date().toISOString(),
        source: 'scaleally-chat-widget'
      }),
      signal: AbortSignal.timeout(N8N_CONFIG.TIMEOUT)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error enviando mensaje a n8n:', error);
    throw error;
  }
}

// Función para validar la configuración
export function validateN8NConfig() {
  if (!N8N_CONFIG.WEBHOOK_URL || N8N_CONFIG.WEBHOOK_URL === 'TU_WEBHOOK_URL_AQUI') {
    console.warn('⚠️ N8N webhook URL no configurada. Por favor, actualiza la URL en src/config/n8n.js');
    return false;
  }
  return true;
} 