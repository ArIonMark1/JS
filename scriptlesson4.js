// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numbObj = num => {
    if (String(num).length > 3) {
        return "************Number is bigger than 999!!************";

    } else {

        const objElem = {
            единицы: "",
            десятки: "",
            сотни: ""
        };
        
        for (key in objElem) {
            if (objElem.hasOwnProperty(key)){
                objElem[key] = num % 10;
                num = parseInt(num / 10); 
            }; 
        };
        return objElem;
    };   
};   

// let userNumb = +prompt("enter number: ");
let userNumb = 72;
console.log(numbObj(userNumb));



