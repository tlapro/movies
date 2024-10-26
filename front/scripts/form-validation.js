document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const directorInput = document.getElementById('director');
    const durationInput = document.getElementById('duration');
    const checks = document.getElementsByName('check');

    const ratingInput = document.getElementById('rating');
    const posterInput = document.getElementById('poster');

titleInput.addEventListener("input", () => {
        titleInput.value = titleInput.value(/^[a-zA-Z0-9\s\-!,'".:?]+$/, "");
});

yearInput.addEventListener("input", () => {
    yearInput.value = yearInput.value.replace(/[^0-9]/g, '').slice(0, 4);
});

directorInput.addEventListener("input", () => {
    directorInput.value = directorInput.value.replace(/[^a-zA-Z\s]/g, "").replace(/ {2,}/g, " ").trimStart();
});
// Revisar Input Rating
ratingInput.addEventListener("input", () => {
    ratingInput.value = ratingInput.value
        .replace(/[^0-9.]/g, '')                // Solo permite números y el punto
        .replace(/(.*\..*)\./g, '$1')           // Evita múltiples puntos
        .replace(/^(\d{1,2})(\.\d{0,2})?$/, '$1$2'); // Permite "n" o "n.nn"
});

ratingInput.addEventListener("input", () => {
     posterInput.value = posterInput.value.replace(/[^a-zA-Z0-9:/._-]/g, "").replace(/(https?:\/\/.*\.(jpg|jpeg|png|gif|svg)).*/, "$1");
});


    
    

const buttonAdd = document.getElementById('add');
buttonAdd.addEventListener('click', (event) => {
    const form = document.querySelector('.needs-validation');
    const checkboxError = document.getElementById('checkbox-error')
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    }
    let anyChecked = false;
    for (const check of checks) {
        if(check.checked) {
            anyChecked = true;
            break;
        }
    }
    if (!anyChecked) {
        event.preventDefault();
        checkboxError.style.display = 'block';
    } else {
        checkboxError.style.display = 'none';
    }
    
    checkEntries(titleInput.value, yearInput.value, directorInput.value, durationInput.value, checks.value, ratingInput.value, posterInput.value);
});

function checkEntries(titleInput, yearInput, directorInput, durationInput, checks, ratingInput, posterInput) {
    if (typeof titleInput !== 'string' || titleInput.trim() === '') {
        //alert('El título debe ser una cadena de texto no vacía.');
        return;
    }

    const year = Number(yearInput)
    if (typeof year !== 'number' || isNaN(year) || year < 1921 || year > 2025){
        // alert('Por favor, ingresa un año válido entre 1900 y el año actual.');
        return;
    }

    const directorRegex = /^[A-Za-z\s]+$/;
    if (!directorRegex.test(directorInput)) {
        // alert('El director debe contener solo letras y espacios.');
        return;
    }

    let anyChecked = false;
    for (const check of checks) {
        if(check.checked) {
            anyChecked = true;
            break;
        }
    }
    if (anyChecked === false) {
        // alert("Selecciona el/los género/s de la película.");
        return;
    }
    // Revisar chequeo de duracion de pelicula
    const durationRegex = /^(0[0-9]|1[0-3]):([3-5][0]|[0-2][0-9]|[3-5][0])$/; // 00:30 a 12:59
    if (!durationRegex.test(durationInput)) {
        // alert('La duración debe ser mayor a 00:30 y menor a 13:00.');
    }

    const imageUrlPattern = /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;
    if (!imageUrlPattern.test(posterInput)) {
        // alert('Por favor, ingresa una URL válida de una imagen.');
    }
}
});

