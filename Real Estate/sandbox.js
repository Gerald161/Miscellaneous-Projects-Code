const ul = document.querySelector('ul');
var as = ul.querySelectorAll('a');
var sliderImg = document.querySelector('.s');
var chk = document.querySelector('#chk');

var options = {
    threshold: 0.3
}

var Observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
        sliderImg.style.opacity = '1';
        as.forEach((a)=>{
          a.style.animation = `anim1 2s ${a.dataset.time} forwards ease-out`
        })

    }else{
       
    }
}, options);

Observer.observe(ul);

function check(){
    if(window.innerWidth > '600'){
        chk.checked = false;
    }
}

// function SmoothScroll(target, duration){
//         var target = document.querySelector(target);
//         var targetPosition = target.getBoundingClientRect().top;
//         var startPosition = window.pageYOffset;
//         var distance = targetPosition - startPosition;
//         var startTime = null;
    
//         function animation(currentTime){
//             if(startTime === null) startTime = currentTime;
//             var timeElapsed = currentTime - startTime;;
//             var run = ease(timeElapsed, startPosition, distance, duration);
//             window.scrollTo(0, run);
//             if(timeElapsed < duration) requestAnimationFrame(animation);
//         }
    
//         function ease(t,b,c,d) {
//             t /= d / 2;
//             if(t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         }
    
//         requestAnimationFrame(animation);

// }

// var explore = document.querySelector('.l');

// explore.addEventListener('click', (e)=>{
//     e.preventDefault();
//     SmoothScroll('#copy', 5000);
// })