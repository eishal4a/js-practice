let array=[5,6,7,8];
let a= array[0];
function findLargestElement(arr){
for(let i=1;i<arr.length;i++){
    
    if(arr[i]>a){
        a=arr[i];
    }
}
alert("largest elemnt is : "+a);
}
findLargestElement(array);