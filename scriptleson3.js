// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function elementaryNumbers(n) {
    let k = 2;
    const qNum = Math.sqrt(n);

    while ( k <= qNum) {
        if ( n % k++ < 1) return false; 
    }
    return true
    // Если же при делении обнаруживались только ненулевые остатки, значит, число простое; в этом случае выводим его на экран
}

function ShowPrime(n) {
    let arrPrime = [];
    let i = 2;

    while (i <= n-1) {
        if (i == 2) {
            arrPrime.push(i++);
        }
        else if (!elementaryNumbers(++i)) continue;
        arrPrime.push(i);
    }
    return arrPrime;
}
let userNum = +prompt("Number: ");
console.log(ShowPrime(userNum));

// 2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

//норм варриант
// иммитация магазина
let shop = [
    {id: 'obj1', type: 'some shit', name: 'pipe', price: '500'},
    {id: 'obj2', type: 'house', name: 'dor', price: '250'},
    {id: 'obj3', type: 'tourism', name: 'skiing', price: '400'},
    {id: 'obj4', type: 'kitchen', name: 'dough rocking hair', price: '150'},
    {id: 'obj5', type: 'car', name: 'battery', price: '250'},
];
// корзина
let basket = [shop[0], shop[0], shop[2], shop[3], shop[2]];

// 
const sumElem = basket.reduce((total, amount) => parseInt( total) + parseInt(amount.price), 0);

console.log(`Общая сумма покупок: ${sumElem} юаней`)
// // ф-ция вычисления общей суммы
// function totSum(b) {

//     let sumPrice = null;

//     // с помощью цика проходимся по всем обьектам корзины
//     for (let i = 0; i< b.length; i++) {
        
//         // присунируем в переменную каждую последующую цену товара
//         sumPrice += parseInt(b[i].price);
//     }
//     return sumPrice;
// }
// вывод в консоль!
// console.log(`Общая сумма покупок: ${totSum(basket)} юаней`);


// !! варриант ввода пользователем нaименования товара и его стоимости, иммитация добавления товара в корзину с подсчетом общей стоимости

let userProd = isNaN;
let userPrice = isNaN;

const bascet = new Map();
let totPrice = null;

do {
    
    userProd = prompt("Enter product: ");

    if (userProd == 0) {
        alert("finished");
        break;
    }
    userPrice = +prompt("Enter price: ");

    bascet.set(userProd, userPrice);

} while(userProd && userPrice);

console.log(`Bсе ваши заказы:`);

for (let [key, val] of bascet) {
    console.log(`товар: ${key} => стоимость : ${val}`);
    totPrice += val; 
}

console.log(`Total: ${totPrice}`);
console.log('-------------------');
// alert(`Total price: ${totPrice}`);
/* ------------------------------------ */

// 2 вариант, предложение товара на выбор с добавлением в корзину и подсчетом общей стоимости

// 3. Товары в корзине должны храниться в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

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

/*
----------------------------------------------------------------------------
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/
for (let i=0; i<10; console.log(i++)){};
/*
----------------------------------------------------------------------------
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

for (let i = 1; i <= 20; i++ ) {
    console.log('*'.repeat(i), '\n');
    if (i == 10) {
        for (let k = i; k > 0; k--)
        console.log('*'.repeat(k), '\n');
    }
    
};
