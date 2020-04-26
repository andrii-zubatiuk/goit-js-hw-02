const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);

// НИЖЕ ВАРИАНТ С ИСПОЛЬЗОВАНИЕМ СТРЕЛОЧНОЙ ФУНКЦИИ

// const calculateEngravingPrice = (message, pricePerWord) =>
//   message.split(' ').length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );
