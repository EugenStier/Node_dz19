const getLastElement = <T>(arr: T[]): T | undefined => {
  return arr[arr.length - 1];
};

// Пример использования:
console.log(getLastElement([1, 2, 3])); // Вывод: 3
console.log(getLastElement(["a", "b", "c"])); // Вывод: 'c'
