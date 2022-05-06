const starWarDetails = document.querySelector('.movies');
const rightbuttons = document.querySelector('.right');

async function getMovies() {
    let url = 'https://swapi.dev/api/films/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderMovies() {
    let moviesinfo = await getMovies();
    let html = '';
    
    movies = moviesinfo.results
        let item = []
        let buttonitem = []
        let i = 0
    for (let movie of movies){
        item[i] = document.createElement('li');
        item[i].innerHTML = `<div class="t${i}">
                            <h3 style="display:inline-block"> ${movie.title} ${movie.episode_id} ${movie.release_date} </h3> 
                            <button class="b${i}" type="button" onclick="" style="position:fixed;right: 50px;color:orange;padding:0; border: none; background: none;"> Starships </button>
                            </div>`;
        item[i].style.color = 'white'

        buttonitem[i] = document.createElement('button');
    
        
        
        
        starWarDetails.appendChild(item[i]);
        i++
    }

    console.log(movies.results)
    
}

renderMovies();