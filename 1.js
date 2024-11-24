// 1
// let a=10;
// let b=3;
// let c =a%b;
// console.log(c);

//2
// let a = Number(prompt('Основание степени'));
// let b = Number(prompt('Показатель степени'));
// console.log(a**b);

//3
// let a = Number(prompt('Первый катет'));
// let b = Number(prompt('Второй катет'));
// console.log(0.5*a*b);

//4
// let a = Number(prompt('По фаренгейту'));
// console.log('По цельсию ' + 5/9*(a-32));

//5
// let a = Number(prompt('Число a'));
// let b = Number(prompt('Число b'));
// if(a%b==0)
//     console.log('Делится, результат: '+ a/b);
// else
//     console.log('Делится с остатком,остаток: '+a%b);

//6
// let a = Number(prompt('Число a'));
// let b = Number(prompt('Число b'));
// console.log((2*(a-b)-4*(b-a))/2);

//7
// let a = Number(prompt('Ребро куба'));
// console.log('Объем куба: '+ a**3);
// console.log('Площадь его полной поверхности: '+ 6*a**2);

//8
// let a = Number(prompt('Число a'));
// if(a==0)
//     console.log('Ноль');
// else if(a<0)
//     console.log('Отрицательное');
// else 
//     console.log('Положительное');

//9
// let numbers = [4, -2, 5, 19, -130, 0, 10];
// const minNumber = Math.min(...numbers);
// const maxNumber = Math.max(...numbers);
// console.log("Минимальное число:", minNumber);
// console.log("Максимальное число:", maxNumber);

//10
// let number = 245;
// let squareRoot = Math.sqrt(number);
// console.log("Квадратный корень из", number, "равен", squareRoot);

//11
// let a = Number(prompt('Число a'));
// const rounded = Math.round(a);
// console.log(rounded);

//12
// let a = Number(prompt('Число a'));
// const absoluteValue = Math.abs(a);
// console.log("Абсолютное значение числа", a, "равно", absoluteValue);

//13
// let a = Number(prompt('Основание степени'));
// let b = Number(prompt('Показатель степени'));
// const result = Math.pow(a, b);
// console.log(result);

//14
// const randomNumber = Math.random();
// console.log("Случайное число от 0 до 1:", randomNumber);

//15
// let firstNumber = parseInt(prompt("Введите первое целое число:"), 10);
// let secondNumber = parseInt(prompt("Введите второе целое число:"), 10);

// const sum = firstNumber + secondNumber;
// const difference = firstNumber - secondNumber;
// const product = firstNumber * secondNumber;

// alert(`Сумма: ${sum}\nРазность: ${difference}\nПроизведение: ${product}`);

//16
// const number = Number(prompt("Введите целое число:"));
// if (number % 2 === 0) {
//     console.log(true);  
// } else {
//     console.log(false); 
// }

//17
// const age = Number(prompt("Введите ваш возраст:"));
// if (age >= 0 && age <= 18) {
//     console.log("Детство");
// } else if (age >= 19 && age <= 40) {
//     console.log("Молодость");
// } else if (age >= 41 && age <= 100) {
//     console.log("Зрелость");
// } else {
//     console.log("Некорректный ввод");
// }

//18
// const inputValue = prompt("Введите число:");
// const number = parseFloat(inputValue);
// const squareRoot = Math.sqrt(number);
// const roundedSquareRoot = squareRoot.toFixed(2);
// console.log("Квадратный корень:", roundedSquareRoot);

//19
// let a = Number(prompt('Число a'));
// let b = Number(prompt('Число b'));
// if(a%b==0)
//     console.log('Делится, результат: '+ a/b);
// else
//     console.log('Делится с остатком,остаток: '+a%b);

//20
// const inputValue = prompt("Введите число:");
// const number = parseFloat(inputValue);
// const squareRoot = Math.sqrt(number);
// const roundedSquareRoot = Math.round(squareRoot);
// console.log("Квадратный корень (округленный):", roundedSquareRoot);

//21
// const inputValue = prompt("Введите время в минутах:");
// const totalMinutes = parseInt(inputValue, 10);
// if (isNaN(totalMinutes) || totalMinutes < 0) {
//     console.log("Пожалуйста, введите корректное неотрицательное число.");
// } else {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     console.log(`${totalMinutes} минут = ${hours} часов и ${minutes} минут`);
// }

//22
// const inputValue = prompt("Введите количество собачьих лет (n):");
// const dogYears = parseInt(inputValue, 10);
// if (isNaN(dogYears) || dogYears < 0) {
//     console.log("Пожалуйста, введите корректное неотрицательное число.");
// } else {
//     let humanYears;
//     if (dogYears <= 2) {
//         humanYears = dogYears * 10.5; 
//     } else {
//         humanYears = 2 * 10.5 + (dogYears - 2) * 4; 
//     }
//     console.log(`Возраст собаки в человеческих годах: ${humanYears}`);
// }

//23
const a = parseFloat(prompt("Введите коэффициент a:"));
const b = parseFloat(prompt("Введите коэффициент b:"));
const c = parseFloat(prompt("Введите коэффициент c:"));
if (a === 0) {
    console.log("Коэффициент a не должен быть равен нулю. Это не квадратное уравнение.");
} else {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        const roots = [x1, x2].sort((a, b) => a - b);

        console.log(`Корни уравнения: ${roots[0]}, ${roots[1]}`);
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        console.log(`Корень уравнения: ${x}`);
    } else {
        console.log("Уравнение не имеет действительных корней.");
    }
}