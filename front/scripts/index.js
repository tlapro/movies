const renderCards = require("./renderCards");
const { validateForm, sendMovies } = require("./form-validation");
const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
    url = "http://localhost:3000/movies";
    const fetchMovies  = async () => {
    try{
        const data = await axios.get(url);
        renderCards(data.data)
    } catch(err) {
        console.log(err.message); 
    }
}
    fetchMovies()

});



// $.get(url, (data, status) => {
    //     renderCards(data);
    // });













