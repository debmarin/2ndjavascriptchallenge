let names = ['Amy', 'Bob', 'Joe', 'Bill', 'Sam']
let ages = [22, 33, 44, 55, 66]
let male = [false, true, true, true, false]

let x = function () {
    if (typeof Index[0] === String){
        names.push('Pam')
    } else if (typeof Index[0] === Number){
        ages.push(77)
    } else if (typeof Index[0] === Boolean){
        male.push(false)
    }
} 

//missing a crucial step here 
