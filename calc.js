// TIRAR DO ARRAY E COLOCAR NO HITORICO,

const { select, input } = require("@inquirer/prompts");

const numbers = [];

const history = [];

console.log("Bem vindo ao App de Calculadora");

const calcular = async () => {
    console.clear();
    const number1 = await input({
        message: "Digite o numero aqui",
    });
    numbers.push(number1);

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
    const number1 = numbers[0];
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);

    const sumResult = () => {
        resultado = parseFloat(numbers[0]) + parseFloat(numbers[1]);

        console.log(resultado);
    };
    sumResult();

    const index1 = numbers.indexOf(number1);
    if (index1 > -1) {
        numbers.splice(index1, 1);
    }

    const index2 = numbers.indexOf(number2);
    if (index2 > -1) {
        numbers.splice(index2, 1);
    }
};

const sub = async () => {
    const number1 = numbers[0];
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    const subResult = async () => {
        resultado = parseFloat(numbers[0]) - parseFloat(numbers[1]);

        console.log(resultado);
    };
    ~subResult();
    const index1 = numbers.indexOf(number1);
    if (index1 > -1) {
        numbers.splice(index1, 1);
    }

    const index2 = numbers.indexOf(number2);
    if (index2 > -1) {
        numbers.splice(index2, 1);
    }
};

const mul = async () => {
    const number1 = numbers[0];
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    const mulResult = async () => {
        resultado = parseFloat(numbers[0]) * parseFloat(numbers[1]);

        console.log(resultado);
    };
    mulResult();
    const index1 = numbers.indexOf(number1);
    if (index1 > -1) {
        numbers.splice(index1, 1);
    }

    const index2 = numbers.indexOf(number2);
    if (index2 > -1) {
        numbers.splice(index2, 1);
    }
};

const div = async () => {
    const number1 = numbers[0];
    const number2 = await input({
        message: "Digite o segundo número",
    });
    numbers.push(number2);
    const divResult = async () => {
        resultado = parseFloat(numbers[0]) / parseFloat(numbers[1]);

        console.log(resultado);
    };
    divResult();
    const index1 = numbers.indexOf(number1);
    if (index1 > -1) {
        numbers.splice(index1, 1);
    }

    const index2 = numbers.indexOf(number2);
    if (index2 > -1) {
        numbers.splice(index2, 1);
    }
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
                await calcular();
                break;
        }
    }
};
start();
