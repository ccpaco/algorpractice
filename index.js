let number = max(72, 40);

function max(numFirst, numSec) {
  return numFirst > numSec ? numFirst : numSec;
}

document.getElementById("jsedit").innerHTML = " Changed output is " + number;
