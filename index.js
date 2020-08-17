function getAnketa() {
  const surname = prompt("Введите вашу фамилию");

  if (!surname) {
    alert("Строка пуста");
    return getAnketa();
  };

  const name = prompt("Введите ваше имя");

  if (!name) {
    alert("Строка пуста");
  return getAnketa()
  };

  const patronymic = prompt("Введите ваше отчество");

  if (!patronymic) {
    alert("Строка пуста, начни заново!");
  return getAnketa()
  };

  const age = Number(prompt("Укажите ваш возраст (полных лет)"));

  if (!age) {
    alert("Строка пуста или вы ввели не числовое значение, начни заново!");
  return getAnketa()
  };

  const isMan = confirm("Вы мужчина?");
  let pension = null;

  let sex = isMan ? "мужчина" : "женщина";
  
  if ((isMan && age >= 62) || (!isMan && age >= 57)) {
    pension = "на пенсии";
  } else {
    pension = "не на пенсии";
  };

  alert(`
  Ваше ФИО ${surname} ${name} ${patronymic}, 
  Ваш возраст ${age} лет, 
  Ваш возраст в днях ${age*365} дней, 
  Через 5 лет вам будет ${age+5} лет, 
  Вы ${sex}, 
  Вы ${pension}`);
}

getAnketa()
