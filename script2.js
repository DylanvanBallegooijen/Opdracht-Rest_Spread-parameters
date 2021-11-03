const sum = function (...numbers){
    return numbers.reduce((acc,item) => {
        return acc + item;
    })
} 
console.log (sum(1,2,3,4,5,6));

