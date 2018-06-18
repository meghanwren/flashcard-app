function getClass() {
  var name = document.querySelector('#class-name');
  name.value = "English";
}

function getFront() {
  var front = document.querySelector('#front-of-card');
  front.value = "Define: Brobdingnagian";
}

function getBack() {
  var back = document.querySelector('#back-of-card');
  back.value = 'Huge or giant';
}

function displayInfo() {
  getClass();
  getFront();
  getBack();
}

displayInfo();


