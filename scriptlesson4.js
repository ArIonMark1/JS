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

// 2. Создал массив-магазин с обьектами-товарами, посде код предлагает выбрать товар и добавляет его в корзину если ответ положительный, после подщитывает стоимость,
// выбор количества товара не реализован

let shop_2 = [
    {id: 'obj1', type: 'some shit', name: 'pipe', price: '500'},
    {id: 'obj2', type: 'house', name: 'dor', price: '250'},
    {id: 'obj3', type: 'tourism', name: 'skiing', price: '400'},
    {id: 'obj4', type: 'kitchen', name: 'dough rocking hair', price: '150'},
    {id: 'obj5', type: 'car', name: 'battery', price: '250'},
];

let basket_2 = [];

function counter(showcase) {

    // если товар в магазине - предложить покупателю
    for (let product in showcase) {
        alert(` ${showcase[product]['name']} : ${showcase[product]['price']} $`);

        let userAns = prompt("If you like this product please press '+', if not - '-': ")
        // если ползовател подтвердит: +
        // добавить в корзину
        if (userAns === '+') basket_2.push(showcase[product]);
        // если ползовател: -
        //пропустить товар
        else continue

    };

    // когда товар весь был предложен, закончить вывод и начать подщет стоимости
    //console.log(basket_2[0].price);

    let totalSum = basket_2.reduce((total, nextPrice) => parseInt(total) + parseInt(nextPrice.price), 0);
    
    // вывод имени всех товаров в корзине и их стоимости 
    for (i in basket_2) {
        console.log(`${basket_2[i]['name']}:  ${basket_2[i]['price']}`);
    }
    return totalSum;
    
}
console.log(counter(shop_2));


