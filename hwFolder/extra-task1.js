function sumArray(arr){
    if(!Array.isArray(arr) || arr.length <=1){
        return 0
    }
const minValue = Math.min(...arr)
const maxValue = Math.max(...arr)

let minValueRemoved = false
let maxValueRemoved = false

const filteredArray = arr.filter(value => {
    if(value == minValue && !minValueRemoved){
        minValueRemoved = true
        return false
    }
    if(value == maxValue && !maxValueRemoved){
        maxValueRemoved = true
        return false
    }
return true

})
const sum = filteredArray.reduce((acc, value) => acc + value, 0)
return sum
}
console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([1, 1, 11, 2, 3]))