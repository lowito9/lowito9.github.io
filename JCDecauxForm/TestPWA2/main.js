if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(e => console.error('Error SW:', e));
}

function agregarVCard() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Juan Pérez
TEL:+521234567890
EMAIL:juan@email.com
END:VCARD`;
  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'juan_perez.vcf';
  a.click();
}

function mostrarQR() {
  alert("Aquí puedes mostrar un QR con info de contacto (requiere implementación)");
}