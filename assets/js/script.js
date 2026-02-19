const buttonAlert = document.querySelector(".btn-5")
buttonAlert.addEventListener("click", () => {
    alert("тут оно выбирает только лишь одну кнопку,даже если их много,оно просто выберет самую первую которая была указана в коде")
})


const buttonInteractive = document.querySelectorAll(".btn-2")
buttonInteractive.forEach(button => {
    button.addEventListener("click", () => {
        alert("Тут оно выбирает все классы с этим названием в коде,и делает")
    })
});

const buttonMessage = document.querySelectorAll(".btn-3")
buttonMessage.forEach(button => {
    button.addEventListener("click", () => {
        alert(
            "тут я просто шалю"
        )
    })
});

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.unshift("учи")//тут мы добавили в начале массива "string"
// arr.push("уроки")//тут я поставил в самом конце массива "string"
// delete arr[2]//тут мы просто удалили второй объект из массива,удалилась 2,т.к счет идет от 0,а 0 у нас "учи"
// console.log(arr)

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]// массив из чисел
// arr.splice(0,0,"я")// тут мы указали что после 0 строки,удалить 0 объектов и поставить "string"
// arr.splice(13,0,"долбоеб")//тут мы указали что после 13 строки,удали 0 объектов,и вставь "string"
// console.log (arr)

// const arr = ["я", "изучаю", "JavaSript", "прямо", "сейчас"]
// const removed =arr.splice (0,2)//тут мы указали что надо удалить после 0 числа/строки 2 оъекта,и вывели в консоль это
// console.log(removed)

// const arr = ["Я","изучаю","JavaScript"]
// arr.splice(2,0,"сложный","язык") //тут мы указали что после объекта 2 удали 0 объектов,и добавь "string","string"
// console.log(arr)

//const arr = [1, 2, 5]
//arr.splice(-1,0,3,4) //тут мы поставили перед последним элементом,последний элемент у нас 5 удали 0 объектов,и поставь туда 3,4
//console.log(arr)

// const arr = ["t","e","s","t"]
// alert( arr.slice(1, 3) )
// alert( arr.slice(-2) )
// console.log(arr)

// const arr = ["t", "e", "s", "t"]
// console.log(arr.slice(1, 3))//тут мы указали взят ему объект начиная с 1 и заканивая 3 а это у нас буквы e,s и их вывсети
// console.log(arr.slice(-2))//а тут мы указали взять -2 объекта,а это получается s,t и вывести т.к у нас тут минус считет массив с конца
// //он взял последние 2 объекта

// const user = ["ma", "ga", "fu", "ck", "as"]
// const online = user.slice(2, 4)//тут мы сказали взять 2 объекта,а именно 3 и 4 строку,и скопировать их
// console.log(online)
// const userOnline = online //а тут мы указли что мы скопировали,и вставили их сюда,а взяли мы это значение из переменноц online
// console.log(userOnline)

// const arr1 = [1,2] 
// const arr2 = [3,4]
// const result = arr1.concat(arr2) //тут мы склеиваем как бы их вместе,То есть оно берет массив arr2 и приклеивает как бы к arr1
//при это оно создает новый массив данных,не трогая старый,хз зачем такое можно юзать
// console.log(result)

// const arr1 = [1,2]
// const arr2 = [3]
//const result = arr1.concat(arr2)//тут я показал как можно указать все это только с одним числом использую переменую
//const result = arr1.concat(3)// или использую просто цифру или же строку в ""
// console.log (result)

//["Бильбо", "Гэндальф", "Назгул"].forEach(console.log);//тут оно получается перебирает массив с помощью forEach
//и выводит его в консоль постепенно по каждой строке,мне не сильно это понятно пока,тяжело объяснили

// const fruits = ["Яблоко","Апельсин","Мандарин"]
// fruits.forEach(function(fruit) {
//     console.log("Я люблю " + fruit)
// })// тут оно получается перебирает полностью массив,и выводит мне его в консоль по очереди
//объясни мне пожалуйста за это forEach подробнее,ибо гпт и дипсак не может нормально это сделать


