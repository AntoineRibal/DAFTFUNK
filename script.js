//#F05151 red
//declaration des variables de son préchargement. 
var son0 = new Audio('son/work_it_1.mp3');

var son1 = new Audio('son/make_it_1.mp3');
var son2 = new Audio('son/do_it_1.mp3');
var son3 = new Audio('son/makes_us_1.mp3');
var son4 = new Audio('son/harder_1.mp3');
var son5 = new Audio('son/better_1.mp3');
var son6 = new Audio('son/faster_1.mp3');
var son7 = new Audio('son/stronger_1.mp3');
var son8 = new Audio('son/more_than_1.mp3');
var son9 = new Audio('son/hour_1.mp3');
var son10 = new Audio('son/power_1.mp3');
var son11 = new Audio('son/never_1.mp3');
var son12 = new Audio('son/ever_1.mp3');
var son13 = new Audio('son/after_1.mp3');
var son14 = new Audio('son/work_is_1.mp3');
var son15 = new Audio('son/over_1.mp3');

var x;
var song = new Audio('son/instru.mp3');

function lolilol(event){
   
    event.style.backgroundColor = 'green';
    return;
}

var click = document.querySelectorAll('div.fond');

console.log(click);


click.forEach(function(e){
   e.addEventListener('click', function(){
       e.style.backgroundColor='#F05151';
       
       let son = e.textContent;
       
       switch(son){
        case 'work it' :
               son0.play();
               son0.addEventListener('ended',lolilol(e));
               
            break;
        case 'make it' :
               son1.play()
               break;
        case 'do it' :
               son2.play()
               break;
        case 'make us' :
               son3.play()
               break;
        case 'harder' :
               son4.play()
               break;
        case 'better' :
               son5.play()
               break;
        case 'faster' :
               son6.play()
               break;
        case 'stronger' :
               son7.play()
               break;
        case 'more than' :
               son8.play()
               break;
        case 'hour' :
               son9.play()
               break;
        case 'our' :
               son10.play()
               break;
        case 'never' :
               son11.play()
               break;
        case 'Ever' :
               son12.play()
               break;
        case 'after' :
               son13.play()
               break;
        case 'work is' :
               son14.play()
               break;
        case 'over' :
               son15.play()
               break;
            
           case 'play':
               song.play();
               song.addEventListener('ended',lolilol(e));
               break;
           default:
               console.log('echec');
            
      }
        
   })
    
   
    
    
});