// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//

//
let data = [17, 21, 23];
// const InKelvin = function (Cels) {
//   return Cels + 273;
// };
// console.log(InKelvin(100));

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days`;
  }
  return str;
};
console.log(printForecast(data));
