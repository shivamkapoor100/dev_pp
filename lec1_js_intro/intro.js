//console.log("hello world");

// top to down
// left to right

// traditional =>
// Date type => int , char , strring ,double , float , boolean ,big int , long

// Javascript => Number(int , double ,float , big int ,long) ,Boolean(true,false)
//               string,('a' ,"gbkdgdgkgnnx") ,undefined ,Object()

// java and c++ => variables

// Datatype VariableName =Value;
// int a =10;

//ES6 ECMA Script 6
// let =>block scoped variable
// const => block scoped variable

let a=10;
let b=true;
let c=false;
let d=undefined;

//console.log(a)
//console.log(b)
//console.log(c)
//console.log(d)

// variable not defined a value
let e; //takes up undefined
//console.log(e);

if(true)
{
    let f ="i am inside if block"; 
    //console.log(f);
    //console.log(a);
    a =20;
    //console.log(a);

}
//console.log(a);

// const => constant

const pi =3.14; //defined
//pi=30; //reassignment not allowed in constant
//console.log(pi);

// ==(Date type check nhi hota) && ===(Date type bhi check hoga)

//console.log( 10 == '10');

//console.log(10 === '10'); 

// objects => key value pairs 

// let movie ={}; // empty objects

let data = {
    name : "shivam kapoor" ,
    place : "new delhi "
}

//access object keys 
// dot notation (literal check )

//console.log(data.name);
//console.log(data.place);

let key = "name";
//console.log(data.key)  // undifined 

// braket notation 

//console.log( data[key] );    // defined 

data.key ="i am a new value";

//console.log(data);

// key => unique
// value => duplicate

let value = [12, 34, data , "hi i am value"]; // new array is defined

//console.log(value);

let value1 = [12, 34, data , "hi i am value", [1,3,5,4,6]]; // 2d array
//console.log(value1);

//console.log(value1[4][4]);  // to obtain 6 from array

// in loop
for( let key in data){   // it will name of each key present in data
    //console.log(key);
}

