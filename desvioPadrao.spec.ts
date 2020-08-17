import { describe, expect, it } from '@jest/globals';
import { desvioPadrao } from './desvioPadrao';

describe('desvioPadrao', () => {
  it('deve aceitar array', () => {
    expect(desvioPadrao([1, 2, 3, 2, 4, 1])).toEqual(1.1690451944500122);
    expect(desvioPadrao([10, 2, 38, 23, 38, 23, 21])).toEqual(
      13.284434142114991
    );
    expect(desvioPadrao([100, 100, 100.1, 100])).toEqual(0.04999999999999716);
  });

  it('deve aceitar array para toda a população', () => {
    expect(desvioPadrao([10, 2, 38, 23, 38, 23, 21], true)).toEqual(
      12.29899614287479
    );
  });
});
