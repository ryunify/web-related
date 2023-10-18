import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBLgMhUyDeD8u35f7KZcgJP8ocgDmi2wjY",
      authDomain: "ryuunify-test.firebaseapp.com",
      databaseURL: "https://ryuunify-test-default-rtdb.firebaseio.com",
      projectId: "ryuunify-test",
      storageBucket: "ryuunify-test.appspot.com",
      messagingSenderId: "924656693989",
      appId: "1:924656693989:web:5c1c678c529b588ae5da0c",
      measurementId: "G-Q7TJH5LBDN",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    var username = document.getElementById("username");
    var userId = document.getElementById("userId");
    var email = document.getElementById("email");
    var password = document.getElementById("password1");
    var password2 = document.getElementById("password2");

    window.signup = function (e) {
      e.preventDefault();

      var obj = {
        username: username.value,
        userId: userId.value,
        email: email.value,
        password: password.value,
      };

      const popup = document.querySelector(".popup");

      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
          document.getElementById("signup-form").reset();
          popup.childNodes[1].childNodes[0].innerHTML = "Selamat !";
          popup.childNodes[3].innerHTML = "akun anda telah dibuat."
          popup.style.display = "block";
          setTimeout(function() {
            window.location.replace("login/");
          }, 2000);
          // window.location.replace("login/");
        })
        .catch(function (error) {
          const errorMessage = error.message;
          console.log(error.message);
          popup.childNodes[1].childNodes[0].innerHTML = "Error !";
          if (errorMessage == "Firebase: Error (auth/invalid-email).") {
            popup.childNodes[3].innerHTML = "Email Anda Salah."
            popup.style.display = "block";
          } else if (errorMessage == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
            popup.childNodes[3].innerHTML = "Password Anda Salah."
            popup.style.display = "block";
          }
          setTimeout(function() {
            popup.style.display = "none";
          }, 2000);
        });

      console.log(obj);
    };