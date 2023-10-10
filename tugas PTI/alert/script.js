const footerArticle = document.querySelector("footer-article");

footerArticle.addEventListener("click", function (e) {
  if (e.target.classList == "love") {
    e.target.style.fill = "black";
  }
});
