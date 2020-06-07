/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let compliments = new Map()
    for (let i = 0; i < nums.length; i++){
        let compliment = target - nums[i]
        if(compliments.has(compliment)){
            return ([compliments.get(compliment),i])
        }else{
            compliments.set(nums[i],i)
        }
    }
    return -1
}; 