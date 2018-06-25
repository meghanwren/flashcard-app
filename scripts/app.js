(function () {
  'use strict';

  var cards = [];
  var currentIndex = -1;

  function Card(stackname, front, back) {
    this.classname = stackname || 'class';
    this.front = front || 'front';
    this.back = back || 'back'
  }

  function Flashcard(classname, front, back){
    document.querySelector('#class-output').innerHTML = classname;
    document.querySelector('#front-output').innerHTML = front;
    document.querySelector('#back-output').innerHTML = back;
    cards.push(Card(classname, front, back));
    currentIndex++;
  }

  function Display(classname, front, back){
    document.querySelector('#class-output').innerHTML = classname;
    document.querySelector('#front-output').innerHTML = front;
    document.querySelector('#back-output').innerHTML = back;
  }
  
  function AddFlashcard () {
    this.stackName = document.querySelector('#class-name').value;
    this.frontInput = document.querySelector('#front-of-card').value;
    this.backInput = document.querySelector('#back-of-card').value;
  }

  var finishButton = document.querySelector("#finish");
  var addButton = document.querySelector("#add");
  var nextButton = document.querySelector("#next");
  var backButton = document.querySelector("#back");

  finishButton.addEventListener('click', (evt) => {
    var stack = new AddFlashcard();
    Flashcard(stack.stackName, stack.frontInput, stack.backInput);
    console.log(stack.stackName + ' ' + stack.frontInput + ' ' + stack.backInput);
  });

  addButton.addEventListener('click', (evt) => {
    var stack = new AddFlashcard();
    Flashcard(stack.stackName, stack.frontInput, stack.backInput);
    console.log(stack.stackName + ' ' + stack.frontInput + ' ' + stack.backInput);
  });

  nextButton.addEventListener('click', (evt) => {
  ++currentIndex;
  Display(cards[currentIndex].classname, cards[currentIndex].front, cards[currentIndex].back);
  });

  backButton.addEventListener('click', (evt) => {
    --currentIndex;
    Display(cards[currentIndex].classname, cards[currentIndex].front, cards[currentIndex].back);
    });

}());



