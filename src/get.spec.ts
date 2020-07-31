import { describe, expect, it } from '@jest/globals';
import { get } from './get';

describe('get', () => {
  it('returns a deeply nested value', () => {
    const a = get(
      {
        colors: {
          blue: ['#0cf', '#0be', '#09d', '#07c'],
        },
      },
      'colors.blue.3'
    );
    expect(a).toBe('#07c');
  });

  it('supports fallback values', () => {
    const a = get({}, 'hi', 'nope');
    expect(a).toBe('nope');
  });

  it('handles number values', () => {
    const a = get([1, 2, 3], 0);
    expect(a).toBe(1);
  });

  it('handles undefined values', () => {
    const a = get({}, undefined);
    expect(a).toBe(undefined);
  });

  it('handles null values', () => {
    const a = get({}, null);
    expect(a).toBe(undefined);
  });

  it('returns 0 index items', () => {
    const a = get(['a', 'b', 'c'], 0);
    expect(a).toBe('a');
  });
});
