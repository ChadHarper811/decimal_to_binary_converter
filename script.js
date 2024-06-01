const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000
    }
];

// First version with while loop
// const decimalToBinary = (input) => {
//     const inputs = [];
//     const quotients = [];
//     const remainders = [];

//     if (input === 0) {
//         result.innerText = "0";
//         return;
//     }

//     while (input > 0) {
//         const quotient = Math.floor(input/2);
//         const remainder = input % 2;
//         inputs.push(input);
//         quotients.push(quotient);
//         remainders.push(remainder);
//         input = quotient;
//     }
//     console.log("Inputs: ", inputs);
//     console.log("Quotients: ", quotients);
//     console.log("Remainders: ", remainders);

//     result.innerText = remainders.reverse().join("");
// }

// Second version with while loop
// const decimalToBinary = (input) => {
//     let binary = "";
//     if (input === 0) {
//         binary = "0";
//     }
//     while (input > 0) {
//         binary = (input % 2) + binary;
//         input = Math.floor(input/2);
//     }
//     result.innerText = binary;
// }

// Third version with recursive functionality
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input/2)) + (input % 2);
    }
};

const showAnimation = () => {
    result.innerText = "Call Stack Animation";
    animationData.forEach((obj) => {
        setTimeout(() => {animationContainer.innerHTML += `<p id=""></p>`}, obj.addElDelay);
    });
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    if (inputInt === 5) {
        showAnimation();
        return;
    }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
});