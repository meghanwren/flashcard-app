function getName() {
  var name = document.querySelector('#name');
  name.value = "Jane Doe";
}

function getEmail() {
  var email = document.querySelector('#email');
  email.value = "jane@gmail.com";
}

function getPhoneNumber() {
  var phoneNumber = document.querySelector('#phone');
  phoneNumber.value = '(487)598-7943';
}

function getDescription() {
  var description = document.querySelector('#description')
  description.value = "How can I save my flashcards for later?";
}

function displayInfo() {
  getName();
  getEmail();
  getPhoneNumber();
  getDescription();
}

displayInfo();

(function () {
  'use strict';

  function Person () {
    this.name = document.querySelector('#name').value;
    this.email = document.querySelector('#email').value;
    this.phone = document.querySelector('#phone').value;
    this.description = document.querySelector('#description').value;
  }
  //bubbling, every parent knows there was an event, event capturing bubbles and parents look for where event happened (bubbles until its captured)
  var submitButton = document.querySelector("button[type=submit]"); //submit has a default listener
  var formElement = document.querySelector('form');
  //var formElement1 = document.forms[0];

  formElement.addEventListener('submit', () => {
    var p = new Person();
    alert('thank you, ' + p.name);
  });

  submitButton.addEventListener('click', (evt) => {
    //evt.stopPropagation(); stop propogation stops any parent above that element from knowing whats going on
    evt.preventDefault();
    var p = new Person();
    console.log(p.name);
  });

}());