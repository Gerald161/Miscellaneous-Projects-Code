const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const body = document.querySelector('.image-container');
const box1 = document.querySelector('.box:nth-child(1)');
const box2 = document.querySelector('.box:nth-child(2)');
const box3 = document.querySelector('.box:nth-child(3)');
const box4 = document.querySelector('.box:nth-child(4)');
const box5 = document.querySelector('.box:nth-child(5)');
var details = document.querySelector('.details');
const story = document.querySelector('.story');
const header = document.querySelector('header');
const boxes = document.querySelectorAll('.box');
var kumasi = document.querySelector('.kumasi');
var accra = document.querySelector('.accra');
var all = document.querySelector('.all');
let counter = 0;

all.addEventListener('click', (e)=>{
    e.preventDefault();
    boxes.forEach((box)=>{
        box.style.display = 'block';
    })
})

kumasi.addEventListener('click', (e)=>{
    e.preventDefault();
    boxes.forEach((box)=>{
        box.style.display = 'block';
        if(box.dataset.loc != 'kumasi'){
            box.style.display = 'none';
        }else{
            body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            body.style.backgroundImage = 'url(0.jpg)';
            box5.classList.remove('active');
            box4.classList.remove('active');
            box3.classList.remove('active');
            box2.classList.remove('active');
            box1.classList.add('active');
            story.innerHTML = "<p>The clumsy Wreck-It Ralph has been the villain of his video-game for thirty years, destroying a residential building while Fix-It Felix uses his powerful hammer to rebuild what Ralph has destroyed. During the celebration of the thirtieth anniversary of the game, Ralph is not invited to the party since nobody loves him. Ralph decides to win a medal to become a hero and he goes to the game Hero's Duty, commanded by the tough Sergeant Calhoun, where he sees the chance of winning the medal. Ralph collects the aimed medal, but when he is returning to his game, he brings accidentally one enemy Cy-Bug with him. Ralph accidentally crashes his plane in the kart-racing game Sugar Rush and loses his medal. When he is ready to retrieve it, the annoying glitch Vanellope von Schweetz takes the medal and uses it to dispute a kart racing in her game. Meanwhile Felix is seeking out Ralph to tell him that their game will be shut down since he is missing. Felix meets Sergeant Calhoun that tells him that the Cy-Bug would destroy any game and he immediately falls in love with her. Ralph helps Vanellope to build her own racing car and becomes her hero; but soon he is convinced by King Candy that Vanellope is just a glitch and she may destroy Sugar Rush. Ralph destroys her car and her dreams expecting to protect Vanellope. But when he sees her picture on the cabinet of Sugar Rush, he learns that something is wrong in the explanation of King Candy.</p>"
        }
    })
})

accra.addEventListener('click', (e)=>{
    e.preventDefault();
    boxes.forEach((box)=>{
        box.style.display = 'block';
        if(box.dataset.loc != 'accra'){
            box.style.display = 'none';
        }else{
            body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            body.style.backgroundImage = 'url(2.jpg)';
            box5.classList.remove('active');
            box4.classList.remove('active');
            box1.classList.remove('active');
            box2.classList.remove('active');
            box3.classList.add('active');
            story.innerHTML = "<p>Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history</p>"
        }
    })
})

nextBtn.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    if(counter == 2){
        counter = -1;
    }
    counter++
    if(box1.classList.contains("active")){
        body.style.backgroundImage = `url(wreck/${counter}.jpg)`;
    }else if(box2.classList.contains("active")){
        body.style.backgroundImage = `url(frozen/${counter}.jpg)`;
    }else if(box3.classList.contains("active")){
        body.style.backgroundImage = `url(coco/${counter}.jpg)`;
    }else if(box4.classList.contains("active")){
        body.style.backgroundImage = `url(guardians/${counter}.jpg)`;
    }else if(box5.classList.contains("active")){
        body.style.backgroundImage = `url(naruto/${counter}.jpg)`;
    }
})

prevBtn.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'})
    if(counter == 0){
        counter = 3;
    }
    counter--;
    if(box1.classList.contains("active")){
        body.style.backgroundImage = `url(wreck/${counter}.jpg)`;
    }else if(box2.classList.contains("active")){
        body.style.backgroundImage = `url(frozen/${counter}.jpg)`;
    }else if(box3.classList.contains("active")){
        body.style.backgroundImage = `url(coco/${counter}.jpg)`;
    }else if(box4.classList.contains("active")){
        body.style.backgroundImage = `url(guardians/${counter}.jpg)`;
    }else if(box5.classList.contains("active")){
        body.style.backgroundImage = `url(naruto/${counter}.jpg)`;
    }
})

