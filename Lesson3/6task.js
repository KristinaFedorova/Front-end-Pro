// 6. Створити функцію, що генеруватиме чоловічі та жіночі імена.
//     Юзер вводить першу букву імені та першу букву прізвища.
//     Юзер вводить 'male' якщо хоче чоловіче ім'я , та 'female' якщо жіноче
// Після цього виводиться випадкове чоловіче чи жіноче ім'я.


// function names(a, firstLetterName) {
//      a = prompt('Введите пол: ')
//      firstLetterName = prompt('Введите первую букву имени: ')
//     const maleNames = {
//         'A': ['Аристарх', "Алексей", "Антон", "Артур"],
//         'B': ["Борис", "Богдан", "Борислав"]
//     }
//     const femaleNames = {
//         'A': ['Анастасия', 'Анна', 'Альбина', 'Агата'],
//         'B': ['Валентина', 'Валерия', 'Виктория', 'Вера','Вероника']
//     }
//
//     if (a === 'male') {
//         switch (firstLetterName) {
//             case('A'): {
//                 alert(maleNames.A[random(4)]);
//                 break
//             }
//             case('B'):{
//                 alert(maleNames.B[random(3)]);
//                 break
//             }
//         }
//     } else if(a==='female'){
//         switch(firstLetterName){
//             case('A'): {
//                 alert(femaleNames.A[random(4)]);
//                 break
//             }
//             case('B'):{
//                 alert(femaleNames.B[random(5)]);
//                 break
//             }
//         }
//     }
//
//
// }

// function surnames(a,firstLetterSurname){
//
//
//     firstLetterSurname = prompt('Введите первую букву фамилии: ')
//
//     const maleSurnames = {
//         'A': ['Абалкин', "Авдеев", "Авилов"],
//         'B': ["Багримов", "Базлов", "Байдиков"]
//     }
//     const femaleSurnames = {
//         'A': ['Абовская', 'Абросимова', 'Авалян', 'Абатурина'],
//         'B': ['Важенина', 'Вайгачева', 'Вадбальская', 'Войтенко','Ваминенко']
//     }
//
//     if (a === 'male') {
//         switch (firstLetterSurname) {
//             case('A'): {
//                 alert(maleNames.A[random(3)]);
//                 break
//             }
//             case('B'):{
//                 alert(maleNames.B[random(3)]);
//                 break
//             }
//         }
//     } else if(a==='female'){
//         switch(firstLetterSurname){
//             case('A'): {
//                 alert(femaleNames.A[random(4)]);
//                 break
//             }
//             case('B'):{
//                 alert(femaleNames.B[random(5)]);
//                 break
//             }
//         }
//     }
//
//
// }

function random(max) {
    return (Math.floor(Math.random() * max))
}

function male(a) {
        let firstLetterName = prompt('Введите первую букву имени: ')
        const maleNames = {
            'A': ['Аристарх', "Алексей", "Антон", "Артур"],
            'B': ["Борис", "Богдан", "Борислав"]
        }

        switch (firstLetterName) {
            case('A'): {
                alert(maleNames.A[random(4)]);
                break
            }
            case('B'): {
                alert(maleNames.B[random(3)]);
                break
            }
        }

        let firstLetterSurname = prompt('Введите первую букву фамилии: ')

        const maleSurnames = {
            'A': ['Абалкин', "Авдеев", "Авилов"],
            'B': ["Багримов", "Базлов", "Байдиков"]
        }

        switch (firstLetterSurname) {
            case('A'): {
                alert(maleSurnames.A[random(3)]);
                break
            }
            case('B'): {
                alert(maleSurnames.B[random(3)]);
                break
            }
        }


}

function female(a) {
        let firstLetterName = prompt('Введите первую букву имени: ')
        const femaleNames = {
            'A': ['Анастасия', 'Анна', 'Альбина', 'Агата'],
            'B': ['Валентина', 'Валерия', 'Виктория', 'Вера', 'Вероника']
        }
        switch (firstLetterName) {
            case('A'): {
                alert(femaleNames.A[random(4)]);
                break
            }
            case('B'): {
                alert(femaleNames.B[random(5)]);
                break
            }
        }

        let firstLetterSurname = prompt('Введите первую букву фамилии: ')

        const femaleSurnames = {
            'A': ['Абовская', 'Абросимова', 'Авалян', 'Абатурина'],
            'B': ['Важенина', 'Вайгачева', 'Вадбальская', 'Войтенко', 'Ваминенко']
        }
        switch (firstLetterSurname) {
            case('A'): {
                alert(femaleSurnames.A[random(4)])
                break
            }
            case('B'): {
                alert(femaleSurnames.B[random(5)]);
                break
            }
        }


}

// names()
// surnames()
let a = prompt('Введите пол: ')

    if (a === 'male') {
        male()
    } else if (a === 'female') {
        female()
    }else{
        alert('Не корректно введенные данные')
    }

//функции  names() и surnames(), если ищем отдельно имя и фамилию,
//а функции male() и female(), если ищем по полу