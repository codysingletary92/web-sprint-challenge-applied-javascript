// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


import axios from 'axios'

function articleCardMaker (data) {

    let articles = data.data.articles

    const mainDiv = document.querySelector(".cards-container")
    
    
    Object.keys(articles).forEach( elem => {
        articles[elem].forEach( article => {

            console.log(article)
            let cardDiv = document.createElement('div')
            let headline = document.createElement('div')
            let author = document.createElement('div')
            let imgContainter = document.createElement('div')
            let img = document.createElement('img')
            let span = document.createElement('span')

            headline.classList.add('headline')
            author.classList.add('author')
            imgContainter.classList.add('img-container')
            cardDiv.classList.add('card')

            headline.textContent = article.headline
            span.textContent = 'By: '+article.authorName
            img.src = article.authorPhoto


            imgContainter.appendChild(img)
            author.appendChild(imgContainter)
            author.appendChild(span)
            cardDiv.appendChild(headline)
            cardDiv.appendChild(author)
            mainDiv.appendChild(cardDiv)
        });
    })
      
    return cardDiv

    
}



axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(data => articleCardMaker(data))
    .catch(err => console.log(err))


