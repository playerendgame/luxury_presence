window.addEventListener('scroll', function() {
    const navbar = this.document.getElementById('navbar');
    if(this.window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
})

function setCurrentYear(){
    const yearElement = document.querySelector('.year');

    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


document.addEventListener('DOMContentLoaded', setCurrentYear);


function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      current = target;
    }
    element.textContent = element.id === 'volume_sales' ? 
      '$' + (current/1000000000).toFixed(1) + 'B+' : 
      Math.floor(current) + '+';
  }, 16);
}


function startCounters() {
  const soldElement = document.getElementById('properties_sold');
  const salesElement = document.getElementById('volume_sales');
  
  if (soldElement && salesElement) {
    animateCounter(soldElement, 500);
    animateCounter(salesElement, 1200000000);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  setCurrentYear();
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  const counterElement = document.querySelector('.contents3');
  if (counterElement) {
    observer.observe(counterElement);
  }
});