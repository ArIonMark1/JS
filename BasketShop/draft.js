// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей»
function initiationScript() {

    let shop_2 = {
        '1key': {id: 'obj1', 
        type: 'some shit', 
        name: 'pipe', 
        price: '500'},

        '2key': {id: 'obj2', 
        type: 'house', 
        name: 'dor', 
        price: '250'},

        '3key': {id: 'obj3', 
        type: 'tourism', 
        name: 'skiing', 
        price: '400'},

        '4key': {id: 'obj4', 
        type: 'kitchen', 
        name: 'dough_rocking_hair', 
        price: '150'},

        '5key': {id: 'obj5', 
        type: 'car', 
        name: 'battery', 
        price: '250'},
    };

    // сгенерировать корзину
        //пустая корзина выводит строку "пустая корзина"
    // код заполнения корзины, добавлять товар и его суму 
        // предложить товар покупателю
        // спросить сколько штук товара он хочет
    // вывести на страницу кол-во товаров и общую сумму
    
    // ================================= //
    // сгенерировать корзину на страничке

    let basket_2 = document.createElement('div');
    basket_2.className = 'basket_2';
    basket_2.innerHTML = 'Корзина пустая';

    
    // ================================= //
    let buttonStart = document.createElement('button');
    buttonStart.className = 'start';
    buttonStart.innerHTML = 'начать закупку';

    buttonStart.onclick = () => {
        return actions(shop_2);
    };

    main_2.appendChild(basket_2);
    main_2.appendChild(buttonStart);
    


    function actions(showcase) {

        // обьект корзины
        const basketObj = new Object();
        // код заполнения корзины, добавлять товар и его суму 
        
        for (let prod in showcase) {
            // предложить товар покупателю
            let userAns = prompt(`
                                        ${showcase[prod]['name']} : ${showcase[prod]['price']}$
        If you like this product please press '+', if not - '-': 
        `);
            // если покупатель согласен купить данный товар
            if (userAns === '+') {
                // спросить сколько штук товара он хочет
                let userQuantity = +prompt(`
                How many things ${showcase[prod]['name']} are you want??
                `);
                // добавляем товар и количество в обьект корзины
                basketObj[prod] = userQuantity;
            };
        };
        // вывести на страницу кол-во товаров и общую сумму
        // console.log(basketObj);
        let total = 0

        for (userProd in basketObj){

            if (userProd in showcase) {
                total += showcase[userProd].price * basketObj[userProd]
            }
        }
        basket_2.innerHTML = `Вы заказали ${Object.keys(basketObj).reduce((total, next) => {return total + basketObj[next]}, 0)} товаров на сумму ${total} денег`;
        buttonStart.innerHTML = 'повторить';
     

    }
    
}
window.onload = initiationScript;

