let list = ['10', '15', '20', '30', '35', '40', '45', '50'];

let list2 = [];

/*
    Usando o método map, que percorre o array implementado, que usa uma função
    auxiliada por um parâmetro. Esse parâmetro por sua vez assume valores do
    array que está sendo implementado e cada valor é multiplicado por 2
*/
/*
list2 = list.map(function(item) {
    return item * 2;
});
*/

/*
Usando arrow function
list2 = list.map((item) => {
    return item * 2;
});
*/

/*
Reduzindo mais ainda o arrow function
list2 = list.map(item => {
    return item * 2;
});
*/

/*
    Usando o método de filtragem
*/
list2 = list.filter(function(item) {
    if ( item == 60 ) {
        return true;
    }    
    else {
        return false;
    }
});

let res = list2;

document.getElementById("array").innerHTML = res;