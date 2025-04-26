let array=[1,2,2,3,4,4,5];
alert(array);
let a=[];
for(let i=1;i<array.length;i++){
    
    if(!a.includes(array[i])){
        a.push(array);
    }
}
alert(a);