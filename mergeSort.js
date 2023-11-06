 
 
function merge(left,right){
    let sortedArr = [];
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr,...left,...right];

}
 
function mergeSort(array){
    if(array.length<=1) return array;

    let middle = Math.floor(array.length/2)

    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))

    return merge(left,right);
}
 
console.log(mergeSort([5,1,3,7,9,22,11])); 