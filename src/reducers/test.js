/* global it, expect, describe */

import types from './../constants';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A Todo';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
        lastDeletedTodo: undefined,
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Delete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      const action = {
        type: types.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [],
        lastDeletedTodo: {
          id: 1,
          text: todoText,
        },
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Undelete Todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [],
        lastDeletedTodo: {
          id: 1,
          text: todoText,
        },
      };

      const action = {
        type: types.UNDELETE_TODO,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
        lastDeletedTodo: undefined,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
