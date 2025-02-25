const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 3,
    perView: 5,
    focusAt: 'center',
    breakpoints: {
        1600: {
            perView: 4, 
            },
     1200: {
    perView: 3, 
    },
     800: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  });
  
  glide.on(['mount.after', 'run'], () => {
    // Remove the ID from all slides first
    document.querySelectorAll('.glide__slide').forEach(slide => {
      slide.removeAttribute('id');
    });
  
    // Add the ID to the focused slide
    const currentIndex = glide.index;
    const slides = document.querySelectorAll('.glide__slide');
    slides[currentIndex].setAttribute('id', 'active-slide');
  });
  
  glide.mount();