"use strict";

function getPassowrd() {
  var chars = "0123456789abcdefigklmnopqrstuvwxyz=)àç_è-(é&²~#{[|^@]}¤/*-+.";
  var passowrdLength = 20;
  var Passowrd = "";

  for (var i = 0; i < passowrdLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    Passowrd += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = Passowrd;
}

function Copied() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /* For mobile devices */

  if (copyText.value == "") {
    alert("No Password!");
  } else {
    navigator.clipboard.writeText(copyText.value);
    alert("Copied Password \n " + copyText.value);
  }
}