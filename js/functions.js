function имяФункции(str, maxLength) {
  return str.length <= maxLength;
}

// Примеры использования:
console.log(имяФункции('проверяемая строка', 20)); // true
console.log(имяФункции('проверяемая строка', 18)); // true
console.log(имяФункции('проверяемая строка', 10)); // false

