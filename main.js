// Метод для генерації масиву в заданому діапазоні та виведення його елементів у вказаному форматі
const arr = [];
function generateArray(arr, length, min, max) {
  for (let i = 0; i < length; i++) {
    // цикл для генерації випадкових чисел і додавання у масив
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  for (let i = 0; i < arr.length; i++) {
    // цикл для виводу елементів
    console.log(`[елемент_${i + 1}_значення_${arr[i]}]`);
  }
}
generateArray(arr, 3, -15, 15);

// Метод для рахування кількості та суми парних елементів масиву в заданому діапазоні
function countAndSumElements(arr, min, max) {
  let count = 0;
  let sum = 0;

  for (const num of arr) {
    // перебираємо всі елементи масиву
    if (num >= min && num <= max && num % 2 === 0) {
      // перевіряємо чи елемент знаходиться в діапазоні та чи є він парним
      count++;
      sum += num;
    }
  }
  console.log(
    `Кількість парних елементів: ${count}, Сума парних елементів: ${sum}`
  );
  return { count, sum };
}
countAndSumElements(arr, -15, 15);

// Метод для визначення середнього арифметичного та кількості елементів більших за середнє арифметичне
function calculateAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0); // обчислюємо суму всіх елементів масиву
  const average = sum / arr.length;
  const countAboveAverage = arr.filter((num) => num > average).length; // метод для створення нового масиву в якому лише елементи які більші за середнє арифметичне
  console.log(
    `Середнє арифметичне: ${average}, Кількість елементів більших за середнє арифметичне: ${countAboveAverage} `
  );

  return { average, countAboveAverage };
}
calculateAverage(arr);

// Метод для обчислення попарних сум елементів двох масивів однакової довжини
function calculateSum(arr1, arr2) {
  /*if (arr1.length !== arr2.length) { // перевіряємо чи масиви однакові
        throw new Error("Масиви різної довжини");
    } */
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    // проходимось по всіх елементах масиву
    result.push(arr1[i] + arr2[i]); // додаємо відповідні елементи
  }
  return result;
}

const arr1 = [46, 222, 90];
const arr2 = [-2, 57, 37, -85, 26];
console.log("Попарна сума елементів двох масивів:", calculateSum(arr1, arr2));

// Створення третього масиву як конкатенацію двох масивів різної довжини
let arr3 = [];
function concatenateArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr3 += arr1[i];
    arr3 += arr2[i];
  }
}
concatenateArrays(arr1, arr2);
console.log(`Об'єднання двох масивів: [${arr3}]`);

// Метод для заміни місцями максимума та мінімума в масиві
function swapMinMax(arr) {
  const minIndex = arr.indexOf(Math.min(...arr)); // знаходимо індекси
  const maxIndex = arr.indexOf(Math.max(...arr));

  if (minIndex !== -1 && maxIndex !== -1) {
    // перевіряємо чи індекси не рівні -1
    const temp = arr[minIndex]; // виконується обмін значеннями
    arr[minIndex] = arr[maxIndex];
    arr[maxIndex] = temp;
  }
}
const arr4 = [57, 5];
swapMinMax(arr4);
console.log("Масив після заміни:", arr4);

// Метод для розділення масиву на два: з додатніми та від’ємними елементами
function negativeAndPositive(arr) {
  const negative = arr.filter((num) => num < 0);
  const positive = arr.filter((num) => num >= 0);
  return { negative, positive };
}
const arr5 = [-3, 89, 0, -33, -6, 25];
console.log(
  "Поділ масиву на додатні та від'ємні елементи:",
  negativeAndPositive(arr5)
);

// Метод для видалення дублікатів максимума та мінімума з масиву
function removingDuplicatesOfMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return arr.filter((num) => num !== min && num !== max); // створюємо масив у якому лише ті елементи які не рівні мін та мах значенням
}
const arr6 = [16, 8, 22, 16, 8, 58, 58];
console.log(
  "Масив після видалення дублікатів максимума та мінімума:",
  removingDuplicatesOfMinMax(arr6)
);


