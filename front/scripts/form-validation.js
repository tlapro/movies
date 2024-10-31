
let titleInput, yearInput, directorInput, durationInput, ratingInput, posterInput;

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('add-form')) {
    titleInput = document.getElementById('title');
    yearInput = document.getElementById('year');
    directorInput = document.getElementById('director');
    durationInput = document.getElementById('duration');

    ratingInput = document.getElementById('rating');
    posterInput = document.getElementById('poster');

    const buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', (event) => validateForm(event));

    const buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', (event) => clearForm(event));

    titleInput.addEventListener("input", () => {
            titleInput.value = titleInput.value.replace(/[^a-zA-Z0-9\s\-!,'".:?]+/g, "");
    });

    yearInput.addEventListener("input", () => {
        yearInput.value = yearInput.value.replace(/[^0-9]/g, '').slice(0, 4);
    });

    directorInput.addEventListener("input", () => {
        directorInput.value = directorInput.value.replace(/[^a-zA-Z\s]/g, "").replace(/ {2,}/g, " ").trimStart();
    });

    durationInput.addEventListener("keydown", (event) => {
        event.preventDefault(); 
    });
    durationInput.addEventListener("change", () => {

        const [hours, minutes] = durationInput.value.split(':').map(Number);
        if ((hours === 0 && minutes < 30) || hours > 12) {
            alert('La duración debe ser mayor a 00:30 y menor a 13:00.');
            durationInput.value = '';
        }
    })
    ratingInput.addEventListener("input", (event) => {

        ratingInput.value = ratingInput.value.replace(/,/g, '.').replace(/[^0-9.]/g, '');
        const validFormat = /^(10(\.0{0,1})?|[0-9](\.\d{0,2})?)$/;
        if (!validFormat.test(ratingInput.value)) {
            ratingInput.value = ratingInput.value.slice(0, -1);
        }
    });
    ratingInput.addEventListener("input", () => {
        posterInput.value = posterInput.value.replace(/[^a-zA-Z0-9:/._-]/g, "").replace(/(https?:\/\/.*\.(jpg|jpeg|png|gif|svg)).*/, "$1");
    });

}
});

const validateForm = (event) => {
    const form = document.querySelector('.needs-validation');
    const checkboxError = document.getElementById('checkbox-error')
    const checks = document.getElementsByName('check');

    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
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
        return;
    } else {
        checkboxError.style.display = 'none';
    }

    checkEntries(titleInput.value, yearInput.value, directorInput.value, durationInput.value, ratingInput.value, posterInput.value)

    const [hours, minutes] = durationInput.value.split(':').map(Number);
    const durationFormat = `${hours}H ${minutes}Min`;

    const movieData = {
        title: titleInput.value,
        year: yearInput.value,
        director: directorInput.value,
        duration: durationFormat,
        genre: Array.from(checks).filter(check => check.checked).map(check => check.value), 
        rate: ratingInput.value,
        poster: posterInput.value
    };
    sendMovies(movieData);

}
    const sendMovies = async (movieData) => {
        try {
            const response = await axios.post('http://localhost:3000/movies', movieData);
            // console.log(response.data); // Maneja la respuesta del servidor
        } catch (error) {
            console.error('Error al enviar los datos:', error); // Manejo de errores
            // Aquí puedes mostrar un mensaje de error al usuario
        }
    };  

function checkEntries(titleInput, yearInput, directorInput, durationInput, ratingInput, posterInput) {
    const checks = document.getElementsByName('check');

    if (typeof titleInput.value !== 'string' || titleInput.value.trim() === '') {
        //alert('El título debe ser una cadena de texto no vacía.');
        return;
    }

    if (typeof yearInput.value !== 'number' || isNaN(yearInput.value) || yearInput.value < 1921 || yearInput.value > 2025){
        // alert('Por favor, ingresa un año válido entre 1900 y el año actual.');
        return;
    }

    const directorRegex = /^[A-Za-z\s]+$/;
    if (!directorRegex.test(directorInput.value)) {
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
    if (!durationRegex.test(durationInput.value)) {
        alert('La duración debe ser mayor a 00:30 y menor a 13:00.');
    }
    
    const validFormat = /^(10(\.0{0,1})?|[0-9](\.\d{0,2})?)$/;
    
        if (!validFormat.test(ratingInput.value)) {
            ratingInput.value = ratingInput.value.slice(0, -1);
            alert("asd")
        }

    const imageUrlPattern = /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;
    if (!imageUrlPattern.test(posterInput)) {
        // alert('Por favor, ingresa una URL válida de una imagen.');
    }
}

const clearForm = (event) => {

    event.preventDefault();
    
    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.value = '';
    }
    const checks = document.getElementsByName('check');
    for (const check of checks) {
        check.checked = false;
    }
}    
