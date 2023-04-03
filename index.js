script.js
const movieList = document.getElementById('movie-list')
const movieContainer = document.getElementById('movie-details')
document.addEventListener('DOMContentLoaded', () => {
    handleGet();
    movieDetails()

})
function handleGet() {
    fetch('http://localhost:3000/films')
        .then((res) => {
            return res.json()
        })
        .then(data =>
            createMovieList(data),
           )
}

function createMovieList(data) {
    data.forEach((data) => {
        const li = document.createElement('li');
        li.textContent = data.title;
        movieList.appendChild(li)
    })
    
}
function movieDetails (){
    fetch('http://localhost:3000/films')
    .then((res) => {
        return res.json()
    })
    .then(data =>
        viewMovieDetails(data),
  )
}
function viewMovieDetails (data) {

    data.forEach((data) => {

        const movieCard = document.createElement('div');

        movieContainer.appendChild(movieCard);

        const moviePoster = document.createElement('img');

        moviePoster.setAttribute('src', data.poster);

        movieCard.appendChild(moviePoster);

        const movieTitle = document.createElement('h1')

        movieTitle.textContent = data.title;

        movieCard.appendChild(movieTitle)

        const movieRuntime = document.createElement('p');

        movieRuntime.textContent = `Runtime: ${data.runtime} minutes`;

        movieCard.appendChild(movieRuntime);

        const movieShowtime = document.createElement('p');

        movieShowtime.textContent = `Showtime: ${data.showtime}.`

        movieCard.appendChild(movieShowtime);

        const buyTicketButton = document.createElement('button');

        buyTicketButton.innerHTML = 'Buy Ticket'; 

        let availableTickets = document.createElement('p')
        
            buyTicketButton.addEventListener('click', () => {

            let tickets = (parseInt(data.capacity - data.tickets_sold));

            tickets--;  
                     
                if (tickets<=0){

                availableTickets.textContent = "Sold Out"

                        }
        availableTickets.textContent = 'Available Tickets: ' + tickets;

        movieCard.appendChild(availableTickets) 
        
        
                    });


                    
        movieCard.appendChild(buyTicketButton);
        

        })
        
        
    }