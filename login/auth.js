import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
      import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      window.login = function (e) {
        e.preventDefault();
        var obj = {
          email: email.value,
          password: password.value,
        };

        const popup = document.querySelector(".popup");

        signInWithEmailAndPassword(auth, obj.email, obj.password)
          .then(function (success) {
            // document.getElementById("login-form").reset();
            popup.style.display = "block";
            setTimeout(function() {
              window.location.replace("../for-you-updated/");
            }, 2000);
          })
          .catch(function (error) {
            const errorMessage = error.message;
            console.log(error.message);
            popup.childNodes[1].childNodes[0].innerHTML = "Error !"
            if (errorMessage == "Firebase: Error (auth/invalid-email).") {
              popup.childNodes[3].innerHTML = "Email Anda Salah."
              popup.style.display = "block";
            } else if (errorMessage == "Firebase: Error (auth/invalid-login-credentials).") {
              popup.childNodes[3].innerHTML = "Password Anda Salah."
              popup.style.display = "block";
            }
            setTimeout(function() {
              popup.style.display = "none";
            }, 2000);
            document.getElementById("form").reset();
          });

        console.log(obj);
      };