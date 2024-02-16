let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let informa = document.querySelector('.h')
let answer_user = document.querySelector('.j')
let start_button = document.querySelector('.button2')
let div_quest = document.querySelector('.main')
let div_start = document.querySelector('.start')


let schetchik = 0
let true_user_ans = 0
start_button.addEventListener('click', function () {
    div_quest.style.display = 'flex'
    div_start.style.display = 'none'
    setTimeout(function (){
    let pro_inf = +true_user_ans * 100
    pro_inf = +pro_inf  / +schetchik
    pro_inf = Math.round(pro_inf)
    informa.innerHTML = `Вы дали ${true_user_ans} правильных ответов из ${schetchik}.
Точность - ${pro_inf}%`
    div_quest.style.display = 'none'
    div_start.style.display = 'flex'
    schetchik = 0
    true_user_ans = 0
}, 10000)
}
)
function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
let sign = ['+', '-', '*', '/']
function getRandomSign() {
    return sign[randint(0, 3)]
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) { // Цикл повторяется до тех пор, пока остаются элементы для перемешивания
    randomIndex = Math.floor(Math.random() * currentIndex); // Выбираем оставшийся элемент.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [    // Меняем местами с текущим элементом.
      array[randomIndex], array[currentIndex]];
  }
  return array; // Возвращаем перемешанный массив
}

function whi(answers_t) {
    answers_t.style.backgroundColor = "white"
}


class Question {
   constructor() {
        let a = randint(1, 30)
        let b = randint(1, 30)
        let sign_this = getRandomSign()
        if (sign_this == '+') {
           this.correct = Math.round(a + b)
        }
        else if (sign_this == '-') {
            this.correct = Math.round(a - b)
        }
        else if (sign_this == '*') {
            this.correct = Math.round(a * b)
        }
        else if (sign_this == '/') {
            this.correct = Math.round(a / b)
        }
        this.question = `${a}${sign_this}${b}`
       this.answer1 = Math.round(randint(this.correct - 15, this.correct - 1))
       this.answer2 = Math.round(randint(this.correct - 15, this.correct - 1))
       this.answer4 = Math.round(randint(this.correct - 15, this.correct - 1))
       this.answer5 = Math.round(randint(this.correct - 15, this.correct - 1))
       this.list_answer = [this.answer1, this.answer2, this.correct, this.answer4, this.answer5]
       shuffle(this.list_answer)
   }
    
    display() {
        question.innerHTML = this.question
        for (let i = 0; i < this.list_answer.length; i += 1) {
            answers[i].innerHTML = this.list_answer[i]
        }
   }
}
let this_quest = new Question
this_quest.display()
let stop = false
for (let i=0; i < answers.length; i += 1) {
    answers[i].addEventListener('click', function () {
        if (answers[i].innerHTML == this_quest.correct) {
            answer_user.innerHTML = 'Правильный овет'
            answers[i].style.backgroundColor = '#fffff'
            anime({
                targets: answers[i],
                backgroundColor: "#7EEF3C",
                direction: 'alternate',
                easing: 'easeInOutQuad',
                duration: 200,
            });
            answers[i].style.backgroundColor = '#fffff'
            true_user_ans += 1
            //answers[i].style.backgroundColor = "white"

            //setTimeout(whi(answers[i]), 500);

        }
        else {
            answer_user.innerHTML = `Неправильно. Правильно: ${this_quest.correct}`
            answers[i].style.backgroundColor = '#fffff'
            anime({
                targets: answers[i],
                backgroundColor: "#FF0700",
                direction: 'alternate',
                easing: 'easeInOutQuad',
                duration: 200,
            });
            answers[i].style.backgroundColor = '#fffff'
            //answers[i].style.backgroundColor = "white"
            //setTimeout(whi(answers[i]), 500);
        }
        schetchik += 1
        this_quest = new Question
        this_quest.display()
    })
}
