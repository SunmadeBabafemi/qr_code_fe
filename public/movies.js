import {axios} from '../public/bundle.js'
let movies 

const movieFetch = async() => {
  try {
    const response = await axios.get(
      'http://localhost:7007/api/v1/movies/find-by-qr-code'
    ) 
    console.log("🚀 ~ file: index.js:23 ~ movieFetch ~ response:", response?.data?.data)

    return  response.data.data
  } catch (error) {
    console.log("🚀 ~ file: index.js:10 ~ qrCodeFetch ~ error:", error)
    
  }
 
}

if(typeof window !== 'undefined'){
  const fulllistOfMovies = document.getElementById('movie-list');
  const allMOviesCards = document.getElementsByClassName('instructions-list');
  const refreshQRCOde = document.getElementById('refresh-qr-code');
  

  window.onload = async () => {
    let movieCards = ``
    movies = await movieFetch()
    for(const movie of movies){
      movieCards +=`<ul class="instructions-list" id="">
          <img id="refresh-qr-code"
              src='${movie.images[0]}'
              alt="movie-name"
              class="image-style"
          >
          <li>${movie.title}</li>
      </ul>
      <br>`
    }
    console.log("THIS IS CLIENT SIDE !!!");
    console.log("🚀 ~ file: movies.js:34 ~ movieCards:", movieCards)

  fulllistOfMovies.innerHTML = movieCards

  }
} else {
  console.log("THIS IS SERVER SIDE");
}
