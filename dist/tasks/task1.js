"use strict";
const sumEvenNumbers = (numbers) => {
    return numbers
        .filter((num) => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
};
// Пример использования:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Вывод: 12
