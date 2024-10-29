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
});

const buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', (event) => {
    event.preventDefault();

    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.value = '';
    }
    const checks = document.getElementsByName('check');
    for (const check of checks) {
        check.checked = false;
    }
});
