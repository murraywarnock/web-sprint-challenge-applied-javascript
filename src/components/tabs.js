import axios from "axios";
import { cardAppender } from './card'

const filterTopic = [];

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
      // HTML element structure
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("topics");

      for (const topic in topics) {
      // topics.forEach(topic => {
        const temp = headerDiv.appendChild(document.createElement("div"))
        temp.classList.add("tab");
        temp.classList.add(topic.substring(0, 4));
        temp.textContent = (topic);
        filterTopic.push(topic);
        temp.addEventListener("click", () => {
          filterTopic.length = 0;
          filterTopic.push(topic);
          console.log(filterTopic);
     })}
 
      
        // })
      // });
      
      console.log("filterTopic: ", filterTopic)
      // return headerDiv, filterTopic;
      return headerDiv;
    }
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let tabList = document.querySelector(selector);
  axios
    // .get("https://lambda-times-api.herokuapp.com/topics")
    // .then((result) => {
    //   const tabArray = result.data.topics;
    //   console.log("Tabs array: ", tabArray);
    //   tabList.appendChild(Tabs(tabArray));
    // })    
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((result) => {
     const tabArray = result.data.articles;
      console.log("Tabs array: ", tabArray);
      tabList.appendChild(Tabs(tabArray));
    })
    .catch((err) => {
      console.log(err);
    })
  return tabList;
}
cardAppender('.cards-container', filterTopic)


export { Tabs, tabsAppender }
