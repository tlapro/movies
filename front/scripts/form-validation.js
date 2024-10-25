
const buttonAdd = document.getElementById('add');
buttonAdd.addEventListener('click', (event) => {
    
    event.preventDefault();

    const titleInput = document.getElementById('title').value;
    const yearInput = document.getElementById('year').value;
    const directorInput = document.getElementById('director').value;
    const durationInput = document.getElementById('duration').value;

    const ratingInput = document.getElementById('rating').value;
    const posterInput = document.getElementById('poster').value;

    checkEntries(titleInput, yearInput, directorInput, durationInput, ratingInput, posterInput);
});

function checkEntries(titleInput, yearInput, directorInput, durationInput, ratingInput, posterInput) {
    if (typeof titleInput !== 'string' || titleInput.trim() === '') {
        alert('El título debe ser una cadena de texto no vacía.');
        return;
    }

    const year = Number(yearInput)
    if (typeof year !== 'number' || isNaN(year) || year < 1921 || year > 2025){
        alert('Por favor, ingresa un año válido entre 1900 y el año actual.');
        return;
    }

    const directorRegex = /^[A-Za-z\s]+$/;
    if (!directorRegex.test(directorInput)) {
        alert('El director debe contener solo letras y espacios.');
        return;
    }
    // Revisar chequeo de duracion de pelicula
    const durationRegex = /^(0[0-9]|1[0-3]):([3-5][0]|[0-2][0-9]|[3-5][0])$/; // 00:30 a 12:59
    if (!durationRegex.test(durationInput)) {
        alert('La duración debe ser mayor a 00:30 y menor a 13:00.');
    }

    const imageUrlPattern = /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;
    if (!imageUrlPattern.test(posterInput)) {
        alert('Por favor, ingresa una URL válida de una imagen.');
    }
}

