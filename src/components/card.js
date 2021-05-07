import axios from "axios";

const Card = (article) => {
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
  // HTML structure
  const cardDiv = document.createElement("div")
  const headlineDiv = cardDiv.appendChild(document.createElement("div"));
  const authorDiv = cardDiv.appendChild(document.createElement("div"));
  const imageContainerDiv = authorDiv.appendChild(document.createElement("div"));
  const authorImage = imageContainerDiv.appendChild(document.createElement("img"));
  const authorNameSpan = authorDiv.appendChild(document.createElement("span"));
  // Add Classes
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imageContainerDiv.classList.add("img-container");
  // Populate Data
  headlineDiv.textContent = article.headline;
  authorNameSpan.textContent = article.authorName;
  authorImage.src = article.authorPhoto;
  // Event listener on click
  cardDiv.addEventListener("click", () => {
    console.log(headlineDiv.textContent);
    console.log(cardDiv.classList);
  })
  return cardDiv
};


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cards = document.querySelector(".cards-container");
  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((result) => {
      const topics = result.data.articles
      console.log("topics:", topics);
      for (const topic in topics) {
        console.log("topic:", topics[topic]);
        let articles = topics[topic];
        articles.forEach((article) => {
          cards.appendChild(Card(article))
        })
      }
    })
    .catch((err) => {
        console.log(err);
      })
      
    }
  
export { Card, cardAppender }

    // const topicsTabs = document.querySelectorAll(".tab");
    // console.log("Topics data: ", topics);
    // console.log("Topics tabs: ", topicsTabs[1].textContent);
    // topicsTabs.forEach((topic) => {
    //   topic.textContent
    // })
    // topics.forEach((topic) => {
    //   console.log(topic);
    // })
