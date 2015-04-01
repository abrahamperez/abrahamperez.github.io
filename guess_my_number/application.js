$(document).ready(function(){
 //find a way for the program to choose a random number between 1 and 100, save this as a variable
 var mynum=function randomIntFromInterval(min,max)
{
   return Math.floor(Math.random()*(max-min+1)+min);
}
var compnum= mynum(1,100)
//when the player clicks on the 'guess' button
  $('button').on('click', function(){
   var usersguess= parseInt(('input').val());
    //save their guess as a variable
    
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (usersguess===compnum)
    {
     alert("you win")
    }
    else if(usersguess<compnum)
    {
     alert("too low")
    }
    else(usersguess>compnum)
    {
     alert("too high")
    }
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
