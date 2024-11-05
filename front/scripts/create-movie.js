
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

}
});

const validateForm = (event) => {
    const form = document.querySelector('.needs-validation');
    const checkboxError = document.getElementById('checkbox-error')
    const checks = document.getElementsByName('check');

    if (!checkEntries()) {
        if (!form.checkValidity()) {
            event.preventDefault(); 
            event.stopPropagation();
            form.classList.add('was-validated');
        return;
        }
    return;
    }
    
    const [hours, minutes] = durationInput.value.split(':').map(Number);
    const durationFormat = `${hours}h ${minutes}min`;

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
            showAlert('success', 'Película Creada', 'La película se agregó correctamente.');
            return;
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };
    

    function checkEntries() { 
        const checkboxError = document.getElementById('checkbox-error')
        const checks = document.getElementsByName('check');

        const isCheckboxChecked = Array.from(checks).some(check => check.checked);
        if (!isCheckboxChecked) {
            checkboxError.style.display = 'block';
        } else {
            checkboxError.style.display = 'none';
        }
        if (!titleInput.value || !yearInput.value || !directorInput.value || !durationInput.value || !ratingInput.value || !posterInput.value || !isCheckboxChecked) {
            showAlert('error', 'Error', 'Todos los campos deben ser completados.');
            return false;
        }

        if (typeof titleInput.value !== 'string' || titleInput.value.trim() === '') {
            showAlert('error', 'Error', 'El título no ha sido ingresado.');
            return false;
        }
        
        const year = Number(yearInput.value);
        if (isNaN(year) || year < 1921 || year >= 2025) {
            showAlert('error', 'Error', 'Por favor, ingresa un año válido entre 1921 y el año actual.');
            return false;
        }

        const directorRegex = /^[A-Za-z\,]+(?:\s[A-Za-z\,]+)+$/;
        if (!directorRegex.test(directorInput.value)) {
            showAlert('error', 'Error', 'El director debe contener al menos un nombre y un apellido, en caso de ser más de un director, separarlos con coma.');
            return false;
        }

        const timePattern = /^\d{2}:\d{2}$/;
        if (!timePattern.test(durationInput.value)) {
        showAlert('error', 'Error', 'Ingresa una duración válida en formato HH:MM');
        return false;
        }

        if (!isCheckboxChecked) {
            showAlert('error', 'Error', 'Debes seleccionar al menos un género.');
            return;
        }

        const validFormat = /^(10(\.0{0,1})?|[0-9](\.\d{0,2})?)$/;
        if (!validFormat.test(ratingInput.value)) {
            showAlert('error', 'Error', 'Coloca el rating en el formato correspondiente. Ejemplo: 7.4');
            return false;
        }        
    
        const imageUrlPattern = /^(http|https):\/\/.*\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;
        if (!imageUrlPattern.test(posterInput.value)) {
            showAlert('error', 'Error','Por favor, ingresa una URL válida de una imagen.');
            return false;
        }
        return true;
    }

const clearForm = (event) => {
    const checkboxError = document.getElementById('checkbox-error')
    
    document.querySelector('form').reset();

    const formValidation = document.querySelector('.needs-validation');
    if (formValidation) {
        formValidation.classList.remove('was-validated');
    }
    checkboxError.style.display = 'none';
    showAlert('success', 'Campos borrados', 'Los campos han sido limpiados con éxito');
    
}    
function showAlert(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        color: '#FFD700', 
        background: '#000000', 
        iconColor: '#FFD700', 
        confirmButtonColor: '#FFD700', 
    });
}