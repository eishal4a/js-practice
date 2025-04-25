let a=[1,2,3,4,5];
function reverse(arr){
    let raray=[];
    for(let i=arr.length-1;i>=0;i--){
        raray.push(arr[i]);
        }
    
    alert("reverse array is "+raray);
}
reverse (a);