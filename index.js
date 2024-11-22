// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість.
//  Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

const friends = ["Mango", "Poly", "Kivs", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string = string + friends[i];
  console.log(string);
}

console.log(friends.join(","));

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);

// 3. Видалити

const cardToRemove = cards.splice(2, 1);
console.log(cardToRemove);

// 4. Додати

const cardToInsert = cards.push("Карточка-6");
console.log(cardToInsert);
console.log(cards);

// 5. Оновити
const newCard = ["Я оновилась"];
const cardToUpdate = cards.splice(2, 1, "Карточка-4 оновилась");
console.log(cardToUpdate);
console.log(cards);
