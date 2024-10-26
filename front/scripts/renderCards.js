const section = document.getElementById('movies');

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

        newImg.addEventListener('mouseenter', () => renderInfo(movie, newDivContainer));
        
        newImg.addEventListener('mouseleave', () => deleteInfo(newDivContainer));

        
    });
    };

    function renderInfo(movie, divImg) {
        
        const mInfo = document.createElement('div');
        mInfo.innerHTML = `<h4>| Duración |</h4><p>${movie.duration}</p>
        <h4>| Director |</h4>  <p>${movie.director}</p>
        <h4>| Género | </h4>
        <p>${movie.genre.join(', ')}</p>
        <h4>| Rating |</h4> <h5>
        <img class="img-star" src="/assets/img/star.png" alt="star">
        ${movie.rate}
        </h5>`;
        mInfo.classList.add('movie-info')

        divImg.append(mInfo);
    }
    function deleteInfo(divImg) {
        const existingInfo = divImg.querySelector('div');
        if (existingInfo) {
            divImg.removeChild(existingInfo);
        }
    }

module.exports = renderCards;