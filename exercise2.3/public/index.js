
var phoneBook = {}; // Объект для хранения телефонной книги

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
 module.exports = function (command) {
  // Получаю название команды из входного выражения  
    var arr = command.split(' ');
    var commandName = arr[0];
 
  // Обработка команды ADD
  if (commandName === 'ADD') {
    var phones = arr[2].split(','); // получила список телефонов из команды, сохраняем в массив
    var contact = arr[1];

    if (!phoneBook.hasOwnProperty(contact)) { // проверяем есть ли уже такой контакт в книге
      phoneBook[contact] = arr[2];  // добавила значения телефонов к новому ключу
    } else {
        var contactPhones = phoneBook[contact].split(','); // строку с телефонами парсим и сохраняем в массив
          for (i = 0; i < phones.length; i++) {
              contactPhones.push(phones[i]);
          }
        var contactPhonesList = contactPhones.join(','); // из нового массива телефонов делаем строку
        phoneBook[contact] = contactPhonesList; // обновляю значение для ключа phoneBook[contact]
    }
     return;
  }

 // Обработка команды REMOVE_PHONE 
  if (commandName === 'REMOVE_PHONE') {
   
    for (var key in phoneBook) {

        var contactPhones1 = phoneBook[key].split(','); // получаем массив телефонов

        var a = contactPhones1.indexOf(arr[1]);
        if (a != -1) {
            contactPhones1.splice(a, 1);
            if (contactPhones1.length > 0) {
                var contactPhonesList1; 
                contactPhonesList1 = contactPhones1.join(',');
                phoneBook[key] = contactPhonesList1;                    // обновить значение телефонов контакта
            } else {
                delete phoneBook[key];
            }

            return true;
        }
    }

    return false;
 }
  

  // Обработка команды SHOW
if (commandName === 'SHOW') {
    
    var phoneBookList = []; // Массив для хранения книги

    for (var key in phoneBook) { 
        var contactPhones = []; 
        contactPhones = phoneBook[key].split(',') // получаю массив телефонов у каждого ключа
     var phonesListString = contactPhones.join(', '); 
     var contactWithPhones = key + ': ' + phonesListString;
     phoneBookList.push(contactWithPhones);   
}
   // phoneBookList.sort();
        //console.log(phoneBookList);
       return phoneBookList.sort();
  } 


};
