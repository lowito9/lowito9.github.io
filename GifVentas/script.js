document.getElementById('vcardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${nombre};;;;
FN:${nombre}
TEL:${telefono}
EMAIL:${email}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const file = new File([blob], 'contacto.vcf', { type: 'text/vcard' });

    subirArchivo(file);
});

function subirArchivo(file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://file.io', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            mostrarURL(data.link);
        } else {
            throw new Error('Error al subir el archivo');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').textContent = 'Hubo un error al subir la vCard.';
    });
}

function mostrarURL(url) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu vCard está lista: <a href="${url}" target="_blank">Descargar vCard</a>`;
}