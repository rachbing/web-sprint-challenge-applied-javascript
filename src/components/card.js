import axios from "axios";

const Card = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(image);

  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.addEventListener("click", () => {
    console.log(headline.textContent)
  });
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return card;
}

const cardAppender = (selector) => {
  const entryPoint = document.querySelector(selector);
  axios.get("http://localhost:5000/api/articles")
  .then(res => {
    for(let i = 0; i < res.data.articles.bootstrap.length; i++) {
      const bootstrap = res.data.articles.bootstrap[i];
      Card(res.data.articles.bootstrap[i]);
      const card = Card({ headline: bootstrap.headline, authorPhoto: bootstrap.authorPhoto, authorName: bootstrap.authorName, })
      entryPoint.appendChild(card);
    }
    for(let i = 0; i < res.data.articles.javascript.length; i++) {
      const javascript = res.data.articles.javascript[i];
      Card(res.data.articles.javascript[i]);
      const card = Card({ headline: javascript.headline, authorPhoto: javascript.authorPhoto, authorName: javascript.authorName, })
      entryPoint.appendChild(card);
    }
    for(let i = 0; i < res.data.articles.jquery.length; i++) {
      const jquery = res.data.articles.jquery[i];
      Card(res.data.articles.jquery[i]);
      const card = Card({ headline: jquery.headline, authorPhoto: jquery.authorPhoto, authorName: jquery.authorName, })
      entryPoint.appendChild(card);
    }
    for(let i = 0; i < res.data.articles.node.length; i++) {
      const node = res.data.articles.node[i];
      Card(res.data.articles.node[i]);
      const card = Card({ headline: node.headline, authorPhoto: node.authorPhoto, authorName: node.authorName, })
      entryPoint.appendChild(card);
    }
    for(let i = 0; i < res.data.articles.technology.length; i++) {
      const technology = res.data.articles.technology[i];
      Card(res.data.articles.technology[i]);
      const card = Card({ headline: technology.headline, authorPhoto: technology.authorPhoto, authorName: technology.authorName, })
      entryPoint.appendChild(card);
    }
    
  })
  .catch(err => {
    console.error(err);
  })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
