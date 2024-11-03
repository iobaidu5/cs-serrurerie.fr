$(document).ready(function () {
  $("li.active, li.active2").removeClass("active active2");

  if (location.pathname === "/les-etapes" || location.pathname === "/nos-styles" || location.pathname === "/pergolas-bio" || location.pathname === "/pergolas-classique" || location.pathname === "/menuiserie" || location.pathname === "/volets-roulants") {
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active2");
  } else {
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  }
});


const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
    nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  let notification_toggle = document.getElementsByClassName("notification_toggle");
  let notifications = document.getElementsByClassName("notification");
  for (let i = 0; i < notification_toggle.length; i++) {
    notification_toggle[i].addEventListener("click", () => {
      notifications[i].classList.add("hide");
      let index = i;
      setTimeout(() => {
        notifications[index].remove()
      }, 1000);
    })
  }
})

let dropdowns = document.getElementsByClassName("navbar-dropdown");

for (let i = 0; i < dropdowns.length; i++) {
  let title = dropdowns[i].querySelector(".dropdown-title");
  let body = dropdowns[i].querySelector(".dropdown-body");

  title.addEventListener("click", () => {
    dropdowns[i].classList.toggle("active");
  })

  body.addEventListener("mouseleave", () => {
    dropdowns[i].classList.remove("active");
  })

}

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 40) {
    document.querySelectorAll('.navbar').forEach(function (elem) {
      elem.classList.add('fixnavbarmenu');
    });
  } else {
    document.querySelectorAll('.navbar').forEach(function (elem) {
      elem.classList.remove('fixnavbarmenu');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const currentUrl = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('#navbar-nav a');

  navLinks.forEach(link => {
    const linkUrl = link.getAttribute('href').split('/').pop();
    if (linkUrl === currentUrl) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carouselCustomers = new Swiper('.carousel-customers', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
        spaceBetween: 1,
        centeredSlides: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carouselPartners = new Swiper('.carousel-partners', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
      993: {
        slidesPerView: 6,
        spaceBetween: 1,
        centeredSlides: true,
      },
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carouselCustomers = new Swiper('.carousel-our-work', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
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
});

document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind('[data-fancybox="gallery-our-work"]', {
    Toolbar: {
      display: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
      ]
    },
    loop: false,
    protect: true
  });
});

document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind('[data-fancybox="gallery-partners"]', {
    Toolbar: {
      display: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
      ]
    },
    loop: false,
    protect: true
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter p:first-child');
  const duration = 5000;

  const updateCounter = (counter, target, increment, isPercentage) => {
    let current = parseFloat(counter.textContent) || 0;
    const interval = setInterval(() => {
      current = Math.min(current + increment, target);
      counter.textContent = Math.ceil(current) + (isPercentage ? '%' : '');
      if (current === target) clearInterval(interval);
    }, 100);
  };

  const initializeCounter = (counter) => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isPercentage = counter.textContent.includes('%');
    const increment = target / (duration / 100);
    updateCounter(counter, target, increment, isPercentage);
  };

  const onIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(initializeCounter);
        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
  observer.observe(document.querySelector('.numbers'));
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById('navbar');
  let scrollTimeout;

  window.addEventListener('scroll', function () {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    navbar.classList.add('navbar-hidden');

    scrollTimeout = setTimeout(function () {
      navbar.classList.remove('navbar-hidden');
    }, 150);
  });
});





function addTitleToLinks() {
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (!link.hasAttribute('title')) {
      var linkText = link.textContent;
      link.setAttribute('title', linkText);
    }
  });
}

addTitleToLinks();




$(document).ready(function () {
  $('.tabs_ul li:first-child').addClass('active');
  $('.tab-content .tab-pane:first-child').addClass('in active');

  $('.tabs_ul a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);

    $('.tabs_ul .active').removeClass('active');
    $this.parent().addClass('active');

    $('.tab-content .tab-pane').removeClass('in active');
    var target = $this.attr('href');
    $(target).addClass('in active');
  });
});



$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {

    //chnage count up speed here
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});