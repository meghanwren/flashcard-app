(function () {
  'use strict';
  
  function Flashcard () {
    this.stackName = document.querySelector('#class-name').value;
    this.frontInput = document.querySelector('#front-of-card').value;
    this.backInput = document.querySelector('back-of-card').value;
  }

  var submitButton = document.querySelector("button[type=submit]"); //submit has a default listener
  var formElement = document.querySelector('form');

  formElement.addEventListener('submit', () => {
    var stack = new Flashcard();
    console.log(stack.stackName + ' ' + stack.frontInput + ' ' + stack.backInput);
  });

  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    var stack = new Flashcard();
    console.log(stack.stackName + ' ' + stack.frontInput + ' ' + stack.backInput);
  });
}());



