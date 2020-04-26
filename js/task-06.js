let total = 0;
const numbers = [];

do {
  const input = prompt('Введите число');

  if (input === null) {
    break;
  }

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(Number(input));
} while (true);

if (numbers.length !== 0) {
  for (const number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
