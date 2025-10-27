// ------------------- REGISTER -------------------
const registerForm = document.getElementById("registerForm");
if(registerForm){
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.find(u => u.email === email)){
      alert("Email deja folosit!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Înregistrare reușită!");
    window.location.href = "login.html";
  });
}

// ------------------- LOGIN -------------------
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if(user){
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login reușit! Bun venit, " + user.name);
      window.location.href = "index.html";
    } else {
      alert("Email sau parolă incorectă!");
    }
  });
}
