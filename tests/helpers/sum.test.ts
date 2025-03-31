import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add sum of functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Prepara
    const a = 1;
    const b = 2;

    // Estímulo
    const result = sum(a, b);

    // Esperado
    expect(result).toBe(a + b);
  });

  test('adds -1 + -2 to equal -3', () => {
    // Prepara
    const a = -1;
    const b = -2;

    // Estímulo
    const result = sum(a, b);

    // Esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray sum of functions', () => {
  test('adds [1, 2, 3] to equal 6', () => {
    // Prepara
    const a = [1, 2, 3];

    // Estímulo
    const result = addArray(a);

    // Esperado
    expect(result).toBe(6);
  });

  test('adds [-1, -2, -3] to equal -6', () => {
    // Prepara
    const a = [-1, -2, -3];

    // Estímulo
    const result = addArray(a);

    // Esperado
    expect(result).toBe(-6);
  });

  test('should return 0 for an empty array', () => {
    // Prepara
    const a: number[] = [];

    // Estímulo
    const result = addArray(a);

    // Esperado
    expect(result).toBe(0);
  });
});
