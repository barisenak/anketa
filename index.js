let surname = prompt ("Введите вашу фамилию");
let name = prompt ("Введите ваше имя");
let patronymic = prompt ("Введите ваше отчество");
let age = Number(prompt ("Укажите ваш возраст (полных лет)"));
let isMan = confirm ("Вы мужчина?");

if (isMan) {
    sex = "мужчина";
} else {
    sex = "женщина";
};

let ageInDays = age * 365;

let ageAfter5years = age + 5;

if ((isMan === true && age >= 62) || (isMan === !true && age >= 57)) {
    pension = "на пенсии"}
else {
    pension = "не на пенсии"
};

//  && age === Number не работает, не смогла понять, почему

if (surname != "" && name != "" && patronymic != "" && age !="" ){
    alert (`
    Ваше ФИО ${surname} ${name} ${patronymic}, 
    Ваш возраст ${age} лет, 
    Ваш возраст в днях ${ageInDays} дней, 
    Через 5 лет вам будет ${ageAfter5years} лет, 
    Вы ${sex}, 
    Вы ${pension}`);
} else {    
    confirm ("Перезагрузите страницу и заполните верно все поля")
};

    



