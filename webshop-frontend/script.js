document.addEventListener('DOMContentLoaded', () => {
  const loggedUser = localStorage.getItem('loggedInUser');
  if(loggedUser && window.location.pathname.includes('index.html')){
    const authLinks = document.querySelector('.auth-links');
    if(authLinks){
      authLinks.innerHTML = `<span>Bine ai venit, ${loggedUser}</span>`;
    }
  }

  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const user = JSON.parse(localStorage.getItem('user'));
      if(user && username === user.username && password === user.password){
        localStorage.setItem('loggedInUser', username);
        alert('Autentificare reușită!');
        window.location.href = 'index.html';
      } else { alert('Date incorecte!'); }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if(registerForm){
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('regUsername').value;
      const password = document.getElementById('regPassword').value;
      if(username && password){
        localStorage.setItem('user', JSON.stringify({username,password}));
        alert('Cont creat cu succes! Te poți autentifica acum.');
        registerForm.reset();
      } else { alert('Completează toate câmpurile!'); }
    });
  }

  const products = document.querySelectorAll('.product');
  products.forEach(prod => {
    prod.addEventListener('mouseenter', () => {
      prod.style.transform = 'scale(1.05)';
      prod.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
    });
    prod.addEventListener('mouseleave', () => {
      prod.style.transform = 'scale(1)';
      prod.style.boxShadow = '0 3px 8px rgba(0,0,0,0.1)';
    });
  });
})
