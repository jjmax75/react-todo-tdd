/* global browser, it, describe */

const expect = require('chai').expect;

describe('Todo List App Layout tests', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });
});
