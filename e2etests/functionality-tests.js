/* global browser, it, describe */

const expect = require('chai').expect;

describe('Todo List App Functionality tests', () => {
  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing';

    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');

    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });
});
