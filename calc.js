// TIRAR DO ARRAY E COLOCAR NO HITORICO,

const { select, input } = require("@inquirer/prompts");

const numbers = [];

const history = [];

console.log("Bem vindo ao App de Calculadora");

const primeiroNumero = async () => {
    console.clear();
    const number1 = await input({
        message: "Digite o numero aqui",
    });
    numbers.push(number1);
    await operador();
};
const operador = async () => {
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

    const sumResult = () => {
        if (numbers.length !== 0) {
            resultado = parseFloat(numbers[0]) + parseFloat(numbers[1]);
            history.push(resultado);
            console.log(resultado);
        }

        //RACIOCINIO PAROU AQUI
        if (numbers.length === 1) {
            resultado =
                parseFloat(history[history.length - 1]) +
                parseFloat(numbers[1]);
            history.push(resultado);
        }
    };
    sumResult();

    const continuar = await select({
        message: "Deseja continuar a operação?",
        choices: [
            {
                name: "Sim",
                value: "sim",
            },
            {
                name: "Não",
                value: "nao",
            },
        ],
    });
    switch (continuar) {
        case "sim":
            await proceed();
            break;
        case "não":
            return;
    }

    const paraHistórico = () => {
        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    };
    paraHistórico();
};
// adicionar outros operadores..
const proceed = async () => {
    await operador();
};

const start = async () => {
    while (true) {
        console.log(numbers);
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
                await primeiroNumero();
                break;
        }
    }
};
start();
