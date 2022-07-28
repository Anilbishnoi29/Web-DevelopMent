'use strict';
let names = ['Luke','Raj','Book','Cat'];
console.log('Original names arrays : ',names);

// slipce
console.log('splice');
const removedName = names.splice(0,1,'Apple');
console.log('Removed element : ',removedName);
console.log('after splice names arrays : ',names);
