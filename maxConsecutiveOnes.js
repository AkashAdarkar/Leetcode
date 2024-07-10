nums = [1,0,1,1,0,1]

var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let max_count = 0

   nums.forEach((val)=>{
    if(val === 0){
        count  = 0
    }else if(val === 1 ){
        count ++
        if(max_count < count){
            max_count = count
        }
    }


   })
   return max_count

}

console.log(findMaxConsecutiveOnes(nums))
