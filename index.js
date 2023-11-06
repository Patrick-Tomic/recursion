
function fib(n){
    let array = [];
    let first = 0, second = 1, next;
    for(let i =0; i<n;i++){
        array.push(first);
        next = first+second;
        first = second;
        second =next;
    }
    return array;
}
 
function fibrec(n, array,first,second,next,count){
    if(count==n){
        return;
    }
    if(first<=second){
        array.push(first);
    }
    count++;
    next = first+second
    first = second;
  
    second = next;
    return fibrec(n,array,first,second,next,count);
}
let array = [];
let f =0, s = 1, next;
fibrec(8,array,f,s,next,0);
console.log(array);