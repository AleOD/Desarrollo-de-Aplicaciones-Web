var value1 = "", value2 = "";
var op = 0, op_tmp = 0, result = 0;
var textA = document.getElementById("txt");
let flag_1 = 0, flag_2 = 0, flag_res = 0;

function calc(click_id){
    switch(click_id){
        case '0':
            if(flag_1 == 0){                
                value1= value1 + 0;
                textA.value = value1;
            }else{
                value2= value2 + 0;
                textA.value = value2;
            }               
            break;
        case '1':
            if(flag_1 == 0){
                value1= value1 + 1;
                textA.value = value1;
            }else{
                value2= value2 + 1;
                textA.value = value2;
            }
            break;
        case '2':
            if(flag_1 == 0){
                value1= value1 + 2;
                textA.value = value1;
            }else{
                value2= value2 + 2;
                textA.value = value2;
            }
            break;
        case '3':
            if(flag_1 == 0){
                value1= value1 + 3;
                textA.value = value1;
            }else{
                value2= value2 + 3;
                textA.value = value2;
            }
            break;
        case '4':
            if(flag_1 == 0){
                value1= value1 + 4;
                textA.value = value1;
            }else{
                value2= value2 + 4;
                textA.value = value2;
            }
            break;
        case '5':
            if(flag_1 == 0){
                value1= value1 + 5;
                textA.value = value1;
            }else{
                value2= value2 + 5;
                textA.value = value2;
            }
            break;
        case '6':
            if(flag_1 == 0){
                value1= value1 + 6;
                textA.value = value1;
            }else{
                value2= value2 + 6;
                textA.value = value2;
            }
            break;
        case '7':
            if(flag_1 == 0){
                value1= value1 + 7;
                textA.value = value1;
            }else{
                value2= value2 + 7;
                textA.value = value2;
            }
            break;
        case '8':
            if(flag_1 == 0){
                value1= value1 + 8;
                textA.value = value1;
            }else{
                value2= value2 + 8;
                textA.value = value2;
            }
            break;
        case '9':
            if(flag_1 == 0){
                value1= value1 + 9;
                textA.value = value1;
            }else{
                value2= value2 + 9;
                textA.value = value2;
            }
            break;
        case '10':
            if(op == 0){
                op = 1;
                flag_1 = 1;
            }else{
                flag_2 = 1;
                op_tmp = 1;
                calculate();
            }
            break;
        case '11':          
            if(op == 0){
                op = 2;
                flag_1 = 1;
            }else{
                flag_2 = 1;
                op_tmp = 2;
                calculate();
            }
            break;
        case '12':
            if(op == 0){
                op = 3;
                flag_1 = 1;
            }else{
                flag_2 = 1;
                op_tmp = 3;
                calculate();
            }
            break;
        case '13':
            if(op == 0){
                op = 4;
                flag_1 = 1;
            }else{
                flag_2 = 1;
                op_tmp = 4;
                calculate();
            }
            break;
        case '14':
            if(op == 0){
                flag_1 = 1;
                flag_2 = 1;
                op = 5;
                op_tmp = 0;
                calculate();
            }else{
                flag_2 = 1;
                op_tmp = 5;
                calculate();
            }
            break;
        case '15':
            if(op == 0){
                flag_1 = 1;
                flag_2 = 1;
                op = 6;
            }else{
                op_tmp = 6;
                calculate();
            }
            break;
        case '16':
            flag_res = 1;
            calculate();
            break;
        case '17':
            textA.value = "0";
            flag_1 = 0;
            flag_2 = 0;
            flag_tmp = 0;
            flag_res = 0;
            op = 0;
            op_tmp = 0;
            value1 = '';
            value2 = '';
            result = 0;
            break;

        default: break;
    }
}

function calculate(){
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    if(flag_res == 0){
        flag_2 = 0;

        switch(op){
            case 1:
                result = value1 + value2;
                textA.value = result;
                value1 = result;
                value2 = '';
                op = op_tmp;
                break;
            case 2:
                result = value1 - value2;
                textA.value = result;
                value1 = result;
                value2 = '';
                op = op_tmp;
                break;
            case 3:
                result = value1 * value2;               // 2 * 2  4 * 2 
                textA.value = result;
                value1 = result;
                value2 = '';
                op = op_tmp;
                break;
            case 4:
                result = value1 / value2;
                textA.value = result;
                value1 = result;
                value2 = '';
                op = op_tmp;
                break;
            case 5:
                result = Math.pow(value1,2);
                textA.value = result;
                value1 = result;
                value2 = '';
                op = op_tmp;
                break;
            case 6:
                result = Math.sqrt(value1,2);
                textA.value = result;
                value1 = result;
                value2 = '';
                op = op_tmp;
                break;
        }
    }
    else{
        flag_2 = 0;
        flag_res = 0;

        switch(op){
            case 1:
                result = value1 + value2;
                textA.value = result;
                op = 0;
                value1 = '';
                value2 = '';
                value1 = result;
                break;
            case 2:
                result = value1 - value2;
                textA.value = result;
                value1 = result;
                op = 0;
                value1 = '';
                value2 = '';
                value1 = result;
                break;
            case 3:
                result = value1 * value2;
                textA.value = result;
                value1 = result;
                op = 0;
                value1 = '';
                value2 = '';
                value1 = result;
                break;
            case 4:
                result = value1 / value2;
                textA.value = result;
                value1 = result;
                op = 0;
                value1 = '';
                value2 = '';
                value1 = result;
                break;
            case 5:
                result = Math.pow(value1,2);
                textA.value = result;
                op = 0;
                value1 = '';
                value2 = '';
                value1 = result;
                break;
            case 6:
                result = Math.sqrt(value1,2);
                textA.value = result;
                op = 0;
                value1 = '';
                value2 = '';
                value1 = result;
                break;
        } 
    }
}
