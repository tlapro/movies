const renderCards = require("./renderCards");

document.addEventListener("DOMContentLoaded", () => {

    $.get("https://students-api.up.railway.app/movies", (data) => {
        renderCards(data);
    });
});













