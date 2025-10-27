document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userMenu = document.getElementById("userMenu");
  const userBtn = document.getElementById("userBtn");
  const loginRegister = document.getElementById("loginRegister");
  const logoutBtn = document.getElementById("logoutBtn");

  if(currentUser){
    userBtn.innerText = currentUser.name;
    userMenu.style.display = "inline-block";
    loginRegister.style.display = "none";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });
});
