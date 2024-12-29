type CompareStrings = (str1: string, str2: string) => boolean;

const areStringsEqual: CompareStrings = (str1, str2) => str1 === str2;

// Пример использования:
console.log(areStringsEqual("hello", "hello")); // Вывод: true
console.log(areStringsEqual("hello", "world")); // Вывод: false
