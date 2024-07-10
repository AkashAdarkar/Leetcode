
arr=[-7,-3,2,3,11]


var sortedSquares = function(nums) {
    let new_arr=[]
    nums.forEach((val)=>{
new_arr.push(Math.pow(val,2))
    })

    return new_arr.sort((a,b)=>{return (a-b)})
    

    


};

console.log(sortedSquares(arr));