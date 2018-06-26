(function () {
  'use strict';

  function Display(front, back){
    document.querySelector('#front-output').innerHTML = front;
    document.querySelector('#back-output').innerHTML = back;
  }
  
  function AddFlashcard () {
    this.frontInput = document.querySelector('#frontofcard').value;
    this.backInput = document.querySelector('#backofcard').value;
  }

  var addButton = document.querySelector("#add");

  addButton.addEventListener('click', (evt) => {
    var stack = new AddFlashcard();
    Display(stack.frontInput, stack.backInput);
  });
}());



