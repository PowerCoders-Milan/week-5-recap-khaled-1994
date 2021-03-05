var array = [ 12, 'as', 'as',21 ,4,21];
var array1 = ['tq','as', 4, 3, 8];
let nub = 0 ;
let strin = 0 ;
function myArray(){
   for (var a of array) {
     if (Number.isInteger(a)){
            nub++;
        } else {
            strin++;
        }}
    console.log('the number : ' + nub);
    console.log('the string : ' + strin);
}
myArray();

