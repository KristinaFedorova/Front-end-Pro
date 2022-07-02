// 3. Юзер вводить розмір массиву. Після цього юзер вводить один за одним значення в масив.
//     Вивести створений масив на екран.
//     Знайти мінімальний і максимальний елементи створеного масиву і поміняти їх місцями.
//     Вивести результат: Мінімальний = . Максимальний =. Новий масив =.


let a = prompt('Введите количество элементов в массиве: ')
a=Number(a)
let arr = []
for (let i = 0; i < a; i++) {
    let b = prompt('Введите элементы массива: ')
    b=Number(b)
    arr.push(b)

}
alert(arr)

const min = Math.min(...arr)
const max = Math.max(...arr)
alert(min + ' ' + max)

maxIndex = arr.indexOf(max)
minIndex = arr.indexOf(min)
arr[minIndex]=max
arr[maxIndex]=min
console.log(arr)


