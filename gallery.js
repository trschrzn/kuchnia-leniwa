// ---- galeria -----
// GALLERY
function toggleState3() {
    let galleryView = document.getElementById("galleryView")
      galleryView.style.display = "flex";
      
      while (tilesContainer.hasChildNodes()) {
        tilesContainer.removeChild(tilesContainer.firstChild)
      }; 
};
  
let imgObject = [
    "img/okładki/IMG_20230503_143732.jpg",
    "img/okładki/IMG_20230503_143748.jpg",
    "img/okładki/IMG_20230503_143757.jpg",
    "img/okładki/IMG_20230503_143806.jpg",
    "img/okładki/IMG_20230503_143818.jpg",
];
  
let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;
  
function loadGallery() {
    let mainView = document.getElementById("mainView");
  
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
};
  
function scrollRight() {
    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length -1)) {
      nextImg = 0;
    } else {
      nextImg++;
    }; 
    loadGallery();
};
  
function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};
  
document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});
  
loadGallery();