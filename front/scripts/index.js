const renderCards = require("./renderCards");

document.addEventListener("DOMContentLoaded", () => {
    url = "https://students-api.up.railway.app/movies";
    $.get(url, (data) => {
        renderCards(data);
    });
});













