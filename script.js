// THERE IS SOME ERROR WITH THIS CODE. I WILL DEFENITELY TRY TO CORRECT IT.

// IF YOU CAN HELP ME WITH THIS. FEEL FREE TO CONNECT WITH ME ON INSTAGRAM @bboycyril_

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
