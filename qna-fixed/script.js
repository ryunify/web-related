let isImageBackground = true;

const input = document.querySelector(".input-search");

input.addEventListener("input", (event) => {
  if (document.body.classList.contains("dark-mode")) {
    input.style.color = event.target.value ? "white" : "black";
  } else {
    input.style.color = event.target.value ? "black" : "white";
  }
});

function toggleMode() {
  var body = document.body;

  if (document.body.classList.contains("dark-mode")) {
    input.style.color = event.target.value ? "white" : "black";
  } else {
    input.style.color = event.target.value ? "black" : "white";
  }

  let cont = document.querySelector(".container");
  let button = document.querySelectorAll("button");

  if (cont.classList.contains("bgcontL")) {
    cont.classList.add("bgcontD");
    cont.classList.remove("bgcontL");
  } else {
    cont.classList.add("bgcontL");
    cont.classList.remove("bgcontD");
  }

  button.forEach(function (e) {
    if (cont.classList.contains("bgcontL")) {
      e.style.color = "black";
    } else {
      e.style.color = "white";
    }
  });

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

const region = document.querySelector(".region");

region.addEventListener("click", (e) => {
  if (e.target.classList.contains("upvote")) {
      if (e.target.childNodes[3].classList.contains("upvoteOn")) {
        e.target.childNodes[3].innerHTML++;
        e.target.childNodes[3].style.fontWeight = "600";
        e.target.childNodes[3].classList.toggle("upvoteOn");
      } else {
        e.target.childNodes[3].innerHTML--;
        e.target.childNodes[3].style.fontWeight = "300";
        e.target.childNodes[3].classList.toggle("upvoteOn");
      }
  } else if (e.target.classList.contains("upvote-value")) {
    if (e.target.classList.contains("upvoteOn")) {
      e.target.innerHTML++;
      e.target.style.fontWeight = "600";
      e.target.classList.toggle("upvoteOn");
    } else {
      e.target.innerHTML--;
      e.target.classList.toggle("upvoteOn");
      e.target.style.fontWeight = "300";
    }
  } 
  if (e.target.classList.contains("dropBtn")) {
    console.log(e.target);
    if (e.target.classList.contains("btnOn")) {
      e.target.classList.remove("btnOn");
      e.target.nextElementSibling.style.display = "flex";
      e.target.parentNode.style.top = "78px";
    } else {
      e.target.classList.add("btnOn");
      e.target.nextElementSibling.style.display = "none";
      e.target.parentNode.style.top = "0px";
    }
  } 
  if (e.target.classList.contains("pathdropBtn")) {
    console.log(e.target.parentNode);
    if (e.target.parentNode.classList.contains("btnOn")) {
      e.target.parentNode.classList.remove("btnOn");
      e.target.parentNode.nextElementSibling.style.display = "flex";
      e.target.parentNode.parentNode.style.top = "78px";
    } else {
      e.target.parentNode.classList.add("btnOn");
      e.target.parentNode.nextElementSibling.style.display = "none";
      e.target.parentNode.parentNode.style.top = "0px";
    }
  }
});
