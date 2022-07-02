// 4. Створити 4 функції: shift, unshift, push, pop що роблять те саме що і аналогічні методи масиву,
// має приймати в якості параметра массив, та додаткові параметри якщо вони необхідні.
//     Наприклад
// shift (array) - видаляє перший елемент переданого масиву array.
// push(array, value) - додає у кінець масиву array елемент value
// Метод unshift()добавляет новые элементы в начало массива.
// pop() удаляет последний элемент из массива и возвращает его значение.
// Використовувати методи масиву під час вирішення завдання заборонено!

function shift(arr) {
    arr = []
    let a = 7
    a = Number(a)
    let i = 0
    i = Number(i)
    for (i; i < a; i++) {
        if (i === 0) {
            arr[1] = arr[i]

        } else {
            arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        }

    }
    console.log(arr.length)
    console.log(arr[0])
    console.log(arr)

}

function pop(arr) {
    arr = []
    let a = 6
    for (let i = 0; i <= a; i++) {
        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        console.log(arr)
        if (i === a) {
            arr[i] = arr[a]
            console.log(arr[a])
        }
        arr.length = 6
    }
    console.log(arr)

    // for (let i = 0; i <= a; i++) {
    //     arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
    //     console.log(arr)
    //     if (i === a) {
    //         arr[i++] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
    //         arr.length = a
    //     }
    //
    //
    // }
    // console.log(arr)
}

function push(arr) {
    arr = []
    let a = 6
    let i = 0
    for (let i = 0; i <= a; i++) {
        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        console.log(arr)



    }
    i++
    if (i === a||i>=a) {

        arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
        a++
    }
    console.log(arr)
}


let arr = []
for (let i = 0; i < 7; i++) {
    arr[i] = Math.floor((Math.random() * 10) + (Math.random() * (-10)))
}
// pop()
// shift()
push()