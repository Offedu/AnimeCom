var login_username = document.getElementById("username");
var login_password = document.getElementById("password");
var login_button = document.getElementById("botaologar");

var logins = [];

login_button.style.opacity = "0.5";
login_button.style.pointerEvents = "none";

//lista [1 ,2, 3] => push (4) = [1, 2, 3, 4 ] ) (unshift (4) = [4, 1, 2, 3 ] )

function Login() {

  const user = {
    username: login_username.value,
    password: login_password.value,
  };

  const sessions = JSON.parse(localStorage.getItem("logins"));

  if (login_username.value && login_password.value) {

    //Caso existam logins
    if (sessions) {
      var user_Session = sessions.find(
        (user) => user.username === login_username.value
      );

      // Caso a pessoa nao exista
      if (!user_Session) {
        alert("Usuario foi criado com sucesso!");
        logins = [...sessions, user];
        localStorage.setItem("logins", JSON.stringify(logins));
        window.location.href = "home.html";
      } else {
        alert("O usuario " + user_Session.username + " ja existe");
        window.location.href = "home.html";
      }
    } else {
      /* Caso nao exista nenhum usuario no sistema ele vai adicionar num novo array 
      contendo a informacao do login */
      logins.push(user);
      localStorage.setItem("logins", JSON.stringify(logins));
      alert("Usuario foi criado com sucesso!");
      window.location.href = "home.html";
    }
  }
}

function OnValidate() {
  if (login_username.value && login_password.value) {
    login_button.style.opacity = "1";
    login_button.style.pointerEvents = "all";
  }
  else {
    login_button.style.opacity = "0.5";
    login_button.style.pointerEvents = "none";
  }
}