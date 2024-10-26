const renderCards = require("./renderCards");
const axios = require("axios");


document.addEventListener("DOMContentLoaded", () => {
    url = "https://students-api.up.railway.app/movies";
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













