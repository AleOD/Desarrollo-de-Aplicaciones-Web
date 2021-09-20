var number;
var result;
function ciclo_for(){
    var numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 1;
    for(var i = 1; i <= number; i++){
        result *= i;
    }
    console.log(result);
    document.getElementById("for").innerHTML ='Factorial: '+ result;
}

function ciclo_while(){
    var numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 0;
    var i = 1;
    while(i <= number){
        console.log(1);
        result += i;
        i++;
    }
    console.log(result);
    document.getElementById("while").innerHTML = 'Sum: '+result;
}

function ciclo_do_while(){
    var numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 0;
    var i = 1;
    var avg;
    do{
        console.log(1);
        result += i;
        i++;
    }while(i <= number);
    avg = result/number;
    console.log(avg);
    document.getElementById("do_while").innerHTML = 'Prom: '+avg;
}