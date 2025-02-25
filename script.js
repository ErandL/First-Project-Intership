// Bars Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu = document.querySelector(".dropdown-menu i");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");

  dropdownMenu.addEventListener("click", function () {
    nav.classList.toggle("show");
    body.classList.toggle("no-scroll");
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !dropdownMenu.contains(event.target)) {
      nav.classList.remove("show");
      body.classList.remove("no-scroll");
    }
  });
});

// Sales Container Carousel img changer
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./img/ultimate-song-sale_1280_426_copy.png",
    "./img/ultimate-song-sale_1280_426_copy.png",
    "./img/ultimate-song-sale_1280_426_copy.png",
    "./img/ultimate-song-sale_1280_426_copy.png",
    "./img/ultimate-song-sale_1280_426_copy.png",
  ];

  let currentIndex = 0;
  const imgElement = document.querySelector(".img-carousel img");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  function updateImage() {
    imgElement.src = images[currentIndex];
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex === images.length - 1;
  }

  function changeImageAutomatically() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateImage();
  }

  rightArrow.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage();
    }
  });

  leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateImage();
    }
  });

  setInterval(changeImageAutomatically, 5000);

  updateImage();
});

// Cards Header changer
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".cards-header ul li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      const activeItem = document.getElementById("all-product-pink");

      if (activeItem) {
        activeItem.removeAttribute("id");
      }

      this.id = "all-product-pink";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const latestItems = document.querySelectorAll("#latest-head li");

  latestItems.forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector("#latest-head-active")?.removeAttribute("id");

      this.id = "latest-head-active";
    });
  });
});

// New Products Carousel
const carouselNew = document.querySelector(".products-carousel");
const arrowBtns = document.querySelectorAll(".product-wrapper i");
const firstCardWidth = carouselNew.querySelector(".card-products").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carouselNew.scrollLeft +=
      btn.id === "left-new" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carouselNew.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carouselNew.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carouselNew.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = (e) => {
  isDragging = false;
  carouselNew.classList.remove("dragging");
};

carouselNew.addEventListener("mousedown", dragStart);
carouselNew.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
