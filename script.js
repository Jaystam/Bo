//popup
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
    setTimeout(function() {
      hidePopup();
    }, 500); // 1 second delay
  }

  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

//fetch json
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementsByClassName('product-div');
    console.log(productList);

    for (let i = 0; i < 12; i++) {

        let productName = data.products[i].naam;
        let productPrice = data.products[i].prijs;
        let productImg = data.products[i].img;

        let listItem = productList[i].children;

        let nameElement = listItem[1];
        let priceElement = listItem[2];
        let imgElement = listItem[0];

        nameElement.innerText = productName;
        priceElement.innerText = productPrice + ".-";
        imgElement.src = productImg;
    }
})

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

//reviews
let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";


for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if(modus === "one-two-three"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";

            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";

            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "one-two-three"
        }
    }
};


window.addEventListener('DOMContentLoaded', function() {
    let allProducts = document.getElementsByClassName("product-div");
    let filters = document.querySelectorAll('input[type="checkbox"]');

    function filterProducts() {
        let selectedCategories = Array.from(filters)
            .filter(filter => filter.checked)
            .map(filter => filter.id.replace("checkbox-", ""));

        for (let i = 0; i < allProducts.length; i++) {
            if (selectedCategories.includes(allProducts[i].dataset.category)) {
                allProducts[i].style.display = "block";
            } else {
                allProducts[i].style.display = "none";
            }
        }
    }

    for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener('change', filterProducts);
    }
});