const imgs = document.querySelectorAll('[data-src]');
const imgOptions = {};

preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
  return;
  }
  img.src= src;

}

const imgObserver = new intersectionObserver((entries, imgObserver) => {
  entries.forEach(entry =>{
    if (!entry.isIntersection){
      return;
    }
    else {
      preloadImage(entry.target);
      imgObserver.unoberseve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.oberserve(iamge);
})
