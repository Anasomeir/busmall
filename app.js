'use strict';


let leftIndex;
let medIndex;
let rightIndex;
const names = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'tauntaun',
  'unicorn',
  'water-can',
  'wine-glass', ];

  const left = document.getElementById('limg');
  const med = document.getElementById('mimg');
  const right = document.getElementById('rimg');
 const imgsection = document.getElementById('section');

left.addEventListener('click',addVotes);

function addVotes()
{
  console.log('the user clicked in the left img');
}
 function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




 function Poll(name) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  
  Poll.all.push(this);  }

  Poll.all = [];


   


    
  for(let i =0;i<names.length;i++){
    new Poll(names[i]); }




    function render()
 { 

 leftIndex= randomNumber(0,names.length-1);
console.log(leftIndex);

  left.src = Poll.all[leftIndex].path;
  left.alt = Poll.all[leftIndex].name;
  left.title = Poll.all[leftIndex].name;
  console.log(Poll.all[leftIndex].path);




  

  medIndex= randomNumber(0,names.length-1);
  med.src = Poll.all[medIndex].path;
  med.alt = Poll.all[medIndex].name;
 med.title = Poll.all[medIndex].name;





 rightIndex= randomNumber(0,names.length-1);
 right.src = Poll.all[rightIndex].path;
 right.alt = Poll.all[rightIndex].name;
 right.title = Poll.all[rightIndex].name;

}

render();

////section.addEventListener('click',handelClick);


/****** 

if(event.target.id !== 'section'){
  if(event.target.id === right.id)
  {
    Poll.all[rightIndex].votes++;
  }
  else if
  {
    Poll.all[medIndex].votes++;
  }
  else
  {
    Poll.all[leftIndex].votes++;
  }
}

render();


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  render(); 
        
        
     /*

  var usedImages = {};
  var usedImagesCount = 0;
  
  function displayImage(){
  
      var num = Math.floor(Math.random() * (imagesArray.length));
      if (!usedImages[num]){
          document.canvas.src = imagesArray[num];
          usedImages[num] = true;
          usedImagesCount++;
          if (usedImagesCount === imagesArray.length){
              usedImagesCount = 0;
              usedImages = {};
          }
      } else {
          displayImage();
      }
  }



/*let leftele;
let medele;
let rightele;
let maxAttempt;
let attempts = 5;
const names = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'tauntaun',
    'unicorn',
    'water-can',
    'wine-glass', ];

 
      
////////////////

        function render(){
            leftele = randomNumber(0,poll.all.length-1);
          
            limg.src = Poll.all[leftele].path;
            limg.alt = Poll.all[leftele].name;
            limg.title = Poll.all[leftele].name; }

            rightele = randomNumber(0,Poll.all.length-1);

           rImg.src = Poll.all[rightele].path;
           rImg.alt = Poll.all[rightele].name;
            rImg.title = Poll.all[rightele].name;
  




section.addEventListener('Vote',handelClick);

function handelClick(event){

  if(event.target.id !== 'section'){
    if(event.target.id === rimg.id)
    {
        Poll.all[rightele].votes++;
    }
    else{
        Poll.all[leftele].votes++;
    }
  }
 
  render();
}

render();

function image(a,b,c)
{
  this.link=a;
  this.alt=b;
  this.thumb=c;
}

function show_image()
{
  document.write("img src="+this.link+">");
}
image1=new image(`./img/${name}.jpg`);
/////

function render(){
  medele = randomNumber(0,poll.all.length-1);

  medele.src = Poll.all[leftele].path;
  medele.alt = Poll.all[leftele].name;
  medele.title = Poll.all[leftele].name; }

  rightele = randomNumber(0,Poll.all.length-1);

  medImg.src = Poll.all[medele].path;
 medImg.alt = Poll.all[medele].name;
  medImg.title = Poll.all[medele].name;

  if(attempts === 0) (attempts < maxAttempt)
{
  attempts 
}
  
function render(){
  rightele = randomNumber(0,poll.all.length-1);

  rightele.src = Poll.all[rightele].path;
  rightele.alt = Poll.all[rightele].name;
  rightele.title = Poll.all[rightele].name; }

  rightele = randomNumber(0,Poll.all.length-1);

  rImg.src = Poll.all[rightele].path;
  rImg.alt = Poll.all[rightele].name;
  rImg.title = Poll.all[rightele].name;
*/



/*

var imagesArray = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/water-can.jpg',
  'img/wine-glass.jpg', ];*/
  