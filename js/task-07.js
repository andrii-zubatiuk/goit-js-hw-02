const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const a = false;

const isLoginValid = function(login) {
  const loginLength = login.length;
  return loginLength >= 4 && loginLength <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login) === false;
};

const addLogin = function(allLogins, login) {
  let loginValid = isLoginValid(login);

  // НИЖЕ ПОПРОБОВАЛ СДЕЛАТЬ С ПОМОЩЬЮ GUARD CLAUSE

  if (loginValid !== true) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  loginValid = isLoginUnique(allLogins, login);

  if (loginValid === false) {
    return 'Такой логин уже используется!';
  }
  logins.push(login);
  return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins); // Вывод обновленного массива
