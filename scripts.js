document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    // Initialize Bootstrap carousel with custom pause on hover behavior
    var carouselElement = document.querySelector('#carouselExampleCaptions');
    $(carouselElement).carousel({
      interval: 5000
    }).on('mouseenter', function () {
      $(this).carousel('pause');
    }).on('mouseleave', function () {
      $(this).carousel('cycle');
    });
  
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Show/hide elements on scroll
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const elements = document.querySelectorAll('.fade-in-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (scrollTop + window.innerHeight > elementTop + 100) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load to show initially visible elements
  });
  