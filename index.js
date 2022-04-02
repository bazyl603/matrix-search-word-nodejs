const colors = require('colors');
const os = require('os');

const sleep = require('./src/utils/sleep');
const read = require('./src/utils/consoleInput');
const Data = require('./src/Data');


function fibonacci(num)
{
  var num1=0;
  var num2=1;
  var sum;
  var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
  return num2;
}

//main
(async () => {
  console.clear();
  console.log('Start'.green + " -> " + os.hostname);

  let ArrayOfPhrase = [];

  const numberOfM = await read('number of letters: '.bgCyan);

  let i = 0;
  while(i < numberOfM) {
    const input = await read(`Random string: (max ${numberOfM})`.bgCyan);
    ArrayOfPhrase.push(input);
    i++;
  }  

  console.log('fibbonacci(numberOfM): '.cyan + fibonacci(numberOfM));
  
  const data = new Data(ArrayOfPhrase, numberOfM);

  const word = await read(`search word: (max ${numberOfM})`.bgCyan);

  console.log(data.getData());

  const search = data.patternSearch(word);

  console.log('word: ' + word + ' / ' + search);

  console.log('finish!'.green);

  await sleep(50000);
  console.clear();
  process.exit(1);
})();