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