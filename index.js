// 4. Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3.

const arr = [
    [1,2],
    [1,2,3],
    [1,2,3,4]
];

for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 3)
     console.log(arr[i])
      break;
  }
//massiv[0].length - длина определенного элемента массива

// for ([начало]; [условие]; [шаг]) выражения

for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 3)
     console.log(arr[i])
      break;
  }