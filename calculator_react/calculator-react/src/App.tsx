import Button from "./components/button";
import Screen from "./components/screen";
import "./App.css";
import "./css/screen.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { evaluate } from "mathjs";

const btnValues = [
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["C", 0, "=", "/"],
];
// more buttons like clear last input can also be added in this. (Here in this implementation, a basic caculator is made.)

function App() {
  const [previousScreen, setPreviousScreen] = useState(" ");
  const [screenValue, setScreenValue] = useState("0");
  const [numberValue, setnumberValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [input, setInput] = useState("");

  const clearHandler = () => {
    // setOperator("");
    // setResult(0);
    // setnumberValue(0);
    setScreenValue("0");
    setPreviousScreen(" ");
    setInput("");
  };

  const operatorHandler = (opValue: string) => {
    setOperator(opValue);
    setPreviousScreen(numberValue + opValue);
    // setScreenValue(numberValue + opValue);
    console.log("operator " + numberValue + opValue);
  };

  const resultHandler = () => {
    // if (typeof result === "number") {
    //   setScreenValue(result.toString());
    // }
    console.log(input);
    let result = evaluate(input);
    setScreenValue(result);
    console.log(result);
    setInput("");
  };

  //numberHandler and operatorHandler can also be used, but for more simplicity right now input handler will be used.
  const numberHandler = (number: number) => {
    // setScreenValue(number.toString());

    let res: string;
    setnumberValue(number);
    if (operator !== "") {
      setPreviousScreen(numberValue + operator + number);
      console.log(numberValue + operator + number);
      res = evaluate(numberValue + operator + number);
      setResult(Number(res));
      console.log("string math result" + res);
      setScreenValue(res);
    } else {
      setPreviousScreen(number.toString());
    }
  };

  const inputHandler = (ip: string) => {
    ip = input + ip;
    setInput(ip);
    setPreviousScreen(ip);
  };

  return (
    <>
      <div className="calculator card .bg-secondary-subtle">
        <div className="output">
          <Screen className="previous-operand" value={previousScreen} />
          <Screen className="current-operand" value={screenValue} />
        </div>

        <div className="calculator-keys ">
          {btnValues.flat().map((btn, i) => (
            <Button
              key={i}
              buttonName={btn}
              buttonValue={btn}
              classes="operator btn-info"
              onClick={(buttonValue) => {
                buttonValue === "C"
                  ? clearHandler()
                  : // : buttonValue === "+" ||
                  //   buttonValue === "-" ||
                  //   buttonValue === "x" ||
                  //   buttonValue === "/"
                  // ? operatorHandler(buttonValue) //alternative below
                  buttonValue === "="
                  ? resultHandler()
                  : // : numberHandler(buttonValue);
                    inputHandler(buttonValue);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
