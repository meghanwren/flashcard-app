(function () {
  //'use strict';
  
  function Flashcard () {
    this.stackName = document.querySelector('#class-name').value;
    this.frontInput = document.querySelector('#front-of-card').value;
    this.backInput = document.querySelector('#back-of-card').value;
  }

  var submitButton = document.querySelector("#submit"); //submit has a default listener

  submitButton.addEventListener('click', (evt) => {
    var stack = new Flashcard();
    document.getElementById('class-output').innerHTML = stack.stackName;
    document.getElementById('front-output').innerHTML = stack.frontInput;
    document.getElementById('back-output').innerHTML = stack.backInput;
    //console.log(stack.stackName + ' ' + stack.frontInput + ' ' + stack.backInput);
  });
}());



