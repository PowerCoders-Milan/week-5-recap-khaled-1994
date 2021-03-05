/*The test results are in but the machine did a mess. <br> The array one should be the names and the array two should be the scores.

Create a function that combines the two arrays together and creates an object with key and value pair like this => name: score.

The two arrays are mixed, but their order is correct.

Use all the strings elements as keys and the number elements as values to create the "score" object.

Once you created the score object print it to the console.

Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]*/
var Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];
var Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];
function myArray(){
    console.log(Array1.sort() + Array2.sort());}
    var result = {student : {
    stud1 :{name :"marco" ,degree : 13},
    stud2 :{ name: "luca", degree : 21},
    stud3 :{ name: "antonio", degree : 18},
    stud4 :{ name: "sebastian", degree : 19},
    stud5:{name: "will",degree : 23},
    stud6 :{name: "leo" , degree : 20},
    stud7 :{name: "mary" , degree : 12}
    
    }}
    for ( let myRes in result.student){
        console.log(`${myRes}: ${result.student[myRes].name}: ${result.student[myRes].degree}`)
      };
      myArray();