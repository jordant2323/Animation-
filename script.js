// Create and animate game controllers
function createControllers() {
    const background = document.querySelector('.background');
    const numControllers = 20;
    for (let i = 0; i < numControllers; i++) {
        const controller = document.createElement('div');
        controller.className = 'controller';
        controller.style.left = `${Math.random() * 100}vw`;
        controller.style.top = `${Math.random() * 100}vh`;
        controller.style.animationDelay = `${Math.random() * 3}s`;
        background.appendChild(controller);
    }
}

// Animate fireball
const fireball = document.querySelector('.fireball');
let xSpeed = 2;
let ySpeed = 2;

function animateFireball() {
    let rect = document.body.getBoundingClientRect();
    let x = parseInt(fireball.style.left) || 5;
    let y = parseInt(fireball.style.top) || 5;
    x += xSpeed;
    y += ySpeed;
    if (x <= 5 || x >= rect.width - 45) xSpeed = -xSpeed;
    if (y <= 5 || y >= rect.height - 45) ySpeed = -ySpeed;
    fireball.style.left = `${x}px`;
    fireball.style.top = `${y}px`;
    requestAnimationFrame(animateFireball);
}


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function initMobileTabs() {
  if (window.innerWidth <= 768) {
    var tabs = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
}

window.onload = initMobileTabs;
window.onresize = initMobileTabs;
// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createControllers();
    animateFireball();
    
    // Add canvas background if needed
    const canvas = document.getElementById('triangleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // Very light background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
});
