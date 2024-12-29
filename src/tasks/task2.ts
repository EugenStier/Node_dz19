interface StringToBooleanFunction {
  (input: string): boolean;
}

const isEmptyString: StringToBooleanFunction = (input) => input.trim() === "";

// Пример использования:
console.log(isEmptyString("")); // Вывод: true
console.log(isEmptyString("Hello")); // Вывод: false
