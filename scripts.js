document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "JedidiahChua" && password === "iloveitc") {
    window.location.href = "main.html"; 
  } else {
    document.getElementById("error-message").innerText = "Invalid username or password!";
  }
});

document.getElementById("toggle-password").addEventListener("click", () => {
  const passwordField = document.getElementById("password");
  const icon = document.getElementById("toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.src = "images/showpass-icon-active.png"; 
  } else {
    passwordField.type = "password";
    icon.src = "images/showpass-icon.png"; 
  }
});

function goToUserPage() {
  window.location.href = "user.html";
}
 
function goToPortfolio(portfolioId) {
  window.location.href = `portfolio${portfolioId}.html`;
}

function logout() {
  window.location.href = "index.html";  
}

function goToLogoutPage() {
  window.location.href = "user.html";  
}

function goBack() {
  window.history.back();
}

function goNext1() {
  window.location.href = "portfolio2.html";
}

function goNext2() {
  window.location.href = "portfolio3.html";
}

function goNext3() {
  window.location.href = "portfolio4.html";
}

function goNext4() {
  window.location.href = "portfolio5.html";
}

function goNext5() {
  window.location.href = "portfolio6.html";
}

function goNext6() {
  window.location.href = "portfolio1.html";
}

function showPage(page) {
  document.getElementById('current-page').src = page;
}

function goHome() {
  window.location.href = 'main.html'; 
}

const portfolioContainer = document.querySelector('.portfolio-container');
portfolioContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  portfolioContainer.scrollTop += event.deltaY; 
});