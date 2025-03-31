import { describe, test, expect } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    const a = 1;
    const b = 2;
    const result = sum(a, b);
    expect(result).toBe(3);
  });

  test('adds -1 + -2 to equal -3', () => {
    const a = -1;
    const b = -2;
    const result = sum(a, b);
    expect(result).toBe(-3);
  });
});

describe('addArray function', () => {
  test('adds [1, 2, 3] to equal 6', () => {
    const arr = [1, 2, 3];
    const result = addArray(arr);
    expect(result).toBe(6);
  });

  test('adds [-1, -2, -3] to equal -6', () => {
    const arr = [-1, -2, -3];
    const result = addArray(arr);
    expect(result).toBe(-6);
  });

  test('returns 0 for an empty array', () => {
    const arr: number[] = [];
    const result = addArray(arr);
    expect(result).toBe(0);
  });
});
