const imagesLoader = document.querySelectorAll('img[data-src]');

const imgOptions={
    threshold:3,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((objects, observer) => {
      objects.forEach((object) => {
        if(object.isIntersecting) {
          loadImages(object.target);
          imgObserver.unobserve(object.target);
        }
      });
    });
    imagesLoader.forEach((img) => {
      imgObserver.observe(img);
    });
  } else {
    imagesLoader.forEach((img) => {
      loadImages(img);
    });
  }
