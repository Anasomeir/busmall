'use strict';

let leftele;
let medele;
let rightele;
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

  const limg = document.getElementById('limg');
  const rImg = document.getElementById('rimg');
  const medImg = document.getElementById('mimg');
 const section = document.getElementById('section');



function Poll(name) {
    this.name = name;
    this.path = `./img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;
    
    Poll.all.push(this);  }

    Poll.all = [];

   
    
for(let i =0;i<names.length;i++){
    new Poll(names[i]); }

    function render(){
        leftele= randomNumber(0,poll.all.length-1);
        leftele.src = Poll.all[leftele].path;
        leftele.alt = Poll.all[leftele].name;
        limg.title = Poll.all[leftele].name;}
        
      
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
    if(event.target.id === rImg.id)
    {
        Poll.all[rightele].votes++;
    }
    else{
        Poll.all[leftele].votes++;
    }
  }
 
  render();
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

