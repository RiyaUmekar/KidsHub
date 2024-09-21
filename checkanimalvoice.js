const soundUrl = ['animal_sound/cat.mpeg','animal_sound/cow.mpeg','animal_sound/dog.mpeg','animal_sound/lion.mp3','animal_sound/snake.mpeg'];

const animalList = ['cat','cow','dog','lion','snake'];


const soundGen = document.querySelector('i');
const createSound = document.createElement('audio');

let ran ;


let temp_result = document.querySelector('.result_tmp');

let temp_result_h = document.querySelector('.result_temp_show');

soundGen.addEventListener('click',()=>{
    ran = Math.floor(Math.random() * soundUrl.length);
    console.log(ran,soundUrl.length);
    createSound.src = soundUrl[ran];
    createSound.play();
    createSound.loop = false; 
    
    // setTimeout(()=>{
    //     createSound.pause();
    // },2000);
});

const imgs = document.querySelectorAll('img');

console.log(ran)

imgs.forEach(img => {
    img.addEventListener('click',()=>{
        let m1 = img.getAttribute('alt');
        temp_result.style.visibility = 'visible';
        if(m1 === animalList[ran]){
            console.log('You are winner ')
            temp_result_h.innerText = 'You Win!!';

        } else{
            console.log('you lost game!')
            temp_result_h.innerText = 'You Lost!!';
        }

        setTimeout(()=>{

            temp_result.style.visibility = 'hidden';
        },2000);
    });
});