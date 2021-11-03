function sum (...numbers){
    return numbers.reduce((prev,current) => prev + current)
    
};

console.log(sum(1,2,3));

function sum(x,y){
    return x + y;
}
let nums = [1,2];
console.log (sum(...nums));