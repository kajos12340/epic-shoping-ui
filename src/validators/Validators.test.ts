import * as Validators from './index';

describe('validators', () => {
  it('should validate required', () => {
    const invalidText = 'Pole jest wymagane!';
    expect(Validators.required('')).toBe(invalidText);
    expect(Validators.required(false)).toBe(invalidText);
    expect(Validators.required('value')).toBe('');
  });

  it('should validate number', () => {
    const invalidText = 'Pole przyjmuje tylko całkowite wartości liczbowe!';
    expect(Validators.number('')).toBe('');
    expect(Validators.number('asd')).toBe(invalidText);
    expect(Validators.number('123')).toBe('');
  });
});
