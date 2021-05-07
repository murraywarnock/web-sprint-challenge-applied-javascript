const Header = (title, date, temp) => {
// function Header(title, date, temp) {
    // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
    // MSW code
  // HTML element structure
  const headerDiv = document.createElement("div");
  const headerSpanDate = headerDiv.appendChild(document.createElement("span"));
  const headerH1 = headerDiv.appendChild(document.createElement("h1"));
  const headerSpanTemp = headerDiv.appendChild(document.createElement("span"));

  // add classes to structure
  headerDiv.classList.add("header");
  headerSpanDate.classList.add("date");
  headerSpanTemp.classList.add("temp");

  // Populate data
  headerSpanDate.textContent = date;
  headerH1.textContent = title;
  headerSpanTemp.textContent = temp;

  return headerDiv;
}

// console.log(Header("This is the Title", "Jun 26, 1963", "70 degrees"));

// let headerContainer = document.querySelector(".header-container");
const headerAppender = (selector) => {

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector);
  headerContainer.appendChild(Header());

  return headerContainer;
}
// console.log(headerAppender('.header-container'));
export { Header, headerAppender }
