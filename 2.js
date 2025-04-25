
function isprime (a){
    if(a<=1){
        return false;
    }
    for(let i =2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            return false;
        }
    }
    return true;
}
let x=prompt("Enter the value of x");
x=parseInt(x);

    if(isprime(x)){
        alert("prime");

    }
    else{
        alert("not prime");
    }