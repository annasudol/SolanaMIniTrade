export const separator = (digits: number): string => digits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
