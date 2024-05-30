//DESESTRUCTURACIÓN - DTO

let array = ["a", "b", ["KATHE", "PR"], "d", "e", "f"];
let [,,,dato4] = array;
let = [,,[nombre1] = nombres,dato4] = array
console.log(dato4)


let array2 = [
    "a",
    "b",
    ["Kathe", ["Pi", "Ri"]],
    "d",
    "e",
    "f"
];

let [
    ,
    ,
    [,
        [,apellido2] = apellidos

    ]=nombres
    ,
    ,
    ,
] = array2

console.log(apellido2)




let array3 = [
    "a",
    "b",
    ["Kathe", ["Pi", "Ri"]],
    "d",
    "e",
    "f"
];

let getName =(dato1,dato2,[nombre, [apellido1, apellido2]])=>{
    console.log(nombre)
    console.group(apellido1)
    console.group(apellido2)
}

getName(...array3)
