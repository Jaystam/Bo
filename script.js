//header scroll shadow
window.addEventListener('scroll', function(){
    var element = document.getElementById('box-shadow-header');
    var scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > 0) {
      element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    } else {
      element.style.boxShadow = 'none';
    }
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

//filter
let allProducts = document.getElementsByClassName("product");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

//horloge filter
let horlogeFilter = document.getElementById("checkbox-horloge")
horlogeFilter.onchange = function(){
    if(horlogeFilter.checked === true){
        for(let i = 0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "horloge"){
                allProducts[i].style.display = "block";
            }
        }  
    }
    else{
        for(let i = 0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "horloge"){
                allProducts[i].style.display = "none";
            }
        }
    }
}

//ringen filter
let ringenFilter = document.getElementById("checkbox-ringen")
ringenFilter.onchange = function(){
    if(ringenFilter.checked === true){
        for(let i = 0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "ringen"){
                allProducts[i].style.display = "block";
            }
        }  
    }
    else{
        for(let i = 0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "ringen"){
                allProducts[i].style.display = "none";
            }
        }
    }
}

//kettingen filter
let kettingenFilter = document.getElementById("checkbox-kettingen")
kettingenFilter.onchange = function(){
    if(kettingenFilter.checked === true){
        for(let i = 0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "kettingen"){
                allProducts[i].style.display = "block";
            }
        }  
    }
    else{
        for(let i = 0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "kettingen"){
                allProducts[i].style.display = "none";
            }
        }
    }
}