let i=0;
while(i<=10)
{
    console.log(i);
    i++;
}

// write a js program to print all the  even number
// write a js prog. to print sum of digits 
//write a js prog. to check given no. is palindrom or not 
// write a js program to check given no is  armstrong number or not 


function printEvenNumbers(max) {
    for (let i = 1; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
let max = 100;
printEvenNumbers(max);

//sum of digits
let a=54328;
let sum=0;
while(a!=0){
    let rem =a%10;
    sum=sum+ rem;
    a=parseInt(a/10)
}
console.log(sum);