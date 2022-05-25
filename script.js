score = 0;
cross = true;
audiogo = new Audio('music.mp3.wav');
setTimeout(() => {
  audio.play()
}, 1000);


document.onkeydown = function(e){

console.log("key Code is: ", e.keyCode)
  if(e.keyCode==38){

    tushar=document.querySelector('.tushar');
    tushar.classList.add('animatetushar');
    setTimeout(() => {
        tushar.classList.remove('animatetushar')
    }, 700);


  }

  if(e.keyCode==39){

    tushar=document.querySelector('.tushar');
    tusharX =  parseInt(window.getComputedStyle(tushar, null).getPropertyValue('left'));
    tushar.style.left= tusharX + 112 + "px";
 }
 if(e.keyCode==37){

  tushar=document.querySelector('.tushar');
  tusharX =  parseInt(window.getComputedStyle(tushar, null).getPropertyValue('left'));
  tushar.style.left= (tusharX - 112) + "px";
} 


}

setInterval(() => {
   tushar = document.querySelector('.tushar');  
   gameover =  document.querySelector('.gameover');  
   sagar = document.querySelector('.sagar');  

  dx = parseInt(window.getComputedStyle(tushar, null).getPropertyValue('left'));
  dy =  parseInt(window.getComputedStyle(tushar, null).getPropertyValue('top'));
  ox =  parseInt(window.getComputedStyle(sagar, null).getPropertyValue('left'));
  oy =   parseInt(window.getComputedStyle(sagar, null).getPropertyValue('top'));
  
  offsetX = Math.abs(dx-ox);
  offsetY = Math.abs(dy-oy);
  //console.log(offsetX , offsetY)
  if(offsetX<75 && offsetY<52){

   gameover.innerHtml = "MAr gya bhai"
   sagar.classList.remove('sagarAni')

  }
  else if  (offsetX < 145 && cross){

  score += 1;
  updatescore(score);
 cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000); 
    setTimeout(() => {
      anidur =  parseFloat(window.getComputedStyle(sagar, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.1;
      sagar.style.animationduration = newDur + 's';
      console.log("New animation duration:", newDur)
    }, 500); 
    
  }


}, 10);

function updatescore(score){

  scorecont.innerHTML = "your Score: " + score;

}