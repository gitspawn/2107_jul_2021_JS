// Говнокод!

let cases = 15000

cases > 10000
  ? console.log('red zone')
  : cases > 5000 && cases < 10000
  ? console.log('yellow zone')
  : console.log('green zone')
