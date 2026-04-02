// src/utils/validation.js
export function validateContactForm({ name, email, message }) {
  const errors = {};
  if (!name || name.trim() === '') errors.name = 'Name is required';
  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!message || message.trim() === '') errors.message = 'Message is required';
  return errors;
}
