const sinon = require('sinon');
const { assert } = require('chai');

function writeCards(names, gift) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  })

  afterEach(() => {
    spy.restore();
  })