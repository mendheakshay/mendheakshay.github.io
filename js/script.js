window.onload = function () {
    toggleSlide();
    smoothScroll.init();
  
    /* burger nav */
    document.querySelector('.nav-button').addEventListener('click', navclick, false);
  
    function navclick() {
        navIcon = document.getElementsByClassName('nav-button');
      
        navList = document.getElementsByClassName('primary-nav');
      
        for(var i=0; i<navIcon.length; i++) {
           navIcon[i].classList.toggle('open');
           navList[i].classList.toggle('open');
          navList[i].style.display = 'block';
        }
    }
  
    /* Category functionality */
    var catList = document.querySelectorAll('.category-list');
  
    var worksimgList = document.getElementsByClassName('works-img');
  
    for(var i=0; i<catList.length; i++ ) {     
        catList[i].addEventListener('click', function() {
            var categoryId = this.id;
             
            for (i=0; i<catList.length; i++) {
                catList[i].classList.remove('active');
            }
          
            for (var j=0; j<worksimgList.length; j++) {
                worksimgList[j].classList.remove('show');
                worksimgList[j].classList.add('hide');
            }
          
            document.getElementById(categoryId).classList.add('active');
          
            if(categoryId == 'all'){
                for(var l=0; l<worksimgList.length; l++){
                    worksimgList[l].classList.remove('hide');
                    worksimgList[l].classList.add('show');
                }
            }
          
            var imgList = document.getElementsByClassName(categoryId);
          
            for(var k=0; k<imgList.length; k++){
                imgList[k].classList.remove('hide');
                imgList[k].classList.add('show');
            }
        }, false);
    }

    /* Navigation functionality */
    var navList = document.querySelectorAll(".nav-list");
  
    for(var i=0; i<navList.length; i++ ) {
        navList[i].addEventListener('click', function() {
            var navid = this.id;
          
            document.getElementById(navid).scrollIntoView({ 
              behavior: 'smooth' 
            });
          
            for (var i=0; i<navList.length; i++) {
                navList[i].classList.remove('active');
            }
      
            var el = document.getElementById('navag-btn');
          
            function hasClass(element, cls) {
                return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
            }
          
            if(window.innerWidth < 768 && hasClass(el, 'open') ) {
              for(var i=0; i<navList.length; i++) {
                navList[i].style.display = 'none';
                navList[i].classList.toggle('open');
              }
              
              for(var i=0; i<navIcon.length; i++) {
                 navIcon[i].classList.toggle('open');
              }
            }  
          
            document.getElementById(navid).classList.add('active');
      
        },false);
    }   
}
    
    /* Slider functionality */
      function toggleSlide(direction) {
          var sliderElements = document.getElementsByClassName('slider'); 
          var visibleSlide = getVisible(sliderElements);
          sliderElements[visibleSlide].style.display = 'none'; 
        
          if(!direction) {
              var makeVisible = prev(visibleSlide, sliderElements.length); 
          } else {
              var makeVisible = next(visibleSlide, sliderElements.length); 
          }
        
          sliderElements[makeVisible].style.display = 'block'; 
      }
      
      function getVisible(sliderElements) {
          var visibleSlide=0;
        
          for(var i=0; i<sliderElements.length; i++) {
              if(sliderElements[i].style.display == 'block') {
                  visibleSlide=i;
              }
          }
          return visibleSlide;
      }
      
      function prev(num, arrayLength) {
          if(num == 0) return arrayLength-1;
          else return num-1;
      }

      function next(num, arrayLength) {
          if(num == arrayLength-1) return 0;
          else return num+1;
      }

      document.querySelector('#btn1').addEventListener('click', backslide, false);

      function backslide() {
          toggleSlide(false);
          clearInterval(switching);
      }

      document.querySelector('#btn2').addEventListener('click', nextslide, false);

      function nextslide() {
          toggleSlide(true);
          clearInterval(switching);
      }
    
      var switching = setInterval('toggleSlide(true)', 2000);
