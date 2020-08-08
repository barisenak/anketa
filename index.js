function getAnketa() {
  let anketa = true;
  const surname = prompt("Введите вашу фамилию");

  if (!surname) {
    alert("Строка пуста");
    return getAnketa()
  };

  const name = prompt("Введите ваше имя");

  if (!name) {
    alert("Строка пуста");
  return getAnketa()
  };

  const patronymic = prompt("Введите ваше отчество");

  if (!patronymic) {
    alert("Строка пуста");
  return getAnketa()
  };

  const age = Number(prompt("Укажите ваш возраст (полных лет)"));

  if (!age) {
    alert("Строка пуста или вы ввели не числовое значение");
  return getAnketa()
  };

  const isMan = confirm("Вы мужчина?");
  const ageInDays = age * 365;
  const ageAfter5years = age + 5;
  let sex = null;
  let pension = null;

  if (isMan) {
    sex = "мужчина";
  } else {
    sex = "женщина";
  };
  
  if ((isMan && age >= 62) || (!isMan && age >= 57)) {
    pension = "на пенсии";
  } else {
    pension = "не на пенсии";
  };
  
  if (anketa) {

  } alert(`
  Ваше ФИО ${surname} ${name} ${patronymic}, 
  Ваш возраст ${age} лет, 
  Ваш возраст в днях ${ageInDays} дней, 
  Через 5 лет вам будет ${ageAfter5years} лет, 
  Вы ${sex}, 
  Вы ${pension}`);
}

getAnketa()
