// 4. Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3.

const arr = [
    [1,2],
    [1,2,3],
    [1,2,3,4]
];

for (let i=0; arr.lenght>3; i++)
console.log(arr.length);

// А этот вдобавок расскажет и о своей позиции в массиве:
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
//   });