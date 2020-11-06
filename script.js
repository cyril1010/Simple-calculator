// Clear screen with C button.

function clearScreen() {

 document.getElementById(
   "result")
  .value = "";

}



// Display updates in Result Input

function updScreen(val) {

 var x = document.getElementById(
  "result").value;

 document.getElementById(
   "result")
  .value = x + val;

}
