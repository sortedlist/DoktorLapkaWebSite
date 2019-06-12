class Slider {
    constructor(sliderID) {
        this.viewport = document.getElementById(sliderID);
        this.slidewraper = this.viewport.querySelector(".slidewrapper");
        this.nextBtn = this.viewport.querySelector(".next-btn");
        this.prevBtn = this.viewport.querySelector(".prev-btn");
        this.slideNow = 1;
        this.slideCount = this.slidewraper.children.length;
        this.slideInterval = 3000;      
    }

    getElIndex(elm){ 
        return Array.from(elm.parentNode.children).indexOf(elm);
    }
    
    getViewportWidth() {
        return Number.parseInt(getComputedStyle(this.viewport).width.slice(0, -2));
    }
    
    translateSlideWraperForSlide(slideNumber) {
        const translateWidth = -this.getViewportWidth() * slideNumber;
        this.slidewraper.style.transform = "translate(" + translateWidth + "px, 0)";
    }
    
    resetSlideWraperPosition() {
        this.slidewraper.style.transform = "translate(0, 0)";
    }
    
    nextSlide() {
        if (this.slideNow == this.slideCount || this.slideNow <= 0 || this.slideNow > this.slideCount) {
            this.resetSlideWraperPosition();
            this.slideNow = 1;
        } else {
            this.translateSlideWraperForSlide(this.slideNow);
            this.slideNow++;
        }
    }
    
    prevSlide() {
        if (this.slideNow == 1 || this.slideNow <= 0 || this.slideNow > this.slideCount) {
            this.translateSlideWraperForSlide(this.slideCount - 1);
            this.slideNow = this.slideCount;
        } else {
            this.translateSlideWraperForSlide(this.slideNow - 2);
            this.slideNow--;
        }
    }

    init() {
        let switchInterval = setInterval(this.nextSlide, this.slideInterval);

        this.viewport.addEventListener("mouseover", function(){
            clearInterval(switchInterval);
        });

        this.viewport.addEventListener("mouseout", function() {
            switchInterval = setInterval(this.nextSlide, this.slideInterval); 
        });

        this.nextBtn.addEventListener("click", this.nextSlide);

        this.prevBtn.addEventListener("click", function() {
            this.prevSlide();
        });

        Array.from(this.viewport.querySelectorAll(".slide-nav-btn")).forEach(elem => {
            elem.addEventListener("click", function(event) {
                const navBtnId = this.getElIndex(event.target);
    
                if (navBtnId + 1 != slideNow) {
                    this.translateSlideWraper(-this.getViewportWidth() * navBtnId);
                    slideNow = navBtnId + 1;
                }
            });
        });  
    }
}

const myslider = new Slider("slider");
myslider.init();


class A {
    constructor(a) {
        this.A = a;
    }
    sayA() {
        console.log(this.A);
    }
    sayAA() {
        this.sayA();
        this.sayA();
    }
}

// let slideNow = 1;
// const slideInterval = 3000;
// const slidewraper = document.getElementById("slidewrapper");
// const viewport = document.getElementById("viewport");
// const nextBtn = document.getElementById("next-btn");
// const prevBtn = document.getElementById("prev-btn");
// const slideCount = slidewraper.children.length;


// document.addEventListener("DOMContentLoaded", function(event) { 
//     let switchInterval = setInterval(nextSlide, slideInterval);

//     viewport.addEventListener("mouseover", function(){
//         clearInterval(switchInterval);
//     });

//     viewport.addEventListener("mouseout", function() {
//         switchInterval = setInterval(nextSlide, slideInterval); 
//     });

//     nextBtn.addEventListener("click", function() {
//         nextSlide();
//     });

//     prevBtn.addEventListener("click", function() {
//         prevSlide();
//     });

//     document.querySelector(".slide-nav-btn").addEventListener("click", function(event) {
//         const navBtnId = getElIndex(event.target);

//         if (navBtnId + 1 != slideNow) {
//             translateSlideWraper(-getViewportWidth() * navBtnId);
//             slideNow = navBtnId + 1;
//         }
//     });
// });

// function getElIndex(elm){ 
//     return Array.from(elm.parentNode.children).indexOf(elm);
// }

// function getViewportWidth() {
//     return Number.parseInt(getComputedStyle(viewport).width.slice(0, -2));
// }

// function translateSlideWraperForSlide(slideNumber) {
//     const translateWidth = -getViewportWidth() * slideNumber;
//     slidewraper.style.transform = "translate(" + translateWidth + "px, 0)";
// }

// function resetSlideWraperPosition() {
//     slidewraper.style.transform = "translate(0, 0)";
// }


// function nextSlide() {
//     if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         resetSlideWraperPosition();
//         slideNow = 1;
//     } else {
//         translateSlideWraperForSlide(slideNow);
//         slideNow++;
//     }
// }

// function prevSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         translateSlideWraperForSlide(slideCount - 1);
//         slideNow = slideCount;
//     } else {
//         translateSlideWraperForSlide(slideNow - 2);
//         slideNow--;
//     }
// }