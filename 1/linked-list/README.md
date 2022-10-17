# Двусторонний двусвязанный связанный список

Список реализован с помощью класса LinkedList, который предоставляет методы для работы со списком:

- push - Добавление элемента в конец списка
- pop - Удаление элемента из конца списка
- unshift - Добавление элемента в начало списка
- shift- Удаление элемента из начала списка

Геттеры:

- first - Ссылка на первый элемент списка
- last - Ссылка на последний элемент списка

```js
const list = new LinkedList();

list.push(1);
list.push(2);
list.unshift(3);

console.log(list.first.value); // 3
console.log(list.last.value); // 2
console.log(list.first.next.value); // 1
console.log(list.first.next.prev.value); // 3
```
