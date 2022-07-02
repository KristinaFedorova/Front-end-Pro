// 1. Юзер вводить 2 цілих числа x та y. Вивести на екран всі числа від x до y включно.

const x=prompt('Введите меньшее число x')
const y=prompt('Введите большее число y')
let arr=[]

for(let i=x;i>=x&&i<=y;i++){
    arr.push(i)
}
alert(arr)