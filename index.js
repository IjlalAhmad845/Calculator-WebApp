var display = document.getElementsByClassName("display")[0];
var upperDisplay = document.getElementsByClassName("upper-display")[0];

for (var i = 0; i < 34; i++) {
  document
    .getElementsByClassName("calc-item")
    [i].addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        var result = display.innerHTML;
        if (result === "") result = "0";

        if (upperDisplay.innerHTML.includes("^")) {
          display.innerHTML = Math.pow(
            parseFloat(upperDisplay.innerHTML.split("^")[0]),
            parseFloat(result)
          );
          upperDisplay.innerHTML = upperDisplay.innerHTML + result;
        } else {
          upperDisplay.innerHTML = result;
          result = eval(result);
          display.innerHTML = result;
        }
      } else if (e.target.innerHTML == "C") {
        display.innerHTML = "";
      } else if (e.target.innerHTML == "CE") {
        upperDisplay.innerHTML = "";
        display.innerHTML = "";
      } else if (e.target.innerHTML == "←") {
        display.innerHTML = display.innerHTML.slice(
          0,
          display.innerHTML.length - 1
        );
      } else if (e.target.innerHTML == "x") {
        display.innerHTML += "*";
      } else if (e.target.innerHTML == "1/x") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "1/0";

        upperDisplay.innerHTML = result;
        result = eval(1 / display.innerHTML);
        display.innerHTML = result;
      } else if (e.target.innerHTML == "Rad") {
        e.target.innerHTML = "Deg";
      } else if (e.target.innerHTML == "Deg") {
        e.target.innerHTML = "Rad";
      } else if (e.target.innerHTML == "√") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = "√(" + result + ")";

        result = Math.sqrt(result);
        display.innerHTML = result;
      } else if (e.target.innerHTML == "Sin") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";

        upperDisplay.innerHTML = "sin(" + result + ")";

        if (document.getElementById("rad").innerHTML == "Rad")
          result = eval(Math.sin(display.innerHTML));
        else
          result =
            Math.round(
              eval(Math.sin((display.innerHTML * Math.PI) / 180) * 100000)
            ) / 100000;

        display.innerHTML = result;
      } else if (e.target.innerHTML == "Cos") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";

        upperDisplay.innerHTML = "cos(" + result + ")";

        if (document.getElementById("rad").innerHTML == "Rad")
          result = eval(Math.cos(display.innerHTML));
        else
          result =
            Math.round(
              eval(Math.cos((display.innerHTML * Math.PI) / 180) * 100000)
            ) / 100000;

        display.innerHTML = result;
      } else if (e.target.innerHTML == "Tan") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";

        upperDisplay.innerHTML = "tan(" + result + ")";

        if (document.getElementById("rad").innerHTML == "Rad")
          result = eval(Math.tan(display.innerHTML));
        else
          result =
            Math.round(
              eval(Math.tan((display.innerHTML * Math.PI) / 180) * 100000)
            ) / 100000;

        display.innerHTML = result;
      } else if (e.target.innerHTML == "log") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = "log(" + result + ")";

        display.innerHTML = eval(Math.log(display.innerHTML) / Math.LN10);
      } else if (e.target.innerHTML == "ln") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = "ln(" + result + ")";

        display.innerHTML = eval(Math.log(display.innerHTML));
      } else if (e.target.innerHTML == "e") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = "e";

        display.innerHTML = eval(Math.E);
      } else if (e.target.innerHTML == "π") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = "π";
        display.innerHTML = eval(Math.PI);
      } else if (e.target.innerHTML == "%") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = result + "*100";

        display.innerHTML = eval(display.innerHTML * 100);
      } else if (e.target.innerHTML == "!") {
        var result = display.innerHTML;
        if (result === "" || result === "0") result = "0";
        upperDisplay.innerHTML = result + "!";

        display.innerHTML = factorial(display.innerHTML);
      } else if (e.target.innerHTML == "^") {
        var result = display.innerHTML;
        upperDisplay.innerHTML = result + "^";

        display.innerHTML = "";
      } else {
        display.innerHTML += e.target.innerHTML;
      }
    });
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Backspace" && display.innerHTML.length >= 0) {
    display.innerHTML = display.innerHTML.substring(
      0,
      display.innerHTML.length - 1
    );
  } else if (isValidKey(e.key) && display.innerHTML.length <= 20)
    if (e.key == "Enter") {
      var result = display.innerHTML;
      if (result === "") result = "0";

      if (upperDisplay.innerHTML.includes("^")) {
        display.innerHTML = Math.pow(
          parseFloat(upperDisplay.innerHTML.split("^")[0]),
          parseFloat(result)
        );
        upperDisplay.innerHTML = result;
      } else {
        
        upperDisplay.innerHTML = result;

        if (result.includes("!")) {
          result = factorial(result.split("!")[0]);
        } else if (result.includes("%")) {
          upperDisplay.innerHTML = result.split("%")[0] + "*100";
          result = eval(result.split("%")[0] * 100);
        } else result = eval(result);

        
        display.innerHTML = result;
      }
    } else if (e.key == "^") {
      var result = display.innerHTML;
      upperDisplay.innerHTML = result + "^";
      display.innerHTML = "";
    } else display.innerHTML += e.key;
});

function isValidKey(key) {
  if (key == "Enter") return true;

  switch (key) {
    case "1":
      setClicked("one");
      return true;
    case "2":
      setClicked("two");
      return true;
    case "3":
      setClicked("three");
      return true;
    case "4":
      setClicked("four");
      return true;
    case "5":
      setClicked("five");
      return true;
    case "6":
      setClicked("six");
      return true;
    case "7":
      setClicked("seven");
      return true;
    case "8":
      setClicked("eight");
      return true;
    case "9":
      setClicked("nine");
      return true;
    case "0":
      setClicked("zero");
      return true;
    case "+":
      setClicked("plus");
      return true;
    case "-":
      setClicked("minus");
      return true;
    case "*":
      setClicked("multiply");
      return true;
    case "/":
      setClicked("divide");
      return true;
    case ".":
      setClicked("dot");
      return true;
    case "(":
      setClicked("open-bracket");
      return true;
    case ")":
      setClicked("close-bracket");
      return true;
    case "^":
      setClicked("power");
      return true;
    case "!":
      setClicked("factorial");
      return true;
    case "%":
      setClicked("percent");
      return true;
    case "Backspace":
      setClicked("backspace");
      return true;
    default:
      return false;
  }

}

function setClicked(key) {
  document.getElementById(key).classList.add("keyActive");
  setTimeout(() => {
    document.getElementById(key).classList.remove("keyActive");
  }, 50);
}

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
