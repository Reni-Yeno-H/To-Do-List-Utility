"use strict";
/*
  CISC 3650 Spring 2022 Web Project
    
    To-Do-List Utility
    Author: Hao Ren Yuan
    Date: February 17, 2022 - March 10, 2022

    Filename: functions.js
*/

//Function to delete all existing tasks
function wipeAllTasks() {
  var list = document.getElementById("listing");
  list.innerHTML = "";
}

//Function to delete all existing tasks on the advanced notepad
function wipeAllTasks2() {
  var list = document.getElementById("listing2");
  list.innerHTML = "";
}

//Create a close button that adds itself to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Trigger event for close button that deletes task item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    alertSystem();
  }
}, false);


/* Allows standard notepad#1 to be draggable */
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("header")) {
    document.getElementById("header").onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* Allows notepad#2 to be draggable */
function dragElement2(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("header2")) {
    document.getElementById("header2").onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* Doesn't work as intended to which is to toggle checked for advanced notepad to cross out task */
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.getElementById === 'listing2') {
    ev.target.classList.toggle('checked');
    alertSystem();
  }
}, false);

/* Doesn't work as intended to which is to toggle checked for box for green color automation */
var list = document.querySelector('li');
list.addEventListener('click', function (ev) {
  if (ev.target.getElementsByClassName === 'form-check-input') {
    ev.target.classList.toggle('checked');
    alertSystem();
  }
}, false);

// Feedback after finishing tasks
function alertSystem() {
  //var inputValue = document.getElementById("add").value;
  alert("Congrats! You finished this task!"); //+inputValue;
}

//Future feature for pressing enter key instead of only relying on manual button clicking
/* Press enter for super task input ability
var input = function.newList1(){};
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});
*/

// Create new list item on the Add button
function newList1() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("add").value;
  var text = document.createTextNode(inputValue);
  li.innerHTML += "<input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'> ";
  li.appendChild(text);
  if (inputValue == '') {
    alert("You must name your task!");
  } else {
    document.getElementById("listing").appendChild(li);
    li.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      + "<label for='DueDate'>Due date:</label> <input type='date' class='DueDate' name='DueDate'"
      + "placeholder='Choose a Date: ' onchange='dayFunction()'>"
    li.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='priority'>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
      "<label for='selector'>Priority color </label>" +
      "<select name='setSelector' id='setSelector' onchange='this.style.backgroundColor=this.value'>"
      + "<option name='selector0' selected>---Select priority color---</option>"
      + "<option name='selector1' class='selector' id='selector1' onclick='changeColor()' value='orange'>Caution High (Orange)</option>"
      + "<option name='selector2' class='selector' id='selector2' onclick='changeColor()' value='yellow'>Reasonably Fair (Yellow)</option>"
      + "<option name='selector3' class='selector' id='selector3' onclick='changeColor()' value='green'>Chilling Low (Green)</option>"
      + "</select>"
      + "</div>"
      + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
      +"<button onclick='newList3()' class='addSubtaskButton'>Add Subtask</button>"
      +"<ul id='listing3'>"
      +"</ul>";
  }
  document.getElementById("add").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create new list on the Add button for advanced notepad
function newList2() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("add2").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must name your task!");
  } else {
    document.getElementById("listing2").appendChild(li);
    li.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      + "<label for='DueDate'>Due date:</label> <input type='date' class='DueDate' name='DueDate'"
      + "placeholder='Choose a Date: ' onchange='dayFunction()'>";
    li.innerHTML += "&nbsp;<div class='priority'>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
      "<label for='selector'>Priority color </label>" +
      "<select name='setSelector' id='setSelector' onchange='this.style.backgroundColor=this.value'>" +
      "<option name='selector0' selected>---Select priority color---</option>"
      + "<option name='selector1' class='selector' id='selector1' onclick='changeColor()' value='orange'>Caution High (Orange)</option>"
      + "<option name='selector2' class='selector' id='selector2' onclick='changeColor()' value='yellow'>Reasonably Fair (Yellow)</option>"
      + "<option name='selector3' class='selector' id='selector3' onclick='changeColor()' value='green'>Chilling Low (Green)</option>"
      + "</select>"
      + "</div>";
  }
  document.getElementById("add2").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


/* Set clock to automatic */
setInterval("runClock()", 1000);
runClock();

/* Display the current date and time */
function runClock() {
  var currentDay = new Date();
  var currentDate = currentDay.toLocaleDateString();
  var currentTime = currentDay.toLocaleTimeString();
  document.getElementById("dateNow").innerHTML = currentDate + "<br /> " + currentTime;
}

/* Gets current time for calculating how much days left */
Date.prototype.toDateInputValue = (function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
});
document.getElementById('currentDateForCalculation').value = new Date().toDateInputValue();
document.getElementById('currentDateForCalculation').style.display = 'none';

/* Creator text effect */
var e = document.getElementById('creator');
e.onmouseover = function () {
  document.getElementById('creatorInfo').style.display = 'block';
}
e.onmouseout = function () {
  document.getElementById('creatorInfo').style.display = 'none';
}

// Create new list on the subtask button
function newList3() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("add3").value;
  var text = document.createTextNode(inputValue);
  li.innerHTML += "<input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'> ";
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must name your subtask!");
  } else {
    document.getElementById("listing3").appendChild(li);
    li.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      + "<label for='DueDate'>Due date:</label> <input type='date' class='DueDate' name='DueDate'"
      + "placeholder='Choose a Date: ' onchange='dayFunction()'>";
    li.innerHTML += "&nbsp;<div class='priority'>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
      "<label for='selector'>Priority color </label>" +
      "<select name='setSelector' id='setSelector' onchange='this.style.backgroundColor=this.value'>" +
      "<option name='selector0' selected>---Select priority color---</option>"
      + "<option name='selector1' class='selector' id='selector1' onclick='changeColor()' value='orange'>Caution High (Orange)</option>"
      + "<option name='selector2' class='selector' id='selector2' onclick='changeColor()' value='yellow'>Reasonably Fair (Yellow)</option>"
      + "<option name='selector3' class='selector' id='selector3' onclick='changeColor()' value='green'>Chilling Low (Green)</option>"
      + "</select>"
      + "</div>";
  }
  document.getElementById("add3").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}