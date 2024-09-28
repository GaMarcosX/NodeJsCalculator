// TIRAR DO ARRAY E COLOCAR NO HITORICO,

const { select, input } = require("@inquirer/prompts");

const numbers = [];

const history = [];

console.log("Bem vindo ao App de Calculadora!");

const primeiroNumero = async () => {
    console.clear();

    const number1 = await input({
        message: "Digite o numero aqui",
    });

    if (number1.length === 0) {
        console.log("Não pode ser vazio");
        return primeiroNumero();
    }
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
    if (number2.length === 0) {
        console.log("Não pode ser vazio");

        return sum();
    }
    numbers.push(number2);

    if (numbers.length == 2) {
        const number1 = numbers[0];
        const number2 = numbers[1];
        let resultado = parseFloat(number1) + parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    } else {
        const number1 = numbers[0];
        const number2 = history[history.length - 1];
        let resultado = parseFloat(number1) + parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    }

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
            console.log("Último Número: " + history[history.length - 1]);
            await operador();
            break;
        case "não":
            return;
    }
};
const sub = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    if (number2.length === 0) {
        console.log("Não pode ser vazio");

        return sum();
    }
    numbers.push(number2);

    if (numbers.length == 2) {
        const number1 = numbers[0];
        const number2 = numbers[1];
        let resultado = parseFloat(number1) - parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    } else {
        const number1 = numbers[0];
        const number2 = history[history.length - 1];
        let resultado = parseFloat(number1) - parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    }

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
            console.log("Último Número: " + history[history.length - 1]);
            await operador();
            break;
        case "não":
            return;
    }
};
const mul = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    if (number2.length === 0) {
        console.log("Não pode ser vazio");

        return sum();
    }
    numbers.push(number2);

    if (numbers.length == 2) {
        const number1 = numbers[0];
        const number2 = numbers[1];
        let resultado = parseFloat(number1) * parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    } else {
        const number1 = numbers[0];
        const number2 = history[history.length - 1];
        let resultado = parseFloat(number1) * parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    }

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
            console.log("Último Número: " + history[history.length - 1]);
            await operador();
            break;
        case "não":
            return;
    }
};
const div = async () => {
    const number2 = await input({
        message: "Digite o segundo número",
    });
    if (number2.length === 0) {
        console.log("Não pode ser vazio");

        return sum();
    }
    numbers.push(number2);

    if (numbers.length == 2) {
        const number1 = numbers[0];
        const number2 = numbers[1];
        let resultado = parseFloat(number1) / parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    } else {
        const number1 = numbers[0];
        const number2 = history[history.length - 1];
        let resultado = parseFloat(number1) / parseFloat(number2);

        console.log("Seu resultado é: " + resultado);
        history.push(resultado.toString());

        const index1 = numbers.indexOf(number1);
        if (index1 > -1) {
            numbers.splice(index1, 1);
        }

        const index2 = numbers.indexOf(number2);
        if (index2 > -1) {
            numbers.splice(index2, 1);
        }
    }

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
            console.log("Último Número: " + history[history.length - 1]);
            await operador();
            break;
        case "não":
            return;
    }
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
                {
                    name: "Sair",
                    value: "sair",
                },
            ],
        });
        switch (opcao) {
            case "calc":
                await primeiroNumero();
                break;
            case "hist":
                await historico();
                break;
            case "sair":
                console.log("Saindo...");
                console.clear;
                process.exit(0);
        }
    }
};
start();
