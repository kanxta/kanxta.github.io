/**
 * Format Markdown
 */
window.onload = () => {
    let elem = document.getElementsByTagName("p");
    let br = document.createElement("br");

    for( var i = 0; i < elem.length; i++  ){
        elem[i].parentNode.insertBefore(br, elem[i].nextElementSibling);
    }
}

/**
 * Make Menu
 */
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
