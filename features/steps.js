const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');
const { Greet } = require('../greeter');

When('a greeter says hello', function () {
  this.whatIHeard = new Greet().sayHello();

  console.log(this);
});

Then('I should hear {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
