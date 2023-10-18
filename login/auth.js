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

        signInWithEmailAndPassword(auth, obj.email, obj.password)
          .then(function (success) {
            alert("boleee");
            // document.getElementById("form").reset();
            document.getElementById("form").reset();
            window.location.replace("../post-fixed/");
          })
          .catch(function (error) {
            alert("yh bg");
            // document.getElementById("form").reset();
          });

        console.log(obj);
      };