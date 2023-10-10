var isImageBackground = true;

function toggleMode() {
  var body = document.body;

  if (isImageBackground) {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundImage = "url(../supply/background-post.png)";
    body.style.backgroundColor = "initial";
  }

  isImageBackground = !isImageBackground;

  var body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  var modeText = document.getElementById("modeText");
  var currentText = modeText.innerText;

  var newText = currentText === "Light Mode" ? "Dark Mode" : "Light Mode";

  modeText.innerText = newText;

  var icons = document.querySelectorAll(".icon");

  icons.forEach(function (icon) {
    if (icon.classList.contains("icon-default")) {
      icon.classList.remove("icon-default");
      icon.classList.add("icon-alternative");
    } else {
      icon.classList.remove("icon-alternative");
      icon.classList.add("icon-default");
    }
  });
}
