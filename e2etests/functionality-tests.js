/* global browser, it, describe */

const expect = require('chai').expect;

const todoText = 'Get better at testing';

describe('Todo List App Functionality tests', () => {
  it('Should allow me to create a Todo', () => {
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');

    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delete a Todo', () => {
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');

    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete last deleted Todo', () => {
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');

    const actualDeleted = browser.element('.todo-text');
    expect(actualDeleted.state).to.equal('failure');

    browser.click('.todo-undelete');

    const actualUndeleted = browser.element('.todo-text');
    expect(actualUndeleted).to.equal(todoText);
  });
});
