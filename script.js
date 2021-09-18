function makeColourValue() {
    return Math.round(Math.random() * 255);
  }
    var body = document.getElementsByTagName('body');

  
  function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
      'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
  }
  

  var body = document.getElementById('backgroundColour')

  var buttons = document.getElementsByClassName('colourButton');
  
  var heading = document.getElementById('colourValue');
  
  var answerMessage = document.getElementById('answer');

  function startGame(){
        answerMessage.innerHTML= "";

        var answerButton = Math.round(Math.random() * (buttons.length - 1));
        
        
        for (var i = 0; i < buttons.length; i++) {
        
        var red = makeColourValue();
        var green = makeColourValue();
        var blue = makeColourValue();
        
        setButtonColour(buttons[i], red, green, blue);
        
        if (i === answerButton) {
            heading.innerHTML =`(${red}, ${green}, ${blue})`;
        }
        if (i === answerButton){
            var a = `${red}`;
            var b = `${green}`;
            var c = `${blue}`;
            setBodyColour(body, a, b, c);
        }
        
        
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
            } else {
                answerMessage.innerHTML = "Wrong answer! Guess again!";
            }
        });
        function setBodyColour(body, a, b, c) {

            buttons[i].addEventListener('click', function(){
                if (this === buttons[answerButton]) {
                    body.setAttribute('style',
                    'background-color: rgb(' + a + ', ' + b + ',' + c +');'
            );
                } 
            });

            
          }
        
        }

        
         
        

  }


  document.getElementById('resetButton').addEventListener('click', startGame);
  startGame();