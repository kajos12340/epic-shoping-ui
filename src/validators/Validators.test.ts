import * as Validators from './Validators';

describe('validators', () => {
  it('validate required', () => {
    const invalidText = 'Pole jest wymagane!';
    expect(Validators.required('')).toBe(invalidText);
    expect(Validators.required(false)).toBe(invalidText);
    expect(Validators.required('value')).toBe('2');
  });
});
