// TIRAR DO ARRAY E COLOCAR NO HITORICO,

const { select, input } = require("@inquirer/prompts");

const numbers = [];
const history = [];

console.log("Bem vindo ao App de Calculadora");

const calcular = async () => {
    console.clear();
    const number = await input({
        message: "Digite o numero aqui",
    });

    if (number.length == 0 || number === "") {
        console.log("Preencha com um número");
        return;
    }
    numbers.push(number);

    const operador = await select({
        message: "Qual operação deseja fazer?",
        choices: [
            {
                name: "Soma",
                value: "sum",
            },
            {
                name: "Subtração",
                value: "sub",
            },
            {
                name: "Multiplicação",
                value: "mul",
            },
            {
                name: "Divisão",
                value: "div",
            },
            {
                name: "Sair",
                value: "exit",
            },
        ],
    });
    switch (operador) {
        case "sum":
            await sum();
            break;
        case "sub":
            await sub();
            break;
        case "mul":
            await mul();
            break;
        case "div":
            await div();
            break;
        case "exit":
            return;
    }
};
const sum = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    await sumResult();
};
const sumResult = async () => {
    resultado = parseFloat(numbers[0]) + parseFloat(numbers[1]);

    console.log(resultado);
};
const sub = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    await subResult();
};
const subResult = async () => {
    resultado = parseFloat(numbers[0]) - parseFloat(numbers[1]);

    console.log(resultado);
};
const mul = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    await mulResult();
};
const mulResult = async () => {
    resultado = parseFloat(numbers[0]) * parseFloat(numbers[1]);

    console.log(resultado);
};
const div = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    await divResult();
};
const divResult = async () => {
    resultado = parseFloat(numbers[0]) / parseFloat(numbers[1]);

    console.log(resultado);
};

const start = async () => {
    while (true) {
        const opcao = await select({
            message: "o que deseja fazer?",
            choices: [
                {
                    name: "Calcular",
                    value: "calc",
                },
                {
                    name: "Histórico",
                    value: "hist",
                },
            ],
        });
        switch (opcao) {
            case "calc":
                await calcular();
                break;
        }
    }
};
start();
