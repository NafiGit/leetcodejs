let nums = [-6,-1,-1,9,-8,-6,-6,4,4,-3,-8,-1];

console.log(nums);

if (nums.length === 0) {
    console.log(0);
} 

let num_set = new Set(nums);

console.log(num_set);


for (let i=0; i<nums.length; i++){

}

nums.sort((a, b) => a - b);
console.log(nums)

nums = Array.from(new Set(nums));

console.log(nums)


let streak = 0;
let maxstreak =1;

for (let i = 1; i<nums.length; i++ ){
    console.log(nums[i]);
    if (nums[i] == nums[i-1] + 1) {
        streak++;
        if (streak >= maxstreak) {
            maxstreak = streak + 1;
        }
    } else {
        streak = 0;
    }
}

console.log(maxstreak)

