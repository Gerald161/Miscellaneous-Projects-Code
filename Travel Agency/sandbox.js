var imageCont = document.querySelector('.images');
var images = document.querySelectorAll('.img');

var imageCont2 = document.querySelector('.why');
var images2 = document.querySelector('.reasons');

var options = {
    
}

var observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
        images.forEach((img)=>{
          img.style.animation = `anim1 2s ${img.dataset.time} forwards ease-out`
        })

    }else{
       
    }
}, options);

observer.observe(imageCont);

var options2 = {
    
}

var observer2 = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
      images2.style.animation = `anim2 1.5s  forwards ease-out`
    }else{
       
    }
}, options2);

observer2.observe(imageCont2);