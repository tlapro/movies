document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const directorInput = document.getElementById('director');
    const durationInput = document.getElementById('duration');
    const ratingInput = document.getElementById('rating');
    const posterInput = document.getElementById('poster');
    const checkboxError = document.getElementById('checkbox-error')
    const checks = document.querySelectorAll('input[type="checkbox"]');
    

    function capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    function capitalizeWords(text) {
        return text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }


    checks.forEach(check => {
            check.addEventListener("click", () => {
                const anyChecked = Array.from(checks).some(check => check.checked);
                
                if (!anyChecked) {
                    checkboxError.style.display = 'block';
                } else {
                    checkboxError.style.display = 'none';
                }
            });
        });
    

    titleInput.addEventListener("input", () => {
        titleInput.value = capitalizeFirstLetter(titleInput.value.replace(/[^a-zA-Z0-9\s\-!,'".:?]+/g, ""));
    });

    yearInput.addEventListener("input", () => {
        yearInput.value = yearInput.value.replace(/[^0-9]/g, '').slice(0, 4);
    });

    directorInput.addEventListener("input", () => {
        directorInput.value = capitalizeWords(directorInput.value.replace(/[^a-zA-Z\s\,]/g, "").replace(/ {2,}/g, " ").trimStart());
    });

    durationInput.addEventListener("change", () => {
        const [hours, minutes] = durationInput.value.split(':').map(Number);
        if ((hours === 0 && minutes < 30) || hours > 12) {
            alert('La duración debe ser mayor a 00:30 y menor a 13:00.');
            durationInput.value = '';
        }
    })
    ratingInput.addEventListener("input", () => {
        ratingInput.value = ratingInput.value.replace(/,/g, '.').replace(/[^0-9.]/g, '');
        const validFormat = /^(10(\.0{0,1})?|[0-9](\.\d{0,2})?)$/;
        if (!validFormat.test(ratingInput.value)) {
            ratingInput.value = ratingInput.value.slice(0, -1);
        }
    });

    ratingInput.addEventListener("input", () => {
        posterInput.value = posterInput.value.replace(/[^a-zA-Z0-9:/._-]/g, "").replace(/(https?:\/\/.*\.(jpg|jpeg|png|gif|svg)).*/, "$1");
    });
    

    
});