export function createValidator(allowedValues: string[]) {
    return function(value: string): boolean {
      return allowedValues.includes(value);
    };
  }
  