box1.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    body.style.backgroundImage = 'url(0.jpg)';
    box5.classList.remove('active');
    box4.classList.remove('active');
    box3.classList.remove('active');
    box2.classList.remove('active');
    box1.classList.add('active');
    story.innerHTML = "<p>The clumsy Wreck-It Ralph has been the villain of his video-game for thirty years, destroying a residential building while Fix-It Felix uses his powerful hammer to rebuild what Ralph has destroyed. During the celebration of the thirtieth anniversary of the game, Ralph is not invited to the party since nobody loves him. Ralph decides to win a medal to become a hero and he goes to the game Hero's Duty, commanded by the tough Sergeant Calhoun, where he sees the chance of winning the medal. Ralph collects the aimed medal, but when he is returning to his game, he brings accidentally one enemy Cy-Bug with him. Ralph accidentally crashes his plane in the kart-racing game Sugar Rush and loses his medal. When he is ready to retrieve it, the annoying glitch Vanellope von Schweetz takes the medal and uses it to dispute a kart racing in her game. Meanwhile Felix is seeking out Ralph to tell him that their game will be shut down since he is missing. Felix meets Sergeant Calhoun that tells him that the Cy-Bug would destroy any game and he immediately falls in love with her. Ralph helps Vanellope to build her own racing car and becomes her hero; but soon he is convinced by King Candy that Vanellope is just a glitch and she may destroy Sugar Rush. Ralph destroys her car and her dreams expecting to protect Vanellope. But when he sees her picture on the cabinet of Sugar Rush, he learns that something is wrong in the explanation of King Candy.</p>"
    details.textContent = "4 Acre Piece of Land";
})

box2.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    body.style.backgroundImage = 'url(frozen/0.jpg)';
    box4.classList.remove('active');
    box3.classList.remove('active');
    box5.classList.remove('active');
    box1.classList.remove('active');
    box2.classList.add('active');
    story.innerHTML = "<p>Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven and sets off on an epic journey to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom. From the outside Elsa looks poised, regal and reserved, but in reality she lives in fear as she wrestles with a mighty secret: she was born with the power to create ice and snow. It's a beautiful ability, but also extremely dangerous. Haunted by the moment her magic nearly killed her younger sister Anna, Elsa has isolated herself, spending every waking minute trying to suppress her growing powers. Her mounting emotions trigger the magic, accidentally setting off an eternal winter that she can't stop. She fears she's becoming a monster and that no one, not even her sister, can help her.</p>"
    details.textContent = "2 Acre Piece of Land";
})

box3.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    body.style.backgroundImage = 'url(2.jpg)';
    box5.classList.remove('active');
    box4.classList.remove('active');
    box1.classList.remove('active');
    box2.classList.remove('active');
    box3.classList.add('active');
    story.innerHTML = "<p>Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history</p>"
    details.textContent = "3 Plots";
})

box4.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    body.style.backgroundImage = 'url(3.jpg)';
    box1.classList.remove('active');
    box5.classList.remove('active');
    box2.classList.remove('active');
    box3.classList.remove('active');
    box4.classList.add('active');
    story.innerHTML = "<p>Generation after generation, immortal Guardians like Santa Claus, the Easter Bunny and the Tooth Fairy protect the world's children from darkness and despair. However, an evil boogeyman named Pitch Black schemes to overthrow the Guardians by obliterating children's belief in them. It falls to a winter sprite named Jack Frost to thwart Pitch's plans and save the Guardians from destruction.</p>"
    details.textContent = "5 Plots";
})

box5.addEventListener('click', ()=>{
    body.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    story.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
    body.style.backgroundImage = 'url(4.jpg)';
    box1.classList.remove('active');
    box2.classList.remove('active');
    box3.classList.remove('active');
    box4.classList.remove('active');
    box5.classList.add('active');
    story.innerHTML = "<p>Twelve years before the start of the series, the Nine-Tails attacked Konohagakure destroying much of the village and taking many lives. The leader of the village, the Fourth Hokage, sacrificed his life to seal the Nine-Tails into a newborn, Naruto Uzumaki. Orphaned by the attack, Naruto was shunned by the villagers, who out of fear and anger, viewed him as the Nine-Tails itself.Though the Third Hokage outlawed speaking about anything related to the Nine-Tails, the children — taking their cues from their parents — inherited the same animosity towards Naruto.  In his thirst to be acknowledged, Naruto vowed he would one day become the greatest Hokage the village had ever seen.</p>"
    details.textContent = "Uncompleted Project For Sale";
})