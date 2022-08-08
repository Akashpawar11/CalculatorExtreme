function show(value) {
  document.getElementById("screen").value += value;
}
function clearscreen() {
  document.getElementById("screen").value = "";
}
function calculate() {
  let x = document.getElementById("screen").value;
  let y;
  if (x == "") {
    document.getElementById("screen").value = "0";
  } else {
    try {
      y = eval(x);
    } catch (error) {
      document.getElementById("screen").value = "SYNTAX-ERROR";
      return;
    };
    document.getElementById("screen").value = y;
  
  };      
};
