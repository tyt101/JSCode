const arr = [40,2,5,94,2,0,55]

let len = arr.length

function quickSort(nums,start,end){
    if(start > end)return
    const middle = getPivot(nums,start,end)
    quickSort(nums,start,middle-1)
    quickSort(nums,middle + 1,end)
    return nums
}

function getPivot(nums,start,end){
    let pivot = nums[start]
    let left = start + 1
    let right = end
    while(left < right){
        while(nums[left] < pivot && left < right) left++
        while(nums[right] > pivot && left < right) right--
        if(left < right){
            swap(nums,left,right)
            left++
            right--
        }
    }
    if(left === right && nums[right] > pivot) right--
    swap(nums,start,right)
    return right
}

function swap(nums,a,b){
    let temp = nums[a] + nums[b]
    nums[a] = temp - nums[a]
    nums[b] = temp - nums[b]
}

const numss = quickSort(arr,0,arr.length-1)
console.log(numss)