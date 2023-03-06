/**
 * Validation for exact length
 * @param length exact string length
 * @param message error message
 * @returns React Hook Form's validation object
 */
export const exactLength = (length: number, message: string) => ({
  minLength: {
    value: length,
    message,
  },
  maxLength: {
    value: length,
    message,
  },
});
