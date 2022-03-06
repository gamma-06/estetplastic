import Swiper, {Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {

  if (document.querySelector(".header-services_btn")) {
    document.querySelector(".header-services_btn").addEventListener("click", () => {
      document.querySelector(".header-services_btn").classList.toggle("active")
      document.querySelector(".header-services").classList.toggle("active")
    })
  }

  let ms_1_swiper = new Swiper('.ms-1 .swiper', {
    slidesPerView: 1,
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    }
  });
  if (document.querySelector('.ms-1 .swiper-prev'))
    document.querySelector('.ms-1 .swiper-prev').addEventListener("click", () => ms_1_swiper.slidePrev())

  if (document.querySelector('.ms-1 .swiper-next'))
    document.querySelector('.ms-1 .swiper-next').addEventListener("click", () => ms_1_swiper.slideNext())

  new Swiper('.ms-2 .swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
  });

  let ms_3_swiper = new Swiper('.ms-3 .swiper', {
    slidesPerView: 4,
    spaceBetween: 55,
    pagination: {
      el: '.swiper-pagination',
    }
  });
  if (document.querySelector('.ms-3 .swiper-prev'))
    document.querySelector('.ms-3 .swiper-prev').addEventListener("click", () => ms_3_swiper.slidePrev())
  if (document.querySelector('.ms-3 .swiper-next'))
    document.querySelector('.ms-3 .swiper-next').addEventListener("click", () => ms_3_swiper.slideNext())

  document.querySelectorAll(".ms-4-faq-question").forEach(el => {
    el.addEventListener("click", () => el.parentElement.classList.toggle("active"))
  })

  let ms_5_swiper = new Swiper('.ms-5 .swiper', {
    slidesPerView: 4,
    spaceBetween: 35,
    pagination: {
      el: '.swiper-pagination',
    }
  });
  if (document.querySelector('.ms-5 .swiper-prev'))
    document.querySelector('.ms-5 .swiper-prev').addEventListener("click", () => ms_5_swiper.slidePrev())
  if (document.querySelector('.ms-5 .swiper-next'))
    document.querySelector('.ms-5 .swiper-next').addEventListener("click", () => ms_5_swiper.slideNext())

  if (document.querySelector(".ms-1-video")) {
    document.querySelector(".ms-1-video").addEventListener("click", () => {
      document.querySelector(".ms-1-modal").classList.add("active")
      document.querySelector(".ms-1-modal video").play()
    })
  }

  if (document.querySelector(".ms-1-modal svg")) {
    document.querySelector(".ms-1-modal svg").addEventListener("click", () => {
      document.querySelector(".ms-1-modal video").pause()
      document.querySelector(".ms-1-modal").classList.remove("active")
    })
  }

  let ms_gallery = new Swiper('.ms-gallery .swiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
    }
  });

  if (document.querySelector('.ms-gallery .swiper-prev'))
    document.querySelector('.ms-gallery .swiper-prev').addEventListener("click", () => ms_gallery.slidePrev())
  if (document.querySelector('.ms-gallery .swiper-next'))
    document.querySelector('.ms-gallery .swiper-next').addEventListener("click", () => ms_gallery.slideNext())

  let ms_certificates = new Swiper('.ms-certificates .swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
    }
  });

  document.querySelectorAll(".ms-href ul li a").forEach(el => {
    el.addEventListener("click", (e) => {
      document.querySelectorAll(".ms-href ul li a").forEach(el => el.parentElement.classList.remove("active"))
      e.preventDefault()
      let element = document.querySelector(el.getAttribute("href"))

      window.scrollTo({
        top: element.getBoundingClientRect().top,
        behavior: 'smooth'
      })
      el.parentElement.classList.add("active")
    })
  })

  document.querySelectorAll(".ms-tab ul li a").forEach(el => {
    el.addEventListener("click", (e) => {
      document.querySelectorAll(".ms-tab ul li a").forEach(el => el.parentElement.classList.remove("active"))
      e.preventDefault()
      document.querySelectorAll(".ms-content-tab").forEach(el => el.classList.remove("active"))
      document.querySelector(el.getAttribute("href")).classList.add("active")
      el.parentElement.classList.add("active")
    })
  })

  if (document.querySelector(".ms-service-menu_btn button")) {
    document.querySelector(".ms-service-menu_btn button").addEventListener("click", () => {
      document.querySelector(".ms-service-menu_btn button").classList.toggle("active")
      document.querySelector(".ms-service-menu").classList.toggle("active")
    })
  }

  let ms_operations = new Swiper('.ms-operations .swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
    }
  });

  if (document.querySelector('.ms-operations .swiper-prev'))
    document.querySelector('.ms-operations .swiper-prev').addEventListener("click", () => ms_operations.slidePrev())
  if (document.querySelector('.ms-operations .swiper-next'))
    document.querySelector('.ms-operations .swiper-next').addEventListener("click", () => ms_operations.slideNext())
})
