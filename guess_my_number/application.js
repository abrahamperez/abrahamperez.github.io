$(document).ready(function(){
 //find a way for the program to choose a random number between 1 and 100, save this as a variable
 var mynum=function randomIntFromInterval(min,max)
{
   return Math.floor(Math.random()*(max-min+1)+min);
}
var compNum= mynum(1,100);
console.log(compNum)
//when the player clicks on the 'guess' button
  $('button').on('click', function(){
   var usersGuess=parseInt($('input').val());
    //save their guess as a variable
    
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (usersGuess===compNum)
    {
     alert("you win")
    }
    else if(usersGuess<compNum)
    {
     alert("too low")
    }
    else
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
