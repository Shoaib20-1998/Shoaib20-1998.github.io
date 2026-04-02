import { validateContactForm } from '../validation';

describe('validateContactForm', () => {
  it('returns no errors for valid input', () => {
    const errors = validateContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello there!',
    });
    expect(errors).toEqual({});
  });

  it('returns errors for all empty fields', () => {
    const errors = validateContactForm({ name: '', email: '', message: '' });
    expect(errors.name).toBe('Name is required');
    expect(errors.email).toBe('Email is required');
    expect(errors.message).toBe('Message is required');
  });

  it('returns errors for undefined fields', () => {
    const errors = validateContactForm({});
    expect(errors.name).toBe('Name is required');
    expect(errors.email).toBe('Email is required');
    expect(errors.message).toBe('Message is required');
  });

  it('returns errors for whitespace-only fields', () => {
    const errors = validateContactForm({
      name: '   ',
      email: '   ',
      message: '   ',
    });
    expect(errors.name).toBe('Name is required');
    expect(errors.email).toBe('Email is required');
    expect(errors.message).toBe('Message is required');
  });

  it('returns email format error for invalid email', () => {
    const errors = validateContactForm({
      name: 'John',
      email: 'not-an-email',
      message: 'Hi',
    });
    expect(errors.email).toBe('Please enter a valid email address');
    expect(errors.name).toBeUndefined();
    expect(errors.message).toBeUndefined();
  });

  it('validates email format correctly', () => {
    const errors = validateContactForm({
      name: 'John',
      email: 'missing@domain',
      message: 'Hi',
    });
    expect(errors.email).toBe('Please enter a valid email address');
  });

  it('accepts valid email formats', () => {
    const errors = validateContactForm({
      name: 'John',
      email: 'user@sub.domain.com',
      message: 'Hi',
    });
    expect(errors.email).toBeUndefined();
  });
});
