document.getElementById('landingScreen').addEventListener('click', function () {
    this.classList.add('hide');
    document.getElementById('calculatorBox').classList.add('show');
});

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {

            if (string.includes("%")) {
                let parts = string.split(/([+\-*])/);
                let num1 = Number(parts[0]);
                let operator = parts[1];
                let num2 = Number(parts[2].replace("%", ""));

                if (operator == "+") {
                    string = num1 + (num1 * num2 / 100);
                }
                else if (operator == "-") {
                    string = num1 - (num1 * num2 / 100);
                }
                else if (operator == "*") {
                    string = num1 * (num2 / 100);
                }

                input.value = string;
            }

            else {
                string = eval(string);
                input.value = string;
            }
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});