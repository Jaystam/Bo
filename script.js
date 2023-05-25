window.addEventListener('scroll', function(){
    var element = document.getElementById('box-shadow-header');
    var scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > 0) {
      element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    } else {
      element.style.boxShadow = 'none';
    }
});