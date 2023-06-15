//header scroll shadow
window.addEventListener('scroll', function(){
  var element = document.getElementById('box-shadow-header');
  var scrollPosition = window.scrollY || window.pageYOffset;
  
  if (scrollPosition > 10) {
    element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  } else {
    element.style.boxShadow = 'none';
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('box-shadow-header');
  element.style.boxShadow = 'none';
});


function changeImage(imagePath) {
    document.getElementById('main-image').src = imagePath;
    document.getElementById('image-caption').textContent = imagePath.split('/').pop(); // Set caption based on image filename
  }

  const ring = document.getElementsByClassName("button");

for(let i = 0; i < ring.length; i++) {
  ring[i].addEventListener('click', function () {
    for (let j = 0; j < ring.length; j++) {
      ring[j].classList.remove('active__choice');
    }
  this.classList.add('active__choice')
})}
function changeImage(imagePath) {
  document.getElementById('main-image').src = imagePath;
  document.getElementById('image-caption').textContent = imagePath.split('/').pop(); // Set caption based on image filename
}
// Add the active__choice class to the first button initially
ring[0].classList.add('active__choice');