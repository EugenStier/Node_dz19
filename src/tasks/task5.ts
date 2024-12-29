const makeTriple = <T>(arg1: T, arg2: T, arg3: T): T[] => {
  return [arg1, arg2, arg3];
};

// Пример использования:
console.log(makeTriple(1, 2, 3)); // Вывод: [1, 2, 3]
console.log(makeTriple("a", "b", "c")); // Вывод: ['a', 'b', 'c']
