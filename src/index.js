import numeral from 'numeral';

const courseVal = numeral(500).format('$0.00');
/*eslint-disable no-console*/
console.log(`Not sure I'll be able to afford ${courseVal} for any course!`);