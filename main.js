// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. 
// Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.

// 9 купе шестимісних, усього місць 9 * 6 = 54;
// непарні числа – це нижні полиці, а парні – верхні;
// купе від 1 до 36, бокові місця від 37 по 54 = 18 місць
// дізнатись яке купе (якщо номер до 36) потрібно №місця / 4 - округлення до більшого;
// (якщо номер від 36 до 54) тоді (10 - (№ місця - 36) / 2). - округлення до меншого;
//  тип місця - 1-36 - купе, 37-54 бічне.

const form = document.forms["ticketForm"];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const numberInput = document.getElementById("number");
  const ticketNumber = numberInput.value;

  function checkTicketNumber(num) {
    return num >= 1 && num <= 54;
  }

  function calculateFormula(num) {
    let result;
    if (num >= 1 && num <= 36) {
      result = Math.ceil(num / 4);
    } else if (num >= 37 && num <= 54) {
      result = Math.floor(10 - ((num - 36) / 2));
    } else {
      result = "Неправильне значення квитка";
    }
    return result;
  }

  function getTicketMessage(ticketNumber, formulaResult) {
    let message = "Ваше купе # " + formulaResult + ". ";
    if (ticketNumber >= 1 && ticketNumber <= 36) {
      message += "Розміщення - купе. ";
    } else if (ticketNumber >= 37 && ticketNumber <= 54) {
      message += "Розміщення - бокове. ";
    }
    if (ticketNumber % 2 === 0) {
      message += "Верхнє місце.";
    } else {
      message += "Нижнє місце.";
    }
    return message;
  }

  if (checkTicketNumber(ticketNumber)) {
    const formulaResult = calculateFormula(ticketNumber);
    const ticketMessage = getTicketMessage(ticketNumber, formulaResult);
    console.log(ticketMessage);

    const outputElement = document.getElementById("ticketMessageOutput");
    outputElement.innerHTML = ticketMessage;
  } else {
    alert("Перевірте будь ласка свій квиток, кількість місць у вагоні 54!");
  }
});

