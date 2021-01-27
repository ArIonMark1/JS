const nodes = [
    {
      id: 2,
      text: 'You venture forth in search of answers to where you are when you come across a merchant.',
      options: [
        {
          text: 'Trade the goo for a sword',
          nextText: 3
        },
        {
          text: 'Trade the goo for a shield',
          nextText: 3
        },
        {
          text: 'Ignore the merchant',
          nextText: 3
        }
      ]
    },
    {
      id: 1,
      text: 'You wake up in a strange place and you see a jar of blue goo near you.',
      options: [
        {
          text: 'Take the goo',
          nextText: 2
        },
        {
          text: 'Leave the goo',
          nextText: 2
        }
      ]
    },
    {
      id: 3,
      text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
      options: [
        {
          text: 'Explore the castle',
          nextText: 4
        },
        {
          text: 'Find a room to sleep at in the town',
          nextText: 5
        },
        {
          text: 'Find some hay in a stable to sleep in',
          nextText: 6
        }
      ]
    },
    {
      id: 4,
      text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 5,
      text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 6,
      text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
      options: [
        {
          text: 'Explore the castle',
          nextText: 7
        }
      ]
    },
    {
      id: 7,
      text: 'While exploring the castle you come across a horrible monster in your path.',
      options: [
        {
          text: 'Try to run',
          nextText: 8
        },
        {
          text: 'Attack it with your sword',
          nextText: 9
        },
        {
          text: 'Hide behind your shield',
          nextText: 10
        },
        {
          text: 'Throw the blue goo at it',
          nextText: 11
        }
      ]
    },
    {
      id: 8,
      text: 'Your attempts to run are in vain and the monster easily catches.',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 9,
      text: 'You foolishly thought this monster could be slain with a single sword.',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 10,
      text: 'The monster laughed as you hid behind your shield and ate you.',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 11,
      text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
      options: [
        {
          text: 'Congratulations. Play Again.',
          nextText: -1
        }
      ]
    }
  ];
 
// 1. prompt first question and options/ вывести вопрос и варрианты ответа
// 2. получить nextText id
// 3. показать след вопрос и варрианты
// 4. если nextText == -1  тогда начинаем сначала
// 
const game = {  // обьект game

  textNodes: nodes,
  logList: document.getElementById('id_log'), 

    start() {   // метод обьекта game = start() функция

    //  const firstQuestion = this.textNodes.find((q) => q.id === 1);  // метод find принимает функцию которая возвращает условие по которому найдем текстовый элемент который ищем
      let question = this.textNodes.find((q) => q.id === 1);
    //  let userAnswer = this.makeStep(firstQuestion);  // was not correct name
      let userAnswer = this.makeStep(question) - 1;
//    |
//    |
      // ================================================================================ //
      console.log(typeof +userAnswer);
      console.log(`${question.options[+userAnswer].text} => nextText: ${question.options[+userAnswer].nextText}`);
      console.log(typeof question.options[+userAnswer].nextText);
      // console.log(`${options[+userAnswer].text} => nextText: ${options[+userAnswer].nextText}`)
      // ================================================================================ //
//    |
//    |
      // find correct question by user`s answer

      while (question.options[+userAnswer].nextText !== -1) { // + означает что элемент будет числом ( как +prompt)
        this.log(+userAnswer);

      //  const nextQuestion = this.textNodes.find((q) => q.id === +userAnswer.nextText);
      question = this.textNodes.find((q) => q.id === question.options[+userAnswer].nextText);
        userAnswer = this.makeStep(question) - 1;
        
      }

    },

    makeStep(question) {

      const questionText = `
      ${question.text}

      Answers: 
      ${this.getOptions(question)}
      `;  // вывод вопроса и перечисленных варриантов ответовы

      return prompt(questionText);  // запрос пользователю сделат выбор изначально выведя вопрос и ответы

    },

    getOptions(question) {  //метод который будет просматривать options и будет выводить все доступные варрианты ответов
        let options = '';

        for (let i = 0; i < question.options.length; i++) {   // считает выррианты ответов
            options += `${i + 1}. ${question.options[i].text} \n`;  // записывает все доступные варрианты ответов и нумерацию в новую переменую и возвращает
        }
        return options;
    },

    log(answer) {
      const li = document.createElement('li');
      // TODO: li content
      li.innerHTML = answer + 1;
      // TODO: insert li into list
      this.logList.appendChild(li);

    }

}; 

game.start();   // вызов метода обьекта для зауска игры
  // можно так же создать метод stop() для задания условий остановки игры
