//"My first Project"

// Save key components in variables
  var currentOperation = document.getElementById("currentOperation");

  var dot = document.getElementById("dot");
  var allClear = document.getElementById("allClear");
  var clear = document.getElementById("clear");

  var displayValue = "0";
  var hangingValue;
  var evalStringArray = [];

  var numbers = document.getElementsByClassName("numbers");
  var operators = document.getElementsByClassName("operators");

//Set functions to update display and operate accordingly.

  var update = function update(number){
    var clickedNumber = number.target.innerHTML;

    if(displayValue === "0"){
      displayValue = "";
    }

    displayValue += clickedNumber;
    currentOperation.innerHTML = displayValue;
  }

  var operation = function operation(operator){
    var clickedOperator = operator.target.innerHTML;

    if(clickedOperator == "+"){
      hangingValue = displayValue;
      displayValue = "0";
      evalStringArray.push(hangingValue);
      evalStringArray.push("+");

    } else if(clickedOperator == "-"){
      hangingValue = displayValue;
      displayValue = "0";
      evalStringArray.push(hangingValue);
      evalStringArray.push("-");

    } else if(clickedOperator == "×"){
      hangingValue = displayValue;
      displayValue = "0";
      evalStringArray.push(hangingValue);
      evalStringArray.push("*");

  } else if(clickedOperator == "÷"){

    hangingValue = displayValue;
    displayValue = "0";
    evalStringArray.push(hangingValue);
    evalStringArray.push("/");

  }  else if(clickedOperator == "%"){
    hangingValue = displayValue;
    displayValue = "0";
    evalStringArray.push(hangingValue);
    evalStringArray.push("%");


  }  else if(clickedOperator == "="){

    evalStringArray.push(displayValue);

    if(evalStringArray.includes("%")){
      displayValue = evalStringArray[0]/100 * evalStringArray[2];
      currentOperation.innerHTML = displayValue;

    } else {
      var calculation = eval(evalStringArray.join(" "));
    displayValue = calculation + " ";
    currentOperation.innerHTML = displayValue;
    evalStringArray = [];
  }

  }
}

//Add Event Listeners for numbers and operators.

  for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", update);
  }

  for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", operation);
  }

//Add extra functionality

  allClear.onclick = function(){
    displayValue = "0";
    prendingValue = "";
    evalStringArray = [];
    currentOperation.innerHTML = displayValue;
  };


  clear.onclick = function(){
    displayValue = displayValue.slice(0, displayValue.length -1);
    currentOperation.innerHTML = displayValue;

    if(displayValue === ""){
      displayValue = "0";
      currentOperation.innerHTML = displayValue;
    };
  };

  dot.onclick = function(){
    if(!displayValue.includes(".")){
      displayValue += dot.innerHTML;
      currentOperation.innerHTML = displayValuel;
    }
  }
