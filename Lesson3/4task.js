// 4. Створити 4 функції: shift, unshift, push, pop що роблять те саме що і аналогічні методи масиву,
// має приймати в якості параметра массив, та додаткові параметри якщо вони необхідні.
//     Наприклад
// shift (array) - видаляє перший елемент переданого масиву array.
// push(array, value) - додає у кінець масиву array елемент value
// unshift()добавляет новые элементы в начало массива.
// pop() удаляет последний элемент из массива и возвращает его значение.
// Використовувати методи масиву під час вирішення завдання заборонено!

function shift(arr) {
    arr = []
    let a = prompt('Введите количество элементов в массиве: ')
    a = Number(a)
    for (let i = 0; i < a; i++) {
        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
    }
    let value = arr[0]
    alert(arr)
    i = 0
    while (i < arr.length) {
        if (i > 0 && i < arr.length) {
            arr[i - 1] = arr[i]
        }
        i++
    }
    arr.length = arr.length - 1
    alert(value)
    alert(arr)


}

function pop(arr) {
    arr = []
    let a = prompt('Введите количество элементов в массиве: ')
    for (let i = 0; i <= a; i++) {
        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        alert(arr)
        if (i === a) {
            arr[i] = arr[a]
            console.log(arr[a])
        }
        arr.length = 6
    }
    alert(arr)
    //
    // for (let i = 0; i <= a; i++) {
    //     arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
    //     alert(arr)
    //     if (i === a) {
    //         arr[i++] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
    //         arr.length = a
    //     }
    //
    //
    // }
    // alert(arr)

}

function push(arr) {
    arr = []
    let value = prompt('Введите значение, которое нужно добавить в массив: ')
    let a = prompt('Введите количество элементов в массиве: ')
    a = Number(a)
    for (let i = 0; i <= a - 1; i++) {
        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        if (i === a - 1) {
            arr[i + 1] = value
        }
    }

    alert(arr)
}

function unshift(arr) {
    arr = []
    let value = prompt('Введите значение, которое нужно добавить в массив: ')
    let a = prompt('Введите количество элементов в массиве: ')
    a = Number(a)
    for (let i = 0; i <= a; i++) {
        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        if (i === 0) {
            arr[i] = value
        }
    }

    alert(arr)
}


// pop()
// shift()
// push()
// unshift()
