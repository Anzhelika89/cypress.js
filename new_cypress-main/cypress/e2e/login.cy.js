describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайти
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка соответсвия текста 
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользоваелю
         
  })

  it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайти
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка кнопки забыли пароль нужного цвета
    cy.get('#forgotEmailButton').click(); // Нажали кнопку забыли пароль
    cy.get('#mailForgot').type('lika.sydarkina@yandex.ru'); // Ввели адрес эл.почты
    cy.get('#restoreEmailButton').click(); //  Нажали кнопку отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверили соответсвие текста 
    cy.get('#messageHeader').should('be.visible'); // Проверили что надпись видна пользователю 
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользоваелю
})

it('Верный пароль и НЕверный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайти
    cy.get('#mail').type('germaaan@dolnikov.ru'); // Ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажали кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка соответсвия текста 
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользоваелю   
})


it('НЕверный пароль и верный логин', function () {
    cy.visit('/'); // Зашли на сайти
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio9'); // Ввели неверный пароль
    cy.get('#loginButton').click(); // Нажали кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка соответсвия текста 
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользоваелю
    
})



it('Верный пароль и НЕверный логин без @', function () {
    cy.visit('/'); // Зашли на сайти
    cy.get('#mail').type('germandolnikov.ru'); // Ввели неверный логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажали кнопку войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка соответсвия текста 
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользоваелю
    
})

it('Строчные буквы в логине', function () {
    cy.visit('/'); // Зашли на сайти
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели неверный логин со строчными и большими буквами
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажали кнопку войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка соответсвия текста 
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользоваелю
    
})
})






describe('Покупка аватара', function () {                                  // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {    // название теста
         cy.visit('https://pokemonbattle.ru/');                                                   // переходим на сайт 
         cy.get('input[type="email"]').type('USER_LOGIN');  // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('2200150964608225');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('lika sydar');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     })
 })

 
       