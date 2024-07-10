arr =[555,901,482,1771]
let new_arr = []
let count = 0
var findNumbers = function(nums) {
    nums.forEach((val)=>{
        // console.log(typeof val)
        new_arr.push(String(val))
    })

    new_arr.forEach((val)=>{
        console.log(`${val}: ${val.length}`)
        if(val.length % 2 === 0){
            count++
        }

    })
    return count



};

console.log(findNumbers(arr))