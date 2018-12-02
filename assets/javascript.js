var randomNumber = "";
var wins = 0;
var losses = 0;
var scoreText = 0;


$( document ).ready(function(){
function randomTargetNumber () {
    randomNumber = Math.floor(Math.random() * 91) + 29;

}
 randomTargetNumber();
$('#randomNumber').html(randomNumber);

  var one = Math.floor(Math.random()*19+1)
  var two = Math.floor(Math.random()*19+1)
  var three = Math.floor(Math.random()*19+1)
  var four = Math.floor(Math.random()*19+1)
  $('#score').html(scoreText);
  $('#wins').html("Wins:" + wins);
  $('#losses').html("Losses:" +losses);

function reset(){
    randomNumber=Math.floor(Math.random()* 91+29);
 
    $('#randomNumber').html(randomNumber);
    one= Math.floor(Math.random()*19+1);
    two= Math.floor(Math.random()*19+1);
    three= Math.floor(Math.random()*19+1);
    four= Math.floor(Math.random()*19+1);
    scoreText= 0;
    $('#score').html(scoreText);
    $('#wins').html("Wins:" + wins);
    $('#losses').html("Losses:" +losses); 
    } 


$('#Green').on ('click', function(){
    scoreText = scoreText + one;
    $('#score').html(scoreText); 
      
        if (scoreText == randomNumber){
          wins++;
          $('#wins').html(wins);
          reset();
        }
        else if ( scoreText > randomNumber){
          losses++;
          $('#losses').html(losses);
          reset()
        }   
  })  
  $('#Yellow').on ('click', function(){
    scoreText = scoreText + two;
    $('#score').html(scoreText);
          if (scoreText == randomNumber){
            wins++;
            $('#wins').html(wins);
            reset();
        }
        else if ( scoreText > randomNumber){
          losses++;
          $('#losses').html(losses);
          reset()

  
        } 
  })
  $('#Blue').on ('click', function(){
    scoreText = scoreText + three;
    $('#score').html(scoreText);
          if (scoreText == randomNumber){
            wins++;
            $('#wins').html(wins);
            reset();  
        }
        else if ( scoreText > randomNumber){
          losses++;
            $('#losses').html(losses);
            reset()
        } 
  }) 
  
  $('#Red').on ('click', function(){
    scoreText = scoreText + four;
    $('#score').html(scoreText);
          if (scoreText == randomNumber){
            wins++;
            $('#wins').html(wins);
            reset();
            
        }
        else if ( scoreText > randomNumber){
          losses++;
            $('#losses').html(losses);
            reset()
          }
  });   
}); 