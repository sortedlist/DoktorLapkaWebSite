jQuery(document).ready(function ($) {

    // $('#checkbox').change(function(){
    //   setInterval(function () {
    //       moveRight();
    //   }, 3000);
    // });

    const checkbox = document.querySelector('#checkbox');

    checkbox.addEventListener('change', (event) => {
        setInterval(function () {
            moveRight();
        }, 3000);
    });
    
    //   var slideCount = $('#slider ul li').length;
    //   var slideWidth = $('#slider ul li').width();
    //   var slideHeight = $('#slider ul li').height();
    //   var sliderUlWidth = slideCount * slideWidth;

    const slideCount = document.querySelectorAll('#slider ul li').length;
    const slideWidth = Number.parseInt(getComputedStyle(document.querySelector('#slider ul li')).width.slice(0, -2));
    const slideHeight = Number.parseInt(getComputedStyle(document.querySelector('#slider ul li')).height.slice(0, -2));
    const sliderUlWidth = slideCount * slideWidth;

    // $('#slider').css({ width: slideWidth, height: slideHeight });
    // $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    // $('#slider ul li:last-child').prependTo('#slider ul');

      const slider = document.getElementById("slider");
    //   slider.style.width = slideWidth + "px";
    //   slider.style.height = slideHeight + "px";

      const sliderUL = document.querySelector("#slider ul");
      sliderUL.style.width = sliderUlWidth + "px";
      sliderUL.style.marginLeft = -slideWidth + "px";

      cycleShiftRight();
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

    function cycleShiftRight() {
        const lastSlideLI = document.querySelector("#slider ul li:last-child");
        sliderUL.removeChild(lastSlideLI);
        sliderUL.insertAdjacentElement("afterbegin", lastSlideLI);
    }

    function cycleShiftLeft() {
        const lastSlideLI = document.querySelector("#slider ul li:first-child");
        sliderUL.removeChild(lastSlideLI);
        sliderUL.insertAdjacentElement("beforeend", lastSlideLI);
    }

    // function moveLeft() {
    //     const delta = 5;
    //     Array.from(sliderUL.children).forEach((elem) => {
    //         var pos = 0;
    //         var id = setInterval(frame, 1);
    //         function frame() {
    //             if (pos >= slideWidth) {
    //                 clearInterval(id);
    //             } else {
    //                 pos += delta;
    //                 elem.style.left = (pos < slideWidth ? pos : slideWidth) + 'px'; 
    //             }
    //         }
    //     })
    //     cycleShiftRight();
    //     sliderUL.style.left = "";
    // }
  
    //   function moveRight() {
    //       $('#slider ul').animate({
    //           left: - slideWidth
    //       }, 200, function () {
    //           $('#slider ul li:first-child').appendTo('#slider ul');
    //           $('#slider ul').css('left', '');
    //       });
    //   };

    function moveRight() {
        const delta = 5;
        Array.from(sliderUL.children).forEach((elem) => {
            var pos = 0;
            var id = setInterval(frame, 1);
            function frame() {
                if (pos <= -slideWidth) {
                    clearInterval(id);
                } else {
                    pos -= delta;
                    elem.style.left = (pos > -slideWidth ? pos : -slideWidth) + 'px'; 
                }
            }
        })
        cycleShiftLeft();
        sliderUL.style.left = "";
    }

  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  });    
