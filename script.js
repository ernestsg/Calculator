//"My first Project"


// Save html DOM elements into variables.

  var one = document.getElementById("one")
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");

  var dot = document.getElementById("dot");
  var percent = document.getElementById("percent");

  var allClear = document.getElementById("allClear")

  var plus = document.getElementById("plus");
  var minus = document.getElementById("minus");
  var multiply = document.getElementById("multiply");
  var divide = document.getElementById("divide");
  var percentage = document.getElementById("percent");

  var currentOperation = document.getElementById("currentOperation");

  var displayValue = "0";
  var hangingValue;
  var evalStringArray = [];

  var numbers = document.getElementsByClassName("numbers");
  var operators = document.getElementsByClassName("operators");

  var update = function update(number){
    var clickedNumber = number.target.innerHTML;

    if(displayValue === "0"){
      displayValue = "";
    }

    displayValue += clickedNumber;
    currentOperation.innerHTML = displayValue;
  }

  var addOperator = function addOperator(operator){
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

  }  else if(clickedOperator == "="){

    evalStringArray.push(displayValue);
    var calculation = eval(evalStringArray.join(" "));
    displayValue = calculation + " ";
    currentOperation.innerHTML = displayValue;
    //evalStringArray = [displayValue];
    //displayValue = "0";
  }
}
  for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", update);
  }

  for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", addOperator);
  }

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
 percentage.onclick = function(){
   displayValue /= 100;
   currentOperation.innerHTML = displayValue;
 }
