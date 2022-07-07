function getCodes(code) {
    code = prompt()
    let array = code.split('')
    console.log(array)
    let arr = []
    if (array.length === 1) {
        arr = oneSymbol(code)
    } else if (array.length === 2) {
        arr = twoSymbols(code)
    } else if (array.length === 3) {
        arr = threeSymbols(code)
    }else if(array.length===4){
        arr=fourSymbols(code)
    }
    console.log(arr)
}

function oneSymbol(code) {
    let set = new Set()
    let array = getMaybeDigit(code)
    for (let i = 0; i < array.length; i++) {
        set.add(array[i])
    }
    let result = Array.from(set)
    return (result)

}

function twoSymbols(code) {
    let set = new Set()
    let array = code.split('')
    let array1 = getMaybeDigit(array[0])
    let array2 = getMaybeDigit(array[1])
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            let a = array1[i] + array2[j]
            set.add(a)
        }
    }
    let result = Array.from(set)
    return (result)
}

function threeSymbols(code) {
    let set = new Set()
    let array = code.split('')
    let array1 = getMaybeDigit(array[0])
    let array2 = getMaybeDigit(array[1])
    let array3 = getMaybeDigit(array[2])
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            for (let m = 0; m < array3.length; m++) {
                let a = array1[i] + array2[j] + array3[m]
                set.add(a)
            }
        }
    }
    let result = Array.from(set)
    return (result)
}

function fourSymbols(code) {
    let set = new Set()
    let array = code.split('')
    let array1 = getMaybeDigit(array[0])
    let array2 = getMaybeDigit(array[1])
    let array3 = getMaybeDigit(array[2])
    let array4 = getMaybeDigit(array[3])
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            for (let k = 0; k < array3.length; k++) {
                for (let m = 0; m < array4.length; m++) {
                    let a = array1[i] + array2[j] + array3[k] + array4[m]
                    set.add(a)
                }
            }
        }
    }
        let result = Array.from(set)
        return (result)

}


    let numbers = new Map()
    numbers.set('1', ['2', '1', '4'])
    numbers.set('2', ['1', '3', '2', '5'])
    numbers.set('3', ['2', '6', '3'])
    numbers.set('4', ['1', '5', '7', '4'])
    numbers.set('5', ['2', '4', '6', '8', '5'])
    numbers.set('6', ['2', '5', '9', '6'])
    numbers.set('7', ['4', '8', '7'])
    numbers.set('8', ['5', '7', '9', '0', '8'])
    numbers.set('9', ['6', '8', '9'])
    numbers.set('0', ['8', '0'])


    function getMaybeDigit(code) {
        return (numbers.get(code))
    }

    getCodes(18)