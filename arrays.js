const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
const names = ['Jay', 'Daniela', 'Pablo'];

//Spread Operator (copy values)
const values = [...names, ...numbers, 'Oli', 69 ];
console.log(values);

const mutant = {
    name: 'Xavier',
    power: 'Telep',
    rank: 5
}

const mutant2 = {...mutant, name: 'Javier'}



//Iterations

for(let i=0; i< names.length; i++ ){
    if(i==1){
        break;
    }
    //console.log( names[i] );
}


//Function definition
function logItems(item, index, arregloOriginal){
    console.log(`Name ${item} at index: ${index}`);
    console.log(arregloOriginal)
}
//Function variable definition
const myFunction = function(name){
    console.log('oliii' + name)
}
//Arrow Function definition
const sum = (a, b) => {
    const value = a + b;
    return value;
}
//Arrow function implicit return
const resta = (a, b) => a - b;

const fullNames = [];

const output = names.forEach(item => fullNames.push(item + ' Rodríguez') );
console.log(output);

const output2 = names.map( item => item+' Rodriguez' )
console.log(output2);







