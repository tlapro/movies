const section = document.getElementById('movies');

$.get("https://students-api.up.railway.app/movies", (data) => {
    renderCards(data);
});

const renderCards = (data) => {

    data.forEach(movie => {
        const newDivCard = document.createElement('div');
        newDivCard.classList.add('card-movie');
        
    const newLink = document.createElement('a');
    newLink.href = "#"

    const newDivContainer = document.createElement('div');
    newDivContainer.classList.add('image-container')
    const newImg = document.createElement('img');
    newImg.src = movie.poster;
    newImg.classList.add('image-movie')
    const newTitle = document.createElement('h2');
    newTitle.classList.add('title')
    newTitle.innerHTML = movie.title;
    const newYear = document.createElement('h2');
    newYear.classList.add('year');
    newYear.innerHTML = movie.year;
    
    newDivContainer.append(newImg, newTitle, newYear);
    newLink.append(newDivContainer);
    newDivCard.append(newLink);
    

    section.append(newDivCard);
    
});
};