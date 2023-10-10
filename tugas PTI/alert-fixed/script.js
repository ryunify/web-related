let isImageBackground = true;

function toggleMode() {
  var body = document.body;

  if (isImageBackground) {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundImage = "url(../supply/kobo scene 5 v2.png)";
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

  var discovers = document.querySelectorAll(".discover-change");

  discovers.forEach(function (discover) {
    if (discover.classList.contains("discover-default")) {
      discover.classList.remove("discover-default");
      discover.classList.add("discover-alternative");
    } else {
      discover.classList.remove("discover-alternative");
      discover.classList.add("discover-default");
    }
  });

  var texts = document.querySelectorAll(".text-change");

  texts.forEach(function (text) {
    if (text.classList.contains("text-default")) {
      text.classList.remove("text-default");
      text.classList.add("text-alternative");
    } else {
      text.classList.remove("text-alternative");
      text.classList.add("text-default");
    }
  });

  var points = document.querySelectorAll(".point");

  points.forEach(function (point) {
    if (point.classList.contains("point-default")) {
      point.classList.remove("point-default");
      point.classList.add("point-alternative");
    } else {
      point.classList.remove("point-alternative");
      point.classList.add("point-default");
    }
  });

  var texts2 = document.querySelectorAll(".text-change2");

  texts2.forEach(function (text2) {
    if (text2.classList.contains("text2-default")) {
      text2.classList.remove("text2-default");
      text2.classList.add("text2-alternative");
    } else {
      text2.classList.remove("text2-alternative");
      text2.classList.add("text2-default");
    }
  });
